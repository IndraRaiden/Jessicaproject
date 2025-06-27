<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <p class="intro">Send us a message and we’ll get back to you shortly.</p>

    <div class="field">
      <label for="cname">Full Name</label>
      <input id="cname" v-model="form.name" type="text" required />
    </div>

    <div class="field">
      <label for="cemail">Email</label>
      <input id="cemail" v-model="form.email" type="email" required />
    </div>

    <div class="field">
      <label for="cphone">Phone</label>
      <input id="cphone" v-model="form.phone" type="tel" required />
    </div>

    <div class="field">
      <label for="cmessage">Message</label>
      <textarea id="cmessage" v-model="form.message" rows="3" required></textarea>
    </div>

    <button class="submit-btn" type="submit">Send</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
});

function handleSubmit() {
  const mailtoLink = `mailto:info@weareoara.com?subject=General%20Inquiry&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage:\n${form.message}`)}`;
  window.location.href = mailtoLink;
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  font-family: 'Be Vietnam Pro', sans-serif;
}
.intro {
  margin-bottom: 0.5rem;
  text-align: center;
}
.field {
  display: flex;
  flex-direction: column;
  text-align: left;
}
label {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
}
input, textarea {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
}
.submit-btn {
  align-self: center;
  background: #000;
  color: #fff;
  border: none;
  padding: 0.6rem 2rem;
  cursor: pointer;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
}
.submit-btn:hover {
  opacity: 0.85;
}
</style>
