<template>
  <section class="svc-sec vbg" id="services">
    <VideoBackground src="/assets/videos/it-services.mp4" overlay-class="ov-dc" />
    <div class="sec">
      <div class="svc-grid">
        <div class="svc-sticky">
          <div class="eyebrow">What We Do</div>
          <h2 class="sec-title">IT Services<br />Reimagined with AI</h2>
          <p class="sec-sub">
            Every engagement at Proxima starts with the same question: where can AI do the heavy
            lifting so your team can focus on what matters?
          </p>
        </div>
        <div class="svc-items">
          <div v-for="service in services" :key="service.title" class="svc-item">
            <div class="svc-top">
              <div :class="['svc-icon', service.iconClass]">{{ service.icon }}</div>
              <span v-if="service.badge" class="svc-badge">{{ service.badge }}</span>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <div class="tags">
              <span v-for="tag in service.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: '🤖',
    iconClass: 'ic-t',
    badge: 'Core Offering',
    title: 'AI Solutions & Engineering',
    description:
      'We design and build AI solutions tailored to your business problems — from LLM-powered applications to custom ML models, agentic workflows, and GenAI integration with your existing stack.',
    tags: ['GenAI', 'LLMs', 'NLP', 'ML Models', 'Agentic AI'],
  },
  {
    icon: '☁️',
    iconClass: 'ic-b',
    badge: 'Platform',
    title: 'Cloud Native Platform Engineering',
    description:
      'Scalable, resilient cloud architectures on AWS, Azure, and GCP. We build cloud-native platforms engineered for AI workloads from the ground up — not retrofitted.',
    tags: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Microservices'],
  },
  {
    icon: '🛡️',
    iconClass: 'ic-a',
    badge: 'Operations',
    title: 'Cloud Infrastructure Operations',
    description:
      'High-availability operations with SLA-driven support and 24/7 remote infrastructure management. AI-augmented monitoring and incident response keeps your systems running.',
    tags: ['SRE', 'Observability', 'MTTR Reduction', 'AIOps'],
  },
  {
    icon: '🎨',
    iconClass: 'ic-p',
    badge: null,
    title: 'UX & Product Design',
    description:
      'User-centric design that makes complex AI products feel simple. From AI chat interfaces to enterprise dashboards, we design experiences people actually want to use.',
    tags: ['UI/UX', 'Figma', 'Framer', 'Adobe XD'],
  },
]
</script>
