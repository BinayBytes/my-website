<template>
  <section class="ind-sec vbg" id="industries">
    <VideoBackground src="/assets/videos/smart-city.mp4" overlay-class="ov-net" />
    <div class="sec">
      <div class="eyebrow">Industries</div>
      <h2 class="sec-title">AI Solutions Across<br />Every Vertical</h2>
      <p class="sec-sub">
        Our team has built AI and cloud platforms for some of the most complex operating
        environments across sectors.
      </p>
      <div class="ind-grid">
        <div v-for="industry in industries" :key="industry.title" class="ind-card">
          <div class="ind-icon">{{ industry.icon }}</div>
          <h4>{{ industry.title }}</h4>
          <p>{{ industry.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const industries = [
  {
    icon: '🏦',
    title: 'Financial Services',
    description:
      'AI-powered compliance monitoring, contract intelligence, and fraud detection for banks, FinTechs, and insurance providers.',
  },
  {
    icon: '🏥',
    title: 'Healthcare & Life Sciences',
    description:
      'Intelligent workflow automation, clinical data processing, and cloud platforms built for HIPAA and regulatory compliance.',
  },
  {
    icon: '🏗️',
    title: 'Real Estate & PropTech',
    description:
      'AI-driven contract management, IoT device monitoring, and intelligent operations platforms for real estate enterprises.',
  },
  {
    icon: '📡',
    title: 'IoT & Connected Devices',
    description:
      'Device log analysis, edge AI processing, and scalable cloud infrastructure for IoT platform vendors and operators.',
  },
  {
    icon: '💻',
    title: 'Technology & SaaS',
    description:
      'AI model engineering, cloud-native architecture, and SRE services for high-growth tech companies and SaaS platforms.',
  },
  {
    icon: '🏛️',
    title: 'Non-Profits & Public Sector',
    description:
      'Cost-efficient AI and cloud solutions for large technology non-profits and public sector organisations.',
  },
]
</script>
