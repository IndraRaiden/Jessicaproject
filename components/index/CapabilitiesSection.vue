<template>
  <div class="capabilities-container">
    <h2 class="section-title" v-html="t('ourServices')"></h2>
    
    <div class="services-description">
      <p v-html="t('servicesDesc1')"></p>
      <p v-html="t('servicesDesc2')"></p>
    </div>
    
    <div class="capability-groups">
      <!-- Design Section -->
      <div class="capability-group">
        <h3 class="capability-main-title" @click="setActiveCapability('design')" :class="{ 'active': activeCapabilityGroup === 'design' }">
          <span class="title-text" v-html="t('design')"></span>
          <span class="toggle-icon" :class="{ 'expanded-icon': activeCapabilityGroup === 'design' }"></span>
        </h3>
        <div class="capability-group-content" :class="{ 'expanded': activeCapabilityGroup === 'design' }">
          <p class="capability-main-description" v-html="t('designDesc')"></p>
          
          <div class="capability-content">
            <div class="capability-item">
              <h4 v-html="t('conceptDevelopment')"></h4>
              <p v-html="t('conceptDesc')"></p>
              
            </div>
            
            <div class="capability-item">
              <h4 v-html="t('spacePlanning')"></h4>
              <p v-html="t('spaceDesc')"></p>
              
            </div>
            
            <div class="capability-item">
              <h4 v-html="t('backOfHouse')"></h4>
              <p v-html="t('backOfHouseDesc')"></p>
              
            </div>
          </div>
        </div>
      </div>
      
      <!-- Strategy Section -->
      <div class="capability-group">
        <h3 class="capability-main-title" @click="setActiveCapability('strategy')" :class="{ 'active': activeCapabilityGroup === 'strategy' }">
          <span class="title-text" v-html="t('strategy')"></span>
          <span class="toggle-icon" :class="{ 'expanded-icon': activeCapabilityGroup === 'strategy' }"></span>
        </h3>
        <div class="capability-group-content" :class="{ 'expanded': activeCapabilityGroup === 'strategy' }">
          <p class="capability-main-description" v-html="t('strategyDesc')"></p>
          
          <div class="capability-content">
            <div class="capability-item">
              <h4 v-html="t('brandIntegration')"></h4>
              <p v-html="t('brandDesc')"></p>
              
            </div>
            
            <div class="capability-item">
              <h4 v-html="t('marketPositioning')"></h4>
              <p v-html="t('marketDesc')"></p>
              
            </div>
            
            <div class="capability-item">
              <h4 v-html="t('serviceDesign')"></h4>
              <p v-html="t('serviceDesc')"></p>
              
            </div>
          </div>
        </div>
      </div>
      
      <!-- Consultancy Section -->
      <div class="capability-group">
        <h3 class="capability-main-title" @click="setActiveCapability('consultancy')" :class="{ 'active': activeCapabilityGroup === 'consultancy' }">
          <span class="title-text" v-html="t('consultancy')"></span>
          <span class="toggle-icon" :class="{ 'expanded-icon': activeCapabilityGroup === 'consultancy' }"></span>
        </h3>
        <div class="capability-group-content" :class="{ 'expanded': activeCapabilityGroup === 'consultancy' }">
          <p class="capability-main-description" v-html="t('consultancyDesc')"></p>
          
          <div class="capability-content">
            <div class="capability-item">
              <h4 v-html="t('technicalReview')"></h4>
              <p v-html="t('technicalDesc')"></p>
              
            </div>
            
            <div class="capability-item">
              <h4 v-html="t('implementationSupport')"></h4>
              <p v-html="t('implementationDesc')"></p>
              
            </div>
            
            <div class="capability-item">
              <h4 v-html="t('strategicDesign')"></h4>
              <p v-html="t('strategicDesc')"></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTranslation } from '~/composables/useTranslation';

