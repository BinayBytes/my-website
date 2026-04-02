<template>
  <nav>
    <a href="/">
      <img
        src="/assets/images/proxima-logo.png"
        alt="Proxima Systems"
        class="logo"
      />
    </a>
    <ul>
      <li>
        <a href="#solutions" @click.prevent="scrollToSection('solutions')"
          >AI Solutions</a
        >
      </li>
      <li>
        <a
          href="#products"
          class="nav-pill"
          @click.prevent="scrollToSection('products')"
          >⬡ AI Products</a
        >
      </li>
      <li>
        <a href="#services" @click.prevent="scrollToSection('services')"
          >Services</a
        >
      </li>
      <li>
        <a href="#industries" @click.prevent="scrollToSection('industries')"
          >Industries</a
        >
      </li>
      <li>
        <a href="#team" @click.prevent="scrollToSection('team')">About</a>
      </li>
      <li>
        <button class="nav-cta" @click="showContact = true">
          Get in Touch
        </button>
      </li>
    </ul>

    <ContactModal v-model="showContact" />
  </nav>
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
