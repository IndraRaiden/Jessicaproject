<template>
  <div class="capabilities-container">
    <h2 class="section-title">Our services :</h2>
    
    <div class="services-description">
      <p>We deliver a true 360° approach, transforming real estate into immersive destinations through rigorous, brand-led placemaking and the creativity of soulful design</p>
    </div>
    
    <div class="capability-groups">
      <!-- Design Section -->
      <div class="capability-group">
        <h3 class="capability-main-title" @click="setActiveCapability('design')" :class="{ 'active': activeCapabilityGroup === 'design' }">
          DESIGN
          <span class="toggle-icon">{{ activeCapabilityGroup === 'design' ? '-' : '+' }}</span>
        </h3>
        <div class="capability-group-content" :class="{ 'expanded': activeCapabilityGroup === 'design' }">
          <p class="capability-main-description">WE CREATE ENVIRONMENTS THAT BALANCE FORM, FUNCTION AND GUEST EXPERIENCE.</p>
          
          <div class="capability-content">
            <div class="capability-item">
              <h4>CONCEPT DEVELOPMENT</h4>
              <p>We craft distinctive design narratives that align with brand values and resonate with target audiences.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
            
            <div class="capability-item">
              <h4>SPACE PLANNING</h4>
              <p>We optimize spatial flow and functionality to create intuitive, engaging guest experiences.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
            
            <div class="capability-item">
              <h4>BACK OF HOUSE OPTIMIZATION & DESIGN</h4>
              <p>We streamline service-area layouts to enhance workflow, safety and staff productivity.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Strategy Section -->
      <div class="capability-group">
        <h3 class="capability-main-title" @click="setActiveCapability('strategy')" :class="{ 'active': activeCapabilityGroup === 'strategy' }">
          STRATEGY
          <span class="toggle-icon">{{ activeCapabilityGroup === 'strategy' ? '-' : '+' }}</span>
        </h3>
        <div class="capability-group-content" :class="{ 'expanded': activeCapabilityGroup === 'strategy' }">
          <p class="capability-main-description">WE DEFINE POSITIONING, NARRATIVES AND CONCEPTS THAT CONNECT BRAND, PLACE AND AUDIENCE.</p>
          
          <div class="capability-content">
            <div class="capability-item">
              <h4>BRAND INTEGRATION & EXPERIENCE DESIGN</h4>
              <p>We translate brand values into physical environments that deliver consistent, memorable experiences.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
            
            <div class="capability-item">
              <h4>MARKET POSITIONING & PLACEMAKING</h4>
              <p>We identify competitive advantages and create distinctive experiences that capture target audiences.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
            
            <div class="capability-item">
              <h4>SERVICE DESIGN</h4>
              <p>We design service frameworks that align guest journeys with operational efficiency and brand promise.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Consultancy Section -->
      <div class="capability-group">
        <h3 class="capability-main-title" @click="setActiveCapability('consultancy')" :class="{ 'active': activeCapabilityGroup === 'consultancy' }">
          CONSULTANCY
          <span class="toggle-icon">{{ activeCapabilityGroup === 'consultancy' ? '-' : '+' }}</span>
        </h3>
        <div class="capability-group-content" :class="{ 'expanded': activeCapabilityGroup === 'consultancy' }">
          <p class="capability-main-description">WE ADVISE STAKEHOLDERS AND VALIDATE PROJECTS TO MAXIMIZE PERFORMANCE AND ENSURE COMPLIANCE.</p>
          
          <div class="capability-content">
            <div class="capability-item">
              <h4>TECHNICAL REVIEW & COMPLIANCE</h4>
              <p>We evaluate designs against brand standards, building codes and operational requirements to ensure feasibility.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
            
            <div class="capability-item">
              <h4>IMPLEMENTATION SUPPORT</h4>
              <p>We provide guidance throughout construction and installation to maintain design integrity and quality.</p>
              <a href="#" class="read-more">Read More</a>
            </div>
            
            <div class="capability-item">
              <h4>STRATEGIC DESIGN ADVISORY</h4>
              <p>We provide strategic counsel and develop design guidelines that ensure consistency and excellence at every project phase.</p>
              <a href="#" class="read-more">Read More</a>
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
  padding: 4rem 0; /* No horizontal padding to extend to edges */
  max-width: 100%; /* Full width */
  margin: 0 auto;
  width: 100%;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #000;
  text-align: center;
}

.services-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  padding: 0 1rem;
}

.services-description p {
  font-size: 1.1rem;
  line-height: 1.6;
}

.capability-groups {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.capability-group {
  width: 100%;
  padding: 1.5rem;
  border-radius: 8px;
}

.capability-main-title {
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.capability-main-title:hover {
  color: #333;
}

.capability-main-title.active {
  color: #000;
  font-weight: 800;
}

.toggle-icon {
  font-size: 1.5rem;
  font-weight: 400;
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
}

.capability-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.capability-item {
  margin-bottom: 1.5rem;
}

.capability-item h4 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.capability-item p {
  font-size: 0.85rem;
  line-height: 1.5;
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
</style>