export default {
  name: 'CapabilitiesSection',
  setup() {
    const { currentLanguage, translations, t } = useTranslation();
    
    return {
      t,
      currentLanguage
    };
  },
  data() {
    return {
      activeCapabilityGroup: null
    };
  },
  methods: {
    setActiveCapability(capability) {
      this.activeCapabilityGroup = this.activeCapabilityGroup === capability ? null : capability;
    }
  }
};
</script>

<style scoped>
/* Ensure Be Vietnam Pro is loaded, e.g., in nuxt.config.js or a global CSS file */
.capabilities-container {
  font-family: 'Be Vietnam Pro', sans-serif;
  /* Added horizontal padding for better breathing room */
  padding: 4rem 2rem;
  max-width: 100%; /* Full width */
  margin: 0 auto;
  width: 100%;
}

.section-title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #000;
  text-align: center;
}

.services-description {
  text-align: center;
  max-width: 1450px;
  margin: 2.5rem auto 2rem;
  transform: translateX(0.5rem);
  padding: 0;
}

.services-description p {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #000;
  text-transform: uppercase;
}

.capability-groups {
  width: 100%;
  display: flex;
  flex-direction: column; /* mobile/tablet: stack groups */
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .capability-groups {
    /* Display three columns side by side on desktop */
    flex-direction: row;
    /* Slightly reduce gap between columns */
    gap: 0;
  }

  /* Equal widths for all three capability groups on desktop */
  .capability-group {
    flex: 1 1 0;
    max-width: none;
  }

  /* Remove previous left nudge so all groups align flush with edges */
  .capability-group:nth-child(1) {
    margin-left: 0;
  }
}

.capability-group {
  width: 100%;
  padding: 1.5rem;
  border-radius: 8px;
}

.capability-main-title {
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  display: flex;
  /* Center the main titles */
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.capability-main-title:hover {
  color: #333;
}

.capability-main-title:hover .toggle-icon {
  text-decoration: none;
}

.title-text {
  position: relative;
  display: inline-block;
  padding-bottom: 4px; /* space between text and underline */
}

.title-text::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.capability-main-title:hover .title-text::after {
  transform: scaleX(1);
}

.capability-main-title.active .title-text::after {
  transform: scaleX(1);
}

.capability-main-title.active {
  color: #000;
  font-weight: 800;
}

.toggle-icon {
  display: inline-block;
  width: 0.9rem;
  height: 0.9rem;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
  margin-left: 0.3rem;
}

.toggle-icon.expanded-icon {
  transform: rotate(-135deg);
}

.capability-group-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease, margin 0.5s ease;
  opacity: 0;
  margin-top: 0;
}

.capability-group-content.expanded {
  max-height: 2000px; /* Large enough to contain all content */
  opacity: 1;
  margin-top: 1.5rem;
}

.capability-main-description {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 2rem;
  text-align: left;
  max-width: 42rem; /* unified line length */
}

.capability-item {
  max-width: 42rem; /* match subtitle width */
}

.capability-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

}

.capability-item {
  margin-bottom: 1.5rem;
}

.capability-item h4 {
  font-size: 1rem; /* unified heading size */
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.capability-item p {
  font-size: 1rem; /* unified paragraph size */
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.read-more {
  font-size: 0.8rem;
  color: #000;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .capability-headers {
    flex-direction: column;
    gap: 1rem;
  }
  
  .capability-content-area {
    flex-direction: column;
  }
  
  .capability-column {
    width: 100%;
    margin-bottom: 2rem;
  }
}
  /* Slightly wider subtitle for Consultancy */
  :deep(.capability-group:nth-child(3) .capability-main-description),
  :deep(.capability-group:nth-child(3) .capability-item) {
    max-width: 46rem !important;
  }
  /*
  * Overrides to extend text width and enlarge fonts
  */
  .services-description p {
    font-size: 1.5rem;
  }

  .capability-main-title {
    font-size: 3rem;
  }

  .capability-main-description {
    font-size: 1.4rem;
    max-width: 100%;
  }

  .capability-item {
    max-width: 100%;
  }

  .capability-item h4 {
    font-size: 1.2rem;
  }

  .capability-item p {
    font-size: 1.1rem;
    max-width: 100%;
  }
</style>
