<template>
  <section class="hero vbg">
    <VideoBackground
      src="/assets/videos/hero-ai.mp4"
      overlay-class="ov-hero"
      :eager="true"
    />
    <div class="hero-orb hero-orb1"></div>
    <div class="hero-orb hero-orb2"></div>
    <div class="hero-inner">
      <div>
        <div class="eyebrow-badge fi">AI-First IT Services Company</div>
        <h1 class="hero-title fi d1">
          We Build <em>AI</em> That<br />Powers Your Business
        </h1>
        <p class="hero-sub fi d2">
          Proxima Systems delivers AI-native IT services — from enterprise AI
          solutions and cloud platforms to intelligent automation. We don't just
          adopt AI; we engineer it into the core of how your business operates.
        </p>
        <div class="cta-row fi d3">
          <a
            href="#solutions"
            @click.prevent="scrollToSection('solutions')"
            class="btn-p"
            >Explore AI Solutions</a
          >
          <button class="btn-g" @click="showContact = true">
            Talk to Our Team
          </button>
        </div>
        <div class="trust-row fi d4">
          <span class="trust-lbl">Expertise in</span>
          <div class="trust-pills">
            <span class="tpill">GenAI</span>
            <span class="tpill">LLMs</span>
            <span class="tpill">Cloud Native</span>
            <span class="tpill">SRE</span>
            <span class="tpill">NLP</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="float-card float-card-1">
          <div class="fc-dot"></div>
          <div class="fc-txt">
            <strong>AI Analysis Complete</strong><br />Device log anomaly
            detected
          </div>
        </div>
        <div class="float-card float-card-2">
          <div class="fc-dot"></div>
          <div class="fc-txt">
            <strong>Contract Risk: Low</strong><br />3 clauses reviewed by AI
          </div>
        </div>
        <div class="h-card">
          <div class="h-card-hdr">
            <span class="h-card-ttl">Proxima AI Platform</span>
            <div class="hdr-dots">
              <div class="hd hd-r"></div>
              <div class="hd hd-y"></div>
              <div class="hd hd-g"></div>
            </div>
          </div>
          <div class="h-card-bdy">
            <div class="ai-q">
              How many critical alerts in the last 24 hours across our SAP
              instances?
            </div>
            <div class="ai-ans">
              Analysed <strong>14,280 log entries</strong> across 6 SAP
              instances. Found
              <strong class="critical-text">3 critical</strong>,
              <strong class="warning-text">11 warnings</strong>, 0 outages. Root
              cause: memory threshold breach on PRD-02.
            </div>
            <div class="chips">
              <span class="chip on">📊 Log Analysis</span>
              <span class="chip on">🔎 Root Cause</span>
              <span class="chip">📋 Report Ready</span>
            </div>
          </div>
          <div class="h-stats">
            <div class="hs">
              <span class="hs-n">14K+</span>
              <div class="hs-l">Logs Analysed</div>
            </div>
            <div class="hs">
              <span class="hs-n">3s</span>
              <div class="hs-l">Response Time</div>
            </div>
            <div class="hs">
              <span class="hs-n">98%</span>
              <div class="hs-l">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ContactModal v-model="showContact" />
  </section>
</template>

<script setup>
const showContact = ref(false);

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = 80; // adjust based on header height
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
</script>
