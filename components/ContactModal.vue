<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="contact-backdrop">
        <div
          class="contact-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <!-- Glow orbs -->
          <div class="modal-orb modal-orb1"></div>
          <div class="modal-orb modal-orb2"></div>

          <!-- Top bar -->
          <div class="modal-top">
            <div class="modal-eyebrow">
              <div class="eyebrow-dot"></div>
              Get in Touch
            </div>
            <button
              class="modal-close"
              @click="$emit('update:modelValue', false)"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M2 2l14 14M16 2L2 16"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>

          <!-- Header -->
          <div class="modal-header">
            <h2 id="modal-title" class="modal-title">
              Start the<br /><em>Conversation</em>
            </h2>
            <p class="modal-sub">
              Tell us about your project and we'll get back to you within one
              business day.
            </p>
          </div>

          <!-- Form -->
          <form
            v-if="!submitted"
            class="contact-form"
            @submit.prevent="handleSubmit"
            novalidate
          >
            <div class="form-row">
              <div class="form-group" :class="{ error: errors.name }">
                <label for="cf-name"
                  >Full Name <span class="req">*</span></label
                >
                <input
                  id="cf-name"
                  v-model="form.name"
                  type="text"
                  placeholder="Jane Smith"
                  autocomplete="name"
                  @blur="validateField('name')"
                />
                <span v-if="errors.name" class="form-error">{{
                  errors.name
                }}</span>
              </div>
              <div class="form-group" :class="{ error: errors.email }">
                <label for="cf-email"
                  >Work Email <span class="req">*</span></label
                >
                <input
                  id="cf-email"
                  v-model="form.email"
                  type="email"
                  placeholder="jane@company.com"
                  autocomplete="email"
                  @blur="validateField('email')"
                />
                <span v-if="errors.email" class="form-error">{{
                  errors.email
                }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="cf-company">Company Name</label>
              <input
                id="cf-company"
                v-model="form.company"
                type="text"
                placeholder="Acme Corp"
                autocomplete="organization"
              />
            </div>

            <div class="form-group" :class="{ error: errors.message }">
              <label for="cf-message">Message <span class="req">*</span></label>
              <textarea
                id="cf-message"
                v-model="form.message"
                rows="4"
                placeholder="Tell us about your project, goals, or any questions you have..."
                @blur="validateField('message')"
              ></textarea>
              <span v-if="errors.message" class="form-error">{{
                errors.message
              }}</span>
            </div>

            <div v-if="serverError" class="form-server-error">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="#FC6B6B"
                  stroke-width="1.5"
                />
                <path
                  d="M8 5v4M8 11v.5"
                  stroke="#FC6B6B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              {{ serverError }}
            </div>

            <button type="submit" class="submit-btn" :disabled="loading">
              <span v-if="!loading">Send Message →</span>
              <span v-else class="btn-loading">
                <span class="spinner"></span>
                Sending...
              </span>
            </button>
          </form>

          <!-- Success state -->
          <div v-else class="contact-success">
            <div class="success-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M5 14l7 7L23 7"
                  stroke="#00C9AE"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3>Message Sent!</h3>
            <p>
              Thanks for reaching out. We'll be in touch within one business
              day.
            </p>
            <button
              class="submit-btn"
              style="margin-top: 8px"
              @click="$emit('update:modelValue', false)"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const form = reactive({ name: "", email: "", company: "", message: "" });
const errors = reactive({ name: "", email: "", message: "" });
const loading = ref(false);
const submitted = ref(false);
const serverError = ref("");

// Reset when closed
watch(
  () => props.modelValue,
  (val) => {
    if (!val) {
      setTimeout(() => {
        submitted.value = false;
        serverError.value = "";
        Object.assign(form, { name: "", email: "", company: "", message: "" });
        Object.assign(errors, { name: "", email: "", message: "" });
      }, 300);
    }
  },
);

function validateField(field) {
  if (field === "name") {
    errors.name = form.name.trim() ? "" : "Name is required.";
  }
  if (field === "email") {
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email.";
    } else {
      errors.email = "";
    }
  }
  if (field === "message") {
    errors.message = form.message.trim() ? "" : "Message is required.";
  }
}

function validateAll() {
  validateField("name");
  validateField("email");
  validateField("message");
  return !errors.name && !errors.email && !errors.message;
}

async function handleSubmit() {
  if (!validateAll()) return;
  loading.value = true;
  serverError.value = "";
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message,
      },
    });
    submitted.value = true;
  } catch (err) {
    serverError.value =
      err?.data?.statusMessage || "Something went wrong. Please try again.";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
/* Backdrop */
.contact-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(6, 15, 30, 0.82);
  backdrop-filter: blur(12px);
}

