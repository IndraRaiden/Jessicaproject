<template>
  <div class="sidebar" :class="{ 'open': isOpen }">
    <div class="sidebar-content">
      <div class="header">
        <div class="logo">
          <img src="/index/OARA-MARCA-SITE.svg" alt="OARA Logo" class="logo-img" />
        </div>
        <div class="close-btn" @click="closeSidebar">+</div>
      </div>
      
      <div class="sidebar-layout">
        <!-- Main Navigation -->
        <div class="nav-section">

          <div class="nav-group">
            <h3>CATEGORIES</h3>
            <div class="nav-links">
              <NuxtLink to="/" class="nav-link">HOME</NuxtLink>
              <NuxtLink to="/hotels" class="nav-link">HOTELS</NuxtLink>
              <NuxtLink to="/foodnbeverage" class="nav-link">FOOD AND BEVERAGE</NuxtLink>
              <NuxtLink to="/wellness" class="nav-link">WELLNESS</NuxtLink>
              <NuxtLink to="/about" class="nav-link">ABOUT US</NuxtLink>
            </div>
          </div>
        </div>
        
        <!-- Contact Information -->
        <div class="contact-section">
          <div class="contact-info">
            <p>HORIZON COLLECTIVE</p>
            <p>118 MERIDIAN AVENUE</p>
            <p>OSLO, NORWAY</p>
            <div class="contact-links">
              <a href="mailto:hello@horizon.co">HELLO@HORIZON.CO</a>
              <a href="tel:+4721558899">+47 215 588 99</a>
            </div>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link">BEHANCE</a>
            <a href="#" class="social-link">JOURNAL</a>
            <a href="#" class="social-link">ARCHIVE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const closeSidebar = () => {
  emit('close');
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  z-index: 1000;
  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
}

.sidebar.open {
  right: 0;
}

.sidebar-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  padding: 1rem 0;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 120px;
  width: auto;
  filter: brightness(0);
}

.close-btn {
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.close-btn:hover {
  transform: rotate(135deg);
}

.sidebar-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8rem);
}

.nav-section {
  margin-bottom: 4rem;
}

.nav-group {
  margin-bottom: 3rem;
}

.nav-group h3 {
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #666;
  letter-spacing: 0.1em;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.nav-link {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.8rem;
  color: #000;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 0.7;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.category h4 {
  font-family: 'Space Mono', monospace;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #000;
}

.category a {
  display: block;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.9rem;
  color: #333;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: opacity 0.2s;
}

.category a:hover {
  opacity: 0.7;
}

.contact-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #ddd;
  padding-top: 2rem;
}

.contact-info p {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 0.3rem;
}

.contact-links {
  margin-top: 1rem;
}

.contact-links a {
  display: block;
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: #000;
  text-decoration: none;
  margin-bottom: 0.3rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.8rem;
  color: #666;
  text-decoration: none;
  transition: color 0.2s;
}

.social-link:hover {
  color: #000;
}

/* Media queries for responsive design */
@media (max-width: 1024px) {
  .contact-section {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .social-links {
    margin-top: 2rem;
  }
}

@media (max-width: 640px) {
  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }
  
  .category-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
