<template>
  <div class="sidebar-container">
    <div class="sidebar-item" @click="toggleSection('about')">
      <div class="sidebar-header">
        <h2>ABOUT US</h2>
        <div class="arrow-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['dropdown-arrow', { 'rotated': openSections.about }]">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      <div v-if="openSections.about" class="section-content">
        <p>Content about OARA goes here...</p>
      </div>
    </div>
    
    <div class="sidebar-item" @click="toggleSection('portfolio')">
      <div class="sidebar-header">
        <h2>PORTFÓLIO</h2>
        <div class="arrow-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['dropdown-arrow', { 'rotated': openSections.portfolio }]">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      <div v-if="openSections.portfolio" class="section-content">
        <p>Portfolio content goes here...</p>
      </div>
    </div>
    
    <div class="sidebar-item" @click="toggleSection('services')">
      <div class="sidebar-header">
        <h2>SERVICES</h2>
        <div class="arrow-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['dropdown-arrow', { 'rotated': openSections.services }]">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      <div class="service-description">
        <p>We deliver a true 360° approach, transforming real estate into immersive destinations through rigorous, brand-led placemaking and the creativity of soulful design</p>
      </div>
      <div v-if="openSections.services" class="section-content">
        <p>Additional services content can go here...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      openSections: {
        about: false,
        portfolio: false,
        services: false
      }
    }
  },
  methods: {
    toggleSection(section) {
      this.openSections[section] = !this.openSections[section];
    }
  }
}
</script>

<style scoped>
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1px;
  max-width: 700px;
  margin: 0 auto;
}

.sidebar-item {
  background-color: #FEF6E4; /* Cream/beige background color from the image */
  border-radius: 16px;
  padding: 2.2rem 2.5rem;
  margin-bottom: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

h2 {
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin: 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  color: #000;
  text-transform: uppercase;
}

.arrow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

.dropdown-arrow {
  width: 32px;
  height: 32px;
  stroke-width: 2px;
  stroke: #000;
  transition: transform 0.3s ease;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.service-description {
  font-size: 0.95rem;
  line-height: 1.65;
  margin-top: 1.2rem;
  max-width: 80%;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 400;
  color: #000;
}

.service-description p {
  margin: 0;
}

.section-content {
  padding-top: 1rem;
  overflow: hidden;
  animation: slideDown 0.3s ease-in-out;
}

@keyframes slideDown {
  from { max-height: 0; opacity: 0; }
  to { max-height: 500px; opacity: 1; }
}

@media (max-width: 768px) {
  .sidebar-item {
    padding: 1.5rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .service-description {
    max-width: 100%;
  }
}
</style>