/* Modal box */
.contact-modal {
  position: relative;
  width: 100%;
  max-width: 580px;
  max-height: 90vh;
  overflow-y: auto;
  background: linear-gradient(145deg, #0c1e36 0%, #060f1e 100%);
  border: 1px solid rgba(0, 201, 174, 0.22);
  border-radius: 20px;
  padding: 36px 40px 40px;
  overflow: hidden;
}

/* Glow orbs */
.modal-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.modal-orb1 {
  width: 340px;
  height: 340px;
  background: radial-gradient(
    circle,
    rgba(0, 201, 174, 0.07) 0%,
    transparent 70%
  );
  top: -120px;
  right: -80px;
}
.modal-orb2 {
  width: 260px;
  height: 260px;
  background: radial-gradient(
    circle,
    rgba(27, 114, 245, 0.05) 0%,
    transparent 70%
  );
  bottom: -80px;
  left: -60px;
}

/* Top bar */
.modal-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
}

.modal-eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
}

.eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--teal);
  animation: blink 2.2s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.65);
  }
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: var(--muted);
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s;
}
.modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  border-color: rgba(255, 255, 255, 0.15);
}

/* Header */
.modal-header {
  margin-bottom: 28px;
  position: relative;
  z-index: 2;
}
.modal-title {
  font-family: "Nunito", sans-serif;
  font-size: clamp(1.7rem, 3vw, 2.2rem);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.08;
  margin-bottom: 10px;
  color: var(--white);
}
.modal-title em {
  font-style: normal;
  color: var(--teal);
}
.modal-sub {
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.65;
}

/* Form */
.contact-form {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.form-group label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--white);
  letter-spacing: 0.02em;
}
.req {
  color: var(--teal);
}

.form-group input,
.form-group textarea {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 11px 14px;
  color: var(--white);
  font-family: "Nunito Sans", sans-serif;
  font-size: 0.88rem;
  font-weight: 300;
  line-height: 1.5;
  transition:
    border-color 0.2s,
    background 0.2s,
    box-shadow 0.2s;
  resize: none;
  outline: none;
  width: 100%;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--muted2);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: rgba(0, 201, 174, 0.45);
  background: rgba(0, 201, 174, 0.04);
  box-shadow: 0 0 0 3px rgba(0, 201, 174, 0.08);
}

.form-group.error input,
.form-group.error textarea {
  border-color: rgba(252, 107, 107, 0.5);
}

.form-error {
  font-size: 0.74rem;
  color: #fc6b6b;
  margin-top: -2px;
}

.form-server-error {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(252, 107, 107, 0.08);
  border: 1px solid rgba(252, 107, 107, 0.25);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.82rem;
  color: #fc6b6b;
}

/* Submit button */
.submit-btn {
  width: 100%;
  background: var(--teal);
  color: var(--ink);
  padding: 0.9rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  font-family: "Nunito Sans", sans-serif;
  border: none;
  cursor: pointer;
  transition:
    background 0.2s,
    transform 0.15s,
    opacity 0.2s;
  margin-top: 4px;
}
.submit-btn:hover:not(:disabled) {
  background: var(--teal2);
  transform: translateY(-1px);
}
.submit-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.btn-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(6, 15, 30, 0.3);
  border-top-color: var(--ink);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Success state */
.contact-success {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px 0 4px;
}
.success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(0, 201, 174, 0.1);
  border: 1px solid rgba(0, 201, 174, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}
.contact-success h3 {
  font-family: "Nunito", sans-serif;
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
  color: var(--white);
}
.contact-success p {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.65;
  max-width: 320px;
  margin: 0 auto 24px;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .contact-modal,
.modal-leave-active .contact-modal {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .contact-modal {
  transform: translateY(16px) scale(0.97);
  opacity: 0;
}
.modal-leave-to .contact-modal {
  transform: translateY(8px) scale(0.98);
  opacity: 0;
}

/* Scrollbar within modal */
.contact-modal::-webkit-scrollbar {
  width: 4px;
}
.contact-modal::-webkit-scrollbar-track {
  background: transparent;
}
.contact-modal::-webkit-scrollbar-thumb {
  background: rgba(0, 201, 174, 0.2);
  border-radius: 2px;
}

@media (max-width: 560px) {
  .contact-modal {
    padding: 28px 22px 30px;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
