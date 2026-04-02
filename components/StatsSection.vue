<template>
  <section class="stats-sec">
    <div class="sec">
      <div class="stats-bar">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-n">{{ stat.number }}</span>
          <div class="stat-l" v-html="stat.label"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { number: '10+', label: 'Years Building<br>AI &amp; Cloud Platforms' },
  { number: '5', label: 'AI Solutions &amp;<br>Products Shipped' },
  { number: '50+', label: 'Enterprise System<br>Integrations Built' },
  { number: '24/7', label: 'Cloud SRE &amp;<br>Managed Support' },
]
</script>
