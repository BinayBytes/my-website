<template>
  <section class="part-sec">
    <div class="sec">
      <div class="div-line"></div>
      <div class="partners-header">
        <div class="eyebrow">Technology Partners</div>
        <h3>Working with the platforms that power enterprise</h3>
      </div>
      <div class="part-row">
        <div v-for="partner in partners" :key="partner" class="plogo">{{ partner }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Salesforce', 'ServiceNow', 'Proofpoint']
</script>
