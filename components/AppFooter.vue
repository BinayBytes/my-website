<template>
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/">
          <img
            src="/assets/images/proxima-logo.png"
            alt="Proxima Systems"
            class="footer-logo"
          />
        </a>
        <p>
          AI-First IT Services. We build AI solutions, cloud platforms, and
          intelligent operations for enterprises that want to move faster and
          smarter.
        </p>
      </div>

      <div class="footer-col">
        <h5>AI Solutions</h5>
        <a href="#">Device Log Analysis</a>
        <a href="#">Contract Management AI</a>
        <a href="#">IT Ops Management AI</a>
      </div>

      <div class="footer-col">
        <h5>AI Products</h5>
        <a href="https://www.flowmapper.ai" target="_blank" rel="noopener"
          >FlowMapper.ai</a
        >
        <a href="https://provento.ai" target="_blank" rel="noopener"
          >Provento.ai</a
        >
        <a href="https://gpt.proximabiz.net" target="_blank" rel="noopener"
          >Proxima GPT</a
        >
      </div>

      <div class="footer-col">
        <h5>Company</h5>
        <a href="#team" @click.prevent="scrollToSection('team')">About Us</a>
        <a href="#">Careers</a>
        <a href="/news">News</a>
        <a href="#partners" @click.prevent="scrollToSection('partners')"
          >Partners</a
        >
        <a href="#" @click.prevent="showContact = true">Contact Us</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>

    <div class="footer-btm">
      <div class="footer-copy">
        © 2020–2026 Proxima Systems. All rights reserved.
      </div>
      <div class="footer-soc">
        <a
          href="https://www.linkedin.com/company/proxima-biz"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>
        <a href="mailto:contact@proximabiz.com">Email</a>
      </div>
    </div>
  </footer>
  <ContactModal v-model="showContact" />
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
