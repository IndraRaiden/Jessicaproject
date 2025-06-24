<template>
  <div class="capabilities-container">
    <h2 class="section-title">Our services</h2>
    
    <div class="services-description">
      <p>We deliver a true 360° approach, transforming real estate into immersive destinations</p>
      <p>Through rigorous, brand-led placemaking and the creativity of soulful design.</p>
    </div>
    
    <div class="capability-groups">
      <!-- Design Section -->
      <div class="capability-group">
        <h3 class="capability-main-title" @click="setActiveCapability('design')" :class="{ 'active': activeCapabilityGroup === 'design' }">
          <span class="title-text">DESIGN</span>
          <span class="toggle-icon" :class="{ 'expanded-icon': activeCapabilityGroup === 'design' }"></span>
        </h3>
        <div class="capability-group-content" :class="{ 'expanded': activeCapabilityGroup === 'design' }">
          <p class="capability-main-description">WE CREATE ENVIRONMENTS THAT BALANCE FORM, FUNCTION AND GUEST EXPERIENCE.</p>
          
          <div class="capability-content">
            <div class="capability-item">
              <h4>CONCEPT DEVELOPMENT</h4>
              <p>We craft distinctive design narratives that align with brand values and resonate with target audiences.</p>
              
            </div>
            
            <div class="capability-item">
              <h4>SPACE PLANNING</h4>
              <p>We optimize spatial flow and functionality to create intuitive, engaging guest experiences.</p>
              
            </div>
            
            <div class="capability-item">
              <h4>BACK OF HOUSE OPTIMIZATION & DESIGN</h4>
              <p>We streamline service-area layouts to enhance workflow, safety and staff productivity.</p>
              
            </div>
          </div>
        </div>
      </div>
      
      <!-- Strategy Section -->
      <div class="capability-group">
        <h3 class="capability-main-title" @click="setActiveCapability('strategy')" :class="{ 'active': activeCapabilityGroup === 'strategy' }">
          <span class="title-text">STRATEGY</span>
          <span class="toggle-icon" :class="{ 'expanded-icon': activeCapabilityGroup === 'strategy' }"></span>
        </h3>
        <div class="capability-group-content" :class="{ 'expanded': activeCapabilityGroup === 'strategy' }">
          <p class="capability-main-description">WE DEFINE POSITIONING, NARRATIVES AND CONCEPTS THAT CONNECT BRAND, PLACE AND AUDIENCE.</p>
          
          <div class="capability-content">
            <div class="capability-item">
              <h4>BRAND INTEGRATION & EXPERIENCE DESIGN</h4>
              <p>We translate brand values into physical environments that deliver consistent, memorable experiences.</p>
              
            </div>
            
            <div class="capability-item">
              <h4>MARKET POSITIONING & PLACEMAKING</h4>
              <p>We identify competitive advantages and create distinctive experiences that capture target audiences.</p>
              
            </div>
            
            <div class="capability-item">
              <h4>SERVICE DESIGN</h4>
              <p>We design service frameworks that align guest journeys with operational efficiency and brand promise.</p>
              
            </div>
          </div>
        </div>
      </div>
      
      <!-- Consultancy Section -->
      <div class="capability-group">
        <h3 class="capability-main-title" @click="setActiveCapability('consultancy')" :class="{ 'active': activeCapabilityGroup === 'consultancy' }">
          <span class="title-text">CONSULTANCY</span>
          <span class="toggle-icon" :class="{ 'expanded-icon': activeCapabilityGroup === 'consultancy' }"></span>
        </h3>
        <div class="capability-group-content" :class="{ 'expanded': activeCapabilityGroup === 'consultancy' }">
          <p class="capability-main-description">WE ADVISE STAKEHOLDERS AND VALIDATE PROJECTS<br>TO MAXIMIZE PERFORMANCE<br>AND ENSURE COMPLIANCE.</p>
          
          <div class="capability-content">
            <div class="capability-item">
              <h4>TECHNICAL REVIEW & COMPLIANCE</h4>
              <p>We evaluate designs against brand standards, building codes and operational requirements to ensure feasibility.</p>
              
            </div>
            
            <div class="capability-item">
              <h4>IMPLEMENTATION SUPPORT</h4>
              <p>We provide guidance throughout construction and installation to maintain design integrity and quality.</p>
              
            </div>
            
            <div class="capability-item">
              <h4>STRATEGIC DESIGN ADVISORY</h4>
              <p>We provide strategic counsel and develop design guidelines that ensure consistency and excellence at every project phase.</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CapabilitiesSection',
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
    gap: 2rem;
  }

  /* Equal widths for all three capability groups on desktop */
  .capability-group {
    flex: 1 1 0;
    max-width: 32%;
  }

  /* Nudge the Design group slightly to the left */
  .capability-group:nth-child(1) {
    margin-left: -1.5rem; /* increased shift as per feedback */
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
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.title-text:hover::after {
  width: 100%;
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
