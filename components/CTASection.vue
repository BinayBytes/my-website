<template>
  <section class="cta-sec vbg">
    <VideoBackground
      src="/assets/videos/circuit-board.mp4"
      overlay-class="ov-dark"
    />
    <div class="sec">
      <div class="cta-box">
        <h2>Ready to put AI<br />to work for your business?</h2>
        <p>
          Whether you're looking to deploy one of our AI solutions, build a
          custom platform,<br />
          or modernise your IT operations — our team is ready to help.
        </p>
        <div class="cta-row cta-row-centered">
          <button class="btn-p" @click="showContact = true">
            Start the Conversation
          </button>
          <a href="https://www.proximabiz.com/solutions/" class="btn-g"
            >View All Services</a
          >
        </div>
        <div class="cta-links">
          <button class="cta-link-btn" @click="showContact = true">
            ✉ contact@proximabiz.com
          </button>
          <a
            href="https://www.linkedin.com/company/proxima-biz"
            target="_blank"
            rel="noopener"
          >
            in LinkedIn
          </a>
          <a href="https://www.proximabiz.com">🌐 proximabiz.com</a>
        </div>
      </div>
    </div>

    <ContactModal v-model="showContact" />
  </section>
</template>

<script setup>
const showContact = ref(false);
</script>

<style scoped>
.cta-link-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
  font-family: inherit;
  padding: 0;
}
.cta-link-btn:hover {
  color: var(--teal);
}
</style>
