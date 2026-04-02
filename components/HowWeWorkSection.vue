<template>
  <section class="how-sec vbg" id="how">
    <VideoBackground src="/assets/videos/cloud-network.mp4" overlay-class="ov-net" />
    <div class="sec">
      <div class="how-grid">
        <div>
          <div class="eyebrow">Our Approach</div>
          <h2 class="sec-title">How We Work<br />with You</h2>
          <div class="how-steps">
            <div v-for="step in steps" :key="step.num" class="how-step">
              <div class="how-num">{{ step.num }}</div>
              <div>
                <h4>{{ step.title }}</h4>
                <p>{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="arch-card">
            <div class="arch-lbl">
              <img src="/assets/images/proxima-logo.png" alt="Proxima" />
              AI Architecture
            </div>
            <div class="arch-row">
              <div class="ap ap-t">Slack</div>
              <div class="ap ap-t">MS Teams</div>
              <div class="ap ap-t">WhatsApp</div>
            </div>
            <div class="arch-row">
              <div class="ap ap-g">REST APIs</div>
              <span class="arch-arrow">↓</span>
              <div class="ap ap-g">Webhooks</div>
            </div>
            <div class="arch-center">
              <div class="arch-ci">✦</div>
              <div class="arch-ct">
                Proxima AI Core
                <small>LLM · NLP · Intent Engine · Routing</small>
              </div>
            </div>
            <div class="arch-divider"></div>
            <div class="arch-row">
              <div class="ap ap-b">SAP / ERP</div>
              <div class="ap ap-b">Salesforce</div>
            </div>
            <div class="arch-row">
              <div class="ap ap-b">ServiceNow</div>
              <div class="ap ap-b">Custom APIs</div>
            </div>
            <div class="arch-divider"></div>
            <div class="arch-row">
              <div class="ap ap-a">AWS</div>
              <div class="ap ap-a">Azure</div>
              <div class="ap ap-a">GCP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    num: 1,
    title: 'Discovery & AI Readiness',
    description:
      'We map your current systems, data flows, and pain points to identify where AI can deliver the highest-value outcomes quickly.',
  },
  {
    num: 2,
    title: 'Solution Design',
    description:
      'Our architects design an AI-first solution — selecting the right models, integration patterns, and delivery channels for your context.',
  },
  {
    num: 3,
    title: 'Agile Build & Deploy',
    description:
      'Rapid, iterative delivery. Most solutions reach production in 6–10 weeks with continuous feedback loops built in from day one.',
  },
  {
    num: 4,
    title: 'Operate & Evolve',
    description:
      'We stay on as your AI operations partner — monitoring models, improving accuracy over time, and expanding to new use cases.',
  },
]
</script>
