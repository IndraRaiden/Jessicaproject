<template>
  <div class="sidebar-item" @click="toggleSection">
    <div class="sidebar-header">
      <h2>{{ t('ourServices') }}</h2>
      <div class="arrow-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['dropdown-arrow', { 'rotated': isOpen }]">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    <div class="service-description">
      <p>{{ t('servicesDesc1') }}</p>
    </div>
    <div v-if="isOpen" class="section-content">
      <div class="services-grid">
        <!-- Design Column -->
        <div class="service-column">
          <h3 class="service-category">{{ t('design') }}</h3>
          <p class="service-description">{{ t('designDesc') }}</p>
          
          <div class="service-item">
            <h4>{{ t('conceptDevelopment') }}</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>{{ t('spacePlanning') }}</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>{{ t('backOfHouse') }}</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
        </div>
        
        <!-- Strategy Column -->
        <div class="service-column">
          <h3 class="service-category">{{ t('strategy') }}</h3>
          <p class="service-description">{{ t('strategyDesc') }}</p>
          
          <div class="service-item">
            <h4>{{ t('brandIntegration') }}</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>{{ t('marketPositioning') }}</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>{{ t('serviceDesign') }}</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
        </div>
        
        <!-- Consultancy Column -->
        <div class="service-column">
          <h3 class="service-category">{{ t('consultancy') }}</h3>
          <p class="service-description">{{ t('consultancyDesc') }}</p>
          
          <div class="service-item">
            <h4>{{ t('technicalReview') }}</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>{{ t('implementationSupport') }}</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
          
          <div class="service-item">
            <h4>{{ t('strategicDesign') }}</h4>
            <a href="#" class="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTranslation } from '~/composables/useTranslation';

const { t } = useTranslation();
const isOpen = ref(false);

const toggleSection = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.sidebar-item {
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  max-width: 100%;
}

.sidebar-header {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 100%;
}

.sidebar-header h2 {
  flex: 1;
  text-align: center;
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

.arrow-container {
  position: absolute;
  right: -0.75rem;
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
  gap: 0;
  padding: 0;
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
  font-size: 1.4rem; /* Larger category title */
  font-weight: 400;
  color: #29332e;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
  height: 1.8rem;
  display: flex;
  align-items: center;
}

.service-column .service-description {
  font-size: 1.1rem; /* Larger description */
  line-height: 1.6; /* Adjusted line height */
  height: auto; /* Allow dynamic height */
  min-height: 5rem; /* Maintain minimum spacing */
}

.service-item {
  height: auto; /* Allow content to grow */
  padding-top: 1rem;
  border-top: 1px solid rgba(41, 51, 46, 0.2);
  margin-bottom: 1.5rem; /* Extra spacing */
}

.service-item h4 {
  font-size: 1rem; /* Larger item title */
  line-height: 1.4;
  height: auto; /* Remove fixed height */
  -webkit-line-clamp: unset; /* Allow full lines */
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 500;
  color: #29332e;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  overflow: hidden;
}

.read-more {
  font-size: 0.95rem; /* Bigger read-more link */
  font-family: 'Be Vietnam Pro', sans-serif;
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
    font-size: 0.9rem;
    min-height: 4rem;
  }
  
  .service-item {
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
