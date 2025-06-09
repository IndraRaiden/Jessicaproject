<template>
  <div class="capabilities-container">
    <h2 class="section-title">Our capabilities :</h2>
    
    <div class="horizontal-capability-layout">
      <!-- Design Section -->
      <div class="capability-group">
        <h3 class="capability-main-title">DESIGN</h3>
        <p class="capability-main-description">We create environments that balance form, function and guest experience.</p>
        
        <div class="capability-dropdown">
          <div class="capability-item" @click="toggleItem('concept')">
            <span>Concept Development</span>
            <span class="dropdown-icon">{{ expandedItems.concept ? '▲' : '▼' }}</span>
          </div>
          <div class="capability-content" :class="{ 'expanded': expandedItems.concept }">
            <p>We craft distinctive design narratives that align with brand values and resonate with target audiences.</p>
          </div>
        </div>
        
        <div class="capability-dropdown">
          <div class="capability-item" @click="toggleItem('space')">
            <span>Space Planning</span>
            <span class="dropdown-icon">{{ expandedItems.space ? '▲' : '▼' }}</span>
          </div>
          <div class="capability-content" :class="{ 'expanded': expandedItems.space }">
            <p>We optimize spatial flow and functionality to create intuitive, engaging guest experiences.</p>
          </div>
        </div>
        
        <div class="capability-dropdown">
          <div class="capability-item" @click="toggleItem('backofhouse')">
            <span>Back of House Optimization & Design</span>
            <span class="dropdown-icon">{{ expandedItems.backofhouse ? '▲' : '▼' }}</span>
          </div>
          <div class="capability-content" :class="{ 'expanded': expandedItems.backofhouse }">
            <p>We streamline service-area layouts to enhance workflow, safety and staff productivity.</p>
          </div>
        </div>
      </div>
      
      <!-- Strategy Section -->
      <div class="capability-group">
        <h3 class="capability-main-title">STRATEGY</h3>
        <p class="capability-main-description">We define positioning, narratives and concepts that connect brand, place and audience.</p>
        
        <div class="capability-dropdown">
          <div class="capability-item" @click="toggleItem('brand')">
            <span>Brand Integration & Experience Design</span>
            <span class="dropdown-icon">{{ expandedItems.brand ? '▲' : '▼' }}</span>
          </div>
          <div class="capability-content" :class="{ 'expanded': expandedItems.brand }">
            <p>We translate brand values into physical environments that deliver consistent, memorable experiences.</p>
          </div>
        </div>
        
        <div class="capability-dropdown">
          <div class="capability-item" @click="toggleItem('market')">
            <span>Market Positioning & Placemaking</span>
            <span class="dropdown-icon">{{ expandedItems.market ? '▲' : '▼' }}</span>
          </div>
          <div class="capability-content" :class="{ 'expanded': expandedItems.market }">
            <p>We identify competitive advantages and create distinctive experiences that capture target audiences.</p>
          </div>
        </div>
        
        <div class="capability-dropdown">
          <div class="capability-item" @click="toggleItem('service')">
            <span>Service Design</span>
            <span class="dropdown-icon">{{ expandedItems.service ? '▲' : '▼' }}</span>
          </div>
          <div class="capability-content" :class="{ 'expanded': expandedItems.service }">
            <p>We design service frameworks that align guest journeys with operational efficiency and brand promise.</p>
          </div>
        </div>
      </div>
      
      <!-- Consulting Section -->
      <div class="capability-group">
        <h3 class="capability-main-title">CONSULTANCY</h3>
        <p class="capability-main-description">We advise stakeholders and validate projects to maximize performance and ensure compliance.</p>
        
        <div class="capability-dropdown">
          <div class="capability-item" @click="toggleItem('technical')">
            <span>Technical Review & Compliance</span>
            <span class="dropdown-icon">{{ expandedItems.technical ? '▲' : '▼' }}</span>
          </div>
          <div class="capability-content" :class="{ 'expanded': expandedItems.technical }">
            <p>We evaluate designs against brand standards, building codes and operational requirements to ensure feasibility.</p>
          </div>
        </div>
        
        <div class="capability-dropdown">
          <div class="capability-item" @click="toggleItem('implementation')">
            <span>Implementation Support</span>
            <span class="dropdown-icon">{{ expandedItems.implementation ? '▲' : '▼' }}</span>
          </div>
          <div class="capability-content" :class="{ 'expanded': expandedItems.implementation }">
            <p>We provide guidance throughout construction and installation to maintain design integrity and quality.</p>
          </div>
        </div>
        
        <div class="capability-dropdown">
          <div class="capability-item" @click="toggleItem('advisory')">
            <span>Strategic Design Advisory</span>
            <span class="dropdown-icon">{{ expandedItems.advisory ? '▲' : '▼' }}</span>
          </div>
          <div class="capability-content" :class="{ 'expanded': expandedItems.advisory }">
            <p>We provide strategic counsel and develop design guidelines that ensure consistency and excellence at every project phase.</p>
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
      expandedItems: {
        concept: false,
        space: false,
        backofhouse: false,
        brand: false,
        market: false,
        service: false,
        technical: false,
        implementation: false,
        advisory: false
      }
    };
  },
  methods: {
    toggleItem(item) {
      this.expandedItems[item] = !this.expandedItems[item];
    }
  }
};
</script>

