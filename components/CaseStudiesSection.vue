<template>
  <section class="cases-sec vbg">
    <VideoBackground src="/assets/videos/data-stream.mp4" overlay-class="ov-teal" />
    <div class="sec">
      <div class="eyebrow">Client Impact</div>
      <h2 class="sec-title">Results We've Delivered</h2>
      <p class="sec-sub">
        A snapshot of the outcomes our AI and cloud solutions have created for our clients.
      </p>
      <div class="cases-grid">
        <div v-for="caseStudy in caseStudies" :key="caseStudy.metric" class="case-card">
          <div class="case-ind">{{ caseStudy.industry }}</div>
          <h4>{{ caseStudy.title }}</h4>
          <p>{{ caseStudy.description }}</p>
          <div class="case-metric">
            <span class="case-n">{{ caseStudy.metric }}</span>
            <span class="case-lbl">{{ caseStudy.metricLabel }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const caseStudies = [
  {
    industry: 'IoT Platform · Device Monitoring',
    title: 'AI-Powered Log Analysis Cuts Incident Response Time',
    description:
      'Deployed Device Log Analysis AI for a major IoT platform vendor, automatically processing millions of device events daily and surfacing anomalies before users were impacted.',
    metric: '73%',
    metricLabel: 'reduction in mean time to detect',
  },
  {
    industry: 'Real Estate · Legal Ops',
    title: 'Contract AI Eliminates Manual Review Bottlenecks',
    description:
      'Built a Contract Management AI solution for a real estate startup that automatically extracts key clauses, flags risks, and tracks renewal deadlines across 2,000+ active contracts.',
    metric: '85%',
    metricLabel: 'faster contract review cycle',
  },
  {
    industry: 'Technology Non-Profit · IT Operations',
    title: 'AI-Augmented IT Ops Reduces Operational Toil',
    description:
      'Implemented IT Ops Management AI for a large technology non-profit, enabling automated runbook execution, intelligent alerting, and conversational helpdesk across distributed infrastructure.',
    metric: '60%',
    metricLabel: 'reduction in manual ops tasks',
  },
]
</script>
