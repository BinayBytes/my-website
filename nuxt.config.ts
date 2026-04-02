// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Proxima Systems – AI-First IT Services',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300&family=Nunito:wght@700;800;900&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/styles.css'],

  // Runtime config — set these in .env or your deployment environment
  runtimeConfig: {
    // Private server-side only keys
    awsRegion: process.env.AWS_REGION || 'us-east-1',
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    // Email addresses
    contactEmail: process.env.CONTACT_EMAIL || 'contact@proximabiz.com',
    sesFromEmail: process.env.SES_FROM_EMAIL || 'no-reply@proximabiz.com',
  },

  compatibilityDate: '2024-04-03'
})