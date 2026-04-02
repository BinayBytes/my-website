import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

type EmailMessage = {
    to: string | string[]
    from: string
    subject: string
    text?: string
    html?: string
    replyTo?: string | string[]
}

function toArray(v?: string | string[]): string[] | undefined {
    if (!v) return undefined
    return Array.isArray(v) ? v : [v]
}

async function sendEmail(msg: EmailMessage): Promise<void> {
    const config = useRuntimeConfig()
    const client = new SESClient({
        region: config.awsRegion as string,
        credentials: {
            accessKeyId: config.awsAccessKeyId as string,
            secretAccessKey: config.awsSecretAccessKey as string,
        },
    })

    const ToAddresses = toArray(msg.to) || []
    const ReplyToAddresses = toArray(msg.replyTo) || toArray(msg.from)

    const command = new SendEmailCommand({
        Destination: { ToAddresses },
        Message: {
            Subject: { Data: msg.subject, Charset: 'UTF-8' },
            Body: {
                Html: msg.html ? { Data: msg.html, Charset: 'UTF-8' } : undefined,
                Text: msg.text ? { Data: msg.text, Charset: 'UTF-8' } : undefined,
            },
        },
        Source: msg.from,
        ReplyToAddresses,
    })

    await client.send(command)
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, company, message } = body

    if (!name || !email || !message) {
        throw createError({ statusCode: 400, statusMessage: 'Name, email, and message are required.' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid email address.' })
    }

    const config = useRuntimeConfig()
    const toAddress = config.contactEmail || 'contact@proximabiz.com'
    const fromAddress = config.sesFromEmail || 'no-reply@proximabiz.com'

    const html = `
        <div style="font-family: 'Inter', 'Nunito Sans', sans-serif; background: #020617; padding: 40px 0;">
            <div style="max-width: 640px; margin: auto; background: linear-gradient(180deg, #020617 0%, #060F1E 100%); border-radius: 16px; padding: 32px; border: 1px solid rgba(0, 201, 174, 0.15); box-shadow: 0 10px 40px rgba(0,0,0,0.4);">

                <!-- Header -->
                <div style="margin-bottom: 28px;">
                <div style="font-size: 12px; color: #00C9AE; letter-spacing: 1px; font-weight: 600;">
                    PROXIMA AI PLATFORM
                </div>
                <h1 style="margin: 8px 0 6px; font-size: 22px; color: #F4F8FF; font-weight: 700;">
                    New Contact Enquiry
                </h1>
                <p style="margin: 0; font-size: 13px; color: #7C93B6;">
                    A new message was submitted via your website
                </p>
                </div>

                <!-- Divider -->
                <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(0,201,174,0.4), transparent); margin: 20px 0;"></div>

                <!-- Info Card -->
                <div style="background: rgba(10, 25, 47, 0.6); border: 1px solid rgba(0,201,174,0.1); border-radius: 12px; padding: 20px;">

                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                    <td style="padding: 8px 0; color: #7C93B6; font-size: 12px;">Name</td>
                    <td style="padding: 8px 0; color: #FFFFFF; font-weight: 600;">${name}</td>
                    </tr>

                    <tr>
                    <td style="padding: 8px 0; color: #7C93B6; font-size: 12px;">Email</td>
                    <td style="padding: 8px 0;">
                        <a href="mailto:${email}" style="color: #00C9AE; text-decoration: none;">
                        ${email}
                        </a>
                    </td>
                    </tr>

                    ${company ? `
                    <tr>
                    <td style="padding: 8px 0; color: #7C93B6; font-size: 12px;">Company</td>
                    <td style="padding: 8px 0; color: #E6EDF7;">${company}</td>
                    </tr>
                    ` : ''}

                    <tr>
                    <td style="padding: 8px 0; color: #7C93B6; font-size: 12px; vertical-align: top;">Message</td>
                    <td style="padding: 8px 0; color: #E6EDF7; line-height: 1.6;">
                        ${message.replace(/\n/g, '<br>')}
                    </td>
                    </tr>
                </table>
                </div>

                <!-- CTA -->
                <div style="margin-top: 24px; text-align: center;">
                <a href="mailto:${email}"
                    style="display: inline-block; padding: 10px 18px; background: #00C9AE; color: #020617; font-weight: 600; border-radius: 8px; text-decoration: none;">
                    Reply to ${name}
                </a>
                </div>

                <!-- Footer -->
                <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid rgba(0,201,174,0.15); text-align: center;">

                    <div style="font-size: 12px; color: #5F7694; margin-bottom: 6px;">
                        Proxima Systems • AI-First IT Services
                    </div>

                    <div style="font-size: 11px; color: #3F5572;">
                        © 2020–2026 Proxima Systems. All rights reserved.
                    </div>

                </div>

            </div>
        </div>
    `

    const text = `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ''}\n\nMessage:\n${message}`

    await sendEmail({
        to: toAddress,
        from: fromAddress,
        subject: `New Enquiry from ${name}${company ? ` (${company})` : ''} — Proxima Systems`,
        html,
        text,
        replyTo: email,
    })

    return { success: true }
})