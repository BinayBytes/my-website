<template>
  <div class="mq-sec">
    <div class="mq-lbl">Powering</div>
    <div class="mq-wrapper">
      <div class="mq-track">
        <div v-for="(item, i) in items.concat(items)" :key="i" class="mi">
          <div class="mi-dot"></div>
          <span class="mi-txt">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  'Device Log Analysis',
  'Contract Management AI',
  'IT Ops Automation',
  'Cloud SRE',
  'Generative AI',
  'LLM Engineering',
  'FlowMapper.ai',
  'Provento.ai',
  'NLP Platforms',
  'Cloud Native Apps',
]
</script>
