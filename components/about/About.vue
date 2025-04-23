<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">EXPLORE THE HORIZON</h2>
        <p class="cta-text">
          Join us on a visual journey through Nordic landscapes and cinematic experiences.
        </p>
        <div class="cta-buttons">
          <button class="btn-primary">DISCOVER</button>
          <button class="btn-secondary">CONTACT</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.cta-section {
  padding: 8rem 0;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 1;
  opacity: 0.3;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.cta-title {
  font-family: 'Space Mono', monospace;
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: 0.1em;
  color: #111;
}

.cta-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: #333;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.btn-primary {
  background: #111;
  border: 1px solid #111;
  color: white;
  padding: 0.75rem 2rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: transparent;
  color: #111;
}

.btn-secondary {
  background: transparent;
  border: 1px solid #111;
  color: #111;
  padding: 0.75rem 2rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #111;
  color: white;
}

@media (max-width: 768px) {
  .cta-section {
    padding: 5rem 0;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
  }
}
</style>
