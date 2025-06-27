<template>
  <form class="work-form" @submit.prevent="handleSubmit">
    <p class="intro">Interested in joining our team or collaborating with us? Fill in the details below and we’ll get back to you.</p>

    <div class="field">
      <label for="name">Full Name</label>
      <input id="name" v-model="form.name" type="text" required />
    </div>

    <div class="field">
      <label for="phone">Phone</label>
      <input id="phone" v-model="form.phone" type="tel" required />
    </div>

    <div class="field">
      <label for="email">Email</label>
      <input id="email" v-model="form.email" type="email" required />
    </div>

    <div class="field">
      <label for="portfolio">Portfolio Link</label>
      <input id="portfolio" v-model="form.portfolio" type="url" required />
    </div>

    <div class="field">
      <label for="message">Message</label>
      <textarea id="message" v-model="form.message" rows="3" required></textarea>
    </div>

    <button class="submit-btn" type="submit">Send</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  phone: '',
  email: '',
  portfolio: '',
  message: ''
});

function handleSubmit() {
  const mailtoLink = `mailto:work@weareoara.com?subject=Work%20With%20Us%20Inquiry&body=${encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nPortfolio: ${form.portfolio}\nMessage:\n${form.message}`)}`;
  window.location.href = mailtoLink;
}
</script>

<style scoped>
.work-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  font-family: 'Be Vietnam Pro', sans-serif;
}
.intro {
  margin-bottom: 0.5rem;
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
