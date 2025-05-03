<template>
  <div class="sidebar" :class="{ 'open': isOpen }">
    <div class="sidebar-content">
      <div class="header">
        <div class="logo" @click="navigateTo('/')" style="cursor: pointer;">
          <img src="/index/OARA-MARCA-SITE.svg" alt="OARA Logo" class="logo-img" />
        </div>
        <div class="close-btn" @click="closeSidebar">+</div>
      </div>
      
      <div class="sidebar-layout">
        <!-- Main Navigation -->
        <div class="nav-section">

          <div class="nav-group">
            <div class="nav-links">
              <a @click.prevent="navigateTo('/hotels')" class="nav-link">HOTELS</a>
              <a @click.prevent="navigateTo('/foodnbeverage')" class="nav-link">FOOD</a>
              <a @click.prevent="navigateTo('/wellness')" class="nav-link">WELLNESS</a>
              <a @click.prevent="navigateTo('/about')" class="nav-link">ABOUT US</a>
              <a @click.prevent="navigateTo('/')" class="nav-link">HOME</a>
            </div>
          </div>
        </div>
        
        <!-- Contact Information -->
        <div class="contact-section">
          <div class="contact-info">
            <p style="color: #29332e !important;">HORIZON COLLECTIVE</p>
            <p style="color: #29332e !important;">118 MERIDIAN AVENUE</p>
            <p style="color: #29332e !important;">OSLO, NORWAY</p>
            <div class="contact-links">
              <a href="mailto:hello@horizon.co" style="color: #29332e !important;">HELLO@HORIZON.CO</a>
              <a href="tel:+4721558899" style="color: #29332e !important;">+47 215 588 99</a>
            </div>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link" style="color: #29332e !important;">BEHANCE</a>
            <a href="#" class="social-link" style="color: #29332e !important;">JOURNAL</a>
            <a href="#" class="social-link" style="color: #29332e !important;">ARCHIVE</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
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

const navigateTo = (route) => {
  // Close sidebar first
  closeSidebar();
  
  // Force a reflow/repaint before navigation
  document.body.style.display = 'none';
  
  // Use setTimeout to ensure the DOM has time to update
  setTimeout(() => {
    document.body.style.display = '';
    
    // Navigate to the route
    router.push(route);
    
    // Force scroll to top after navigation
    window.scrollTo(0, 0);
  }, 50);
};
</script>

<style scoped>
:root {
  --dark-green: #28332d; /* Dark green color as specified */
}

.sidebar {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: #f2eee3;
  z-index: 1000;
  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrollbar */
}

.sidebar.open {
  right: 0;
}

.sidebar-content {
  width: 100%;
  margin: 0;
  padding: 3rem 4rem;
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
  /* Original dark green color restored */
}

.close-btn {
  font-size: 5rem;
  color: #29332e;
  cursor: pointer;
  transform: rotate(45deg);
  transition: transform 0.6s ease;
  margin-top: -0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  overflow: hidden; /* Prevent content overflow */
  position: relative; /* Ensure positioning context */
}

.close-btn:hover {
  transform: rotate(90deg);
  /* No additional transformations that could cause layout shifts */
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
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #29332e;
  letter-spacing: 0.1em;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  margin-bottom: 3rem;
  width: 100%;
  justify-content: space-between;
}

.nav-link {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.8rem;
  color: #29332e;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.2s ease;
  display: inline-block;
}

.nav-link:hover {
  color: #a67c52;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.category h4 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #29332e;
}

.category a {
  display: block;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  color: #29332e;
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
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  color: #29332e;
  margin-bottom: 0.3rem;
}

.contact-links {
  margin-top: 1rem;
}

.contact-links a {
  display: block;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.8rem;
  color: #29332e;
  text-decoration: none;
  margin-bottom: 0.3rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.8rem;
  color: #29332e;
  text-decoration: none;
  transition: color 0.2s;
}

.social-link:hover {
  opacity: 0.8;
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
    justify-content: flex-start;
  }
  
  .category-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .sidebar-content {
    padding: 2rem 1.5rem;
  }
}
</style>
