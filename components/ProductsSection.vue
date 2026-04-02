<template>
  <section class="prod-sec vbg" id="products">
    <VideoBackground src="/assets/videos/ai-products.mp4" overlay-class="ov-dc" />
    <div class="sec">
      <div class="div-line"></div>
      <div class="eyebrow">AI Products</div>
      <h2 class="sec-title">Our Commercial AI Products</h2>
      <p class="sec-sub">
        Fully productised AI platforms built by Proxima — available today for your enterprise.
      </p>
      <div class="prod-grid">
        <div v-for="product in products" :key="product.name" class="prod-card">
          <div class="prod-icon">
            <img :src="product.logo" :alt="product.name" class="prod-logo" />
          </div>
          <div>
            <div class="prod-badge">{{ product.badge }}</div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <a :href="product.url" target="_blank" rel="noopener" class="prod-link">
              {{ product.linkText }} →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    name: 'Provento.ai',
    logo: '/assets/images/provento-logo.png',
    badge: 'Product · Enterprise AI Chat',
    description:
      'Enterprise AI that connects your business systems to Slack, Teams, and WhatsApp. Employees interact with ERP, CRM, and HRMS through natural language — no new apps, no training cycles.',
    url: 'https://provento.ai',
    linkText: 'Visit provento.ai',
  },
  {
    name: 'FlowMapper.ai',
    logo: '/assets/images/flowmapper-logo.png',
    badge: 'Product · Process Intelligence',
    description:
      'AI-powered business process mapping and optimisation platform. FlowMapper automatically discovers, visualises, and streamlines your workflows — turning complex process documentation into clear, actionable intelligence.',
    url: 'https://www.flowmapper.ai',
    linkText: 'Visit flowmapper.ai',
  },
]
</script>
