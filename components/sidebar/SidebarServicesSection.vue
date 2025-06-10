<template>
  <div class="sidebar-item" @click="toggleSection">
    <div class="sidebar-header">
      <h2>SERVICES</h2>
      <div class="arrow-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['dropdown-arrow', { 'rotated': isOpen }]">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    <div class="service-description">
      <p>We deliver a true 360° approach, transforming real estate into immersive destinations through rigorous, brand-led placemaking and the creativity of soulful design</p>
    </div>
    <div v-if="isOpen" class="section-content">
      <div class="services-grid">
        <!-- Design Column -->
        <div class="service-column">
          <h3 class="service-category">DESIGN</h3>
          <p class="service-description">WE CREATE ENVIRONMENTS THAT BALANCE FORM, FUNCTION AND GUEST EXPERIENCE.</p>
          
          <div class="service-item">
            <h4>CONCEPT DEVELOPMENT</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>SPACE PLANNING</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>BACK OF HOUSE OPTIMIZATION & DESIGN</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
        </div>
        
        <!-- Strategy Column -->
        <div class="service-column">
          <h3 class="service-category">STRATEGY</h3>
          <p class="service-description">WE DEFINE POSITIONING, NARRATIVES AND CONCEPTS THAT CONNECT BRAND, PLACE AND AUDIENCE.</p>
          
          <div class="service-item">
            <h4>BRAND INTEGRATION & EXPERIENCE DESIGN</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>MARKET POSITIONING & PLACEMAKING</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>SERVICE DESIGN</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
        </div>
        
        <!-- Consultancy Column -->
        <div class="service-column">
          <h3 class="service-category">CONSULTANCY</h3>
          <p class="service-description">WE ADVISE STAKEHOLDERS AND VALIDATE PROJECTS TO MAXIMIZE PERFORMANCE AND ENSURE COMPLIANCE.</p>
          
          <div class="service-item">
            <h4>TECHNICAL REVIEW & COMPLIANCE</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>IMPLEMENTATION SUPPORT</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>STRATEGIC DESIGN ADVISORY</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleSection = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.sidebar-item {
  background-color: var(--cream-bg, #FEF6E4);
  border-radius: 16px;
  padding: 2.2rem 1.8rem;
  margin-bottom: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  width: 100%; /* Ensure full width */
  max-width: 100%; /* Allow component to expand to full width */
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.sidebar-header h2 {
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin: 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  color: #000;
  text-transform: uppercase;
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

.section-content {
  padding: 1.5rem 0;
  font-size: 1.1rem;
  line-height: 1.6;
  width: 100%;
}

/* Services grid styles */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1rem 0;
  width: 100%; /* Full width */
}

.service-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 28rem; /* Ensure consistent height across columns */
}

.service-category {
  font-family: 'Space Mono', monospace;
  font-size: 1.2rem;
  font-weight: 400;
  color: #29332e;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
  height: 1.8rem;
  display: flex;
  align-items: center;
}

.service-column .service-description {
  font-size: 0.8rem;
  line-height: 1.4;
  font-weight: 500;
  margin-bottom: 1.5rem;
  padding: 0;
  width: 100%;
  height: 5rem; /* Fixed height for consistent spacing */
  display: flex;
  align-items: flex-start;
}

.service-item {
  margin-bottom: 1rem;
  border-top: 1px solid rgba(41, 51, 46, 0.2);
  padding-top: 0.8rem;
  display: flex;
  flex-direction: column;
  height: 5.5rem; /* Fixed height for consistent spacing */
  justify-content: space-between;
}

.service-item h4 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #29332e;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
  height: 2.6rem; /* Fixed height for consistent spacing */
}

.read-more {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.75rem;
  color: #29332e;
  text-decoration: none;
  display: block;
  margin-top: auto;
  align-self: flex-start;
}

.read-more:hover {
  text-decoration: underline;
}

.service-description {
  font-size: 0.95rem;
  line-height: 1.65;
  margin-top: 1.2rem;
  width: 100%; /* Ensure full width of the container */
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 400;
  color: #000;
}

.service-description p {
  margin: 0;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
/* Responsive styling for services */
@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
}

@media (max-width: 768px) {
  .sidebar-item {
    padding: 1.8rem 1.2rem;
  }
  
  .service-category {
    font-size: 1rem;
  }
  
  .service-column .service-description {
    font-size: 0.75rem;
    height: auto;
    min-height: 4rem;
  }
  
  .service-item {
    height: auto;
    min-height: 5rem;
  }
  
  .service-item h4 {
    height: auto;
  }
  
  .service-column {
    min-height: auto;
  }
}

@media (max-width: 576px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
