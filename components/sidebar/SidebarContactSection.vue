<template>
  <div class="contact-section">
    <div class="contact-info">
      <p style="color: #29332e !important; margin-bottom: 10px;">HORIZON COLLECTIVE</p>
      <p style="color: #29332e !important; margin-bottom: 10px;">118 MERIDIAN AVENUE</p>
      <p style="color: #29332e !important; margin-bottom: 15px;">OSLO, NORWAY</p>
      <div class="contact-links">
        <a href="mailto:hello@horizon.co" style="color: #29332e !important; margin-bottom: 10px; display: block;">HELLO@HORIZON.CO</a>
        <a href="tel:+4721558899" style="color: #29332e !important; display: block;">+47 215 588 99</a>
      </div>
    </div>
    
    <div class="social-links" style="margin-top: 15px; display: flex; gap: 30px;">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" style="color: #29332e !important;">INSTAGRAM</a>
      <a href="https://www.linkedin.com/in/jessicalianza?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" class="social-link" style="color: #29332e !important;">LINKEDIN</a>
    </div>
  </div>
</template>

<script setup>
// No props or emits needed for this component
</script>

<style scoped>
.contact-section {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-top: 1px solid #ddd;
  padding-top: 2rem;
  padding-left: 0;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  max-width: 90%;
}

.contact-info p {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  color: #29332e;
  margin-bottom: 0.3rem;
}

.contact-links a, .social-links a {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  color: #29332e;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.contact-links a:hover, .social-links a:hover {
  opacity: 0.7;
}

.social-links {
  display: flex;
  gap: 30px;
}
</style>
