<template>
  <section class="ai-sec vbg" id="solutions">
    <VideoBackground src="/assets/videos/datacenter.mp4" overlay-class="ov-dc" />
    <div class="sec">
      <div class="ai-intro">
        <div>
          <div class="eyebrow">AI Solutions</div>
          <h2 class="sec-title">3 Purpose-Built<br />Enterprise AI Solutions</h2>
        </div>
        <div class="ai-intro-r">
          <a href="mailto:contact@proximabiz.com" class="btn-g">Request a Demo →</a>
        </div>
      </div>
      <div class="sol-grid">
        <div v-for="solution in solutions" :key="solution.num" class="sol-card">
          <div class="sol-shine"></div>
          <div class="sol-tag">{{ solution.tag }}</div>
          <h3>{{ solution.title }}</h3>
          <p>{{ solution.description }}</p>
          <ul class="sol-feats">
            <li v-for="feat in solution.features" :key="feat">{{ feat }}</li>
          </ul>
          <a href="mailto:contact@proximabiz.com" class="sol-link">Learn more →</a>
          <div class="sol-num">{{ solution.num }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const solutions = [
  {
    num: '01',
    tag: 'AI · Log Intelligence',
    title: 'Device Log Report Analysis',
    description:
      'Transform raw device and network logs into clear, actionable intelligence. Our AI engine automatically parses, correlates, and surfaces anomalies in seconds.',
    features: [
      'Automated ingestion from any device, OS, or platform',
      'AI-powered anomaly detection & root cause identification',
      'Natural language query interface — ask your logs anything',
      'Trend analysis, capacity forecasting & health scoring',
      'Real-time alerts with intelligent severity classification',
    ],
  },
  {
    num: '02',
    tag: 'AI · Legal & Compliance',
    title: 'Contract Management AI',
    description:
      'AI-driven contract lifecycle management that reads, extracts, and monitors your agreements end to end. Catch risks before they become liabilities.',
    features: [
      'LLM-powered contract parsing & clause extraction',
      'Automated risk scoring and redline recommendations',
      'Renewal, obligation & milestone tracking',
      'Semantic search across your entire contract repository',
      'Integrates with Salesforce, DocuSign & SharePoint',
    ],
  },
  {
    num: '03',
    tag: 'AI · IT Operations',
    title: 'IT Ops Management AI',
    description:
      'Bring intelligence to your IT operations with an AI layer that monitors, predicts, and automates across your infrastructure — reducing MTTR and engineering toil.',
    features: [
      'Predictive incident detection before users are impacted',
      'AI-assisted runbook execution & automated remediation',
      'Conversational IT helpdesk via Slack, Teams & WhatsApp',
      'Intelligent change risk assessment & impact analysis',
      'SLA monitoring with automated escalation workflows',
    ],
  },
]
</script>