<style scoped>
/* Ensure Be Vietnam Pro is loaded, e.g., in nuxt.config.js or a global CSS file */
.capabilities-container {
  font-family: 'Be Vietnam Pro', sans-serif;
  padding: 4rem 2rem;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
}

.section-title {
  font-size: 1.5rem; /* Corresponds to 'OUR CAPABILITIES :' */
  margin-bottom: 2.5rem;
  font-weight: 700;
  letter-spacing: 220%; 
  text-transform: uppercase;
  color: #000; /* Black text as per left side of image */
}

.horizontal-capability-layout {
  display: flex;
  flex-direction: row;
  gap: 2.5rem; /* Slightly more space between columns */
  justify-content: space-between;
}

.capability-group {
  width: 32%; /* Slightly wider */
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  min-height: 400px; /* Set minimum height */
  box-sizing: border-box; /* Include padding in width calculation */
  overflow: hidden; /* Prevent content from overflowing */
}

.capability-main-title {
  font-size: 2rem; /* Slightly larger */
  margin-bottom: 0.75rem;
  font-weight: 700;
  letter-spacing: 220%;
  text-transform: uppercase;
  color: #000;
}

.capability-main-description {
  font-size: 1.2rem; /* Slightly larger */
  margin-bottom: 2rem;
  font-weight: 600;
  letter-spacing: 220%;
  text-transform: uppercase;
  color: #000;
  max-width: 95%; /* Slightly wider */
}

.capability-dropdown {
  width: 100%;
  margin-bottom: 0.5rem;
}

.capability-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

.capability-item:hover {
  background-color: #f0f0f0;
}

.capability-item span:first-child {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 220%;
  text-transform: uppercase;
  color: #000;
  word-wrap: break-word;
  hyphens: auto;
  max-width: 90%;
}

.dropdown-icon {
  font-size: 0.85rem;
  color: #666;
  transition: transform 0.3s ease;
}

.capability-item:hover .dropdown-icon {
  color: #333;
}

.capability-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, padding 0.3s ease;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
  opacity: 0.9;
  max-width: 100%;
  padding: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
}

.capability-content.expanded {
  max-height: 200px; /* Adjust based on your content */
  padding: 1rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .capabilities-container {
    padding: 2rem 1rem;
  }
  .horizontal-capability-layout {
    flex-direction: column;
    gap: 2rem;
  }
  .capability-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  .capability-main-description {
    max-width: 100%;
  }
  .capability-content {
    padding-left: 0.5rem;
  }
}
</style>
