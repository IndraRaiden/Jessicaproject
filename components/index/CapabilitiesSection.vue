<template>
  <div class="capabilities-container">
    <h2 class="section-title">Our capabilities :</h2>
    
    <!-- Design Section -->
    <div class="capability-group">
      <h3 class="capability-title">DESIGN</h3>
      <p class="capability-description">We create environments that balance form, function and guest experience.</p>
      
      <div class="capability-item">
        <span>Concept Development</span>
        <span class="read-more" @click="toggleItem('concept')">Read More</span>
      </div>
      <div class="capability-content" v-if="expandedItems.concept">
        <p>We craft distinctive design narratives that align with brand values and resonate with target audiences.</p>
      </div>
      
      <div class="capability-item">
        <span>Space Planning</span>
        <span class="read-more" @click="toggleItem('space')">Read More</span>
      </div>
      <div class="capability-content" v-if="expandedItems.space">
        <p>We optimize spatial flow and functionality to create intuitive, engaging guest experiences.</p>
      </div>
      
      <div class="capability-item">
        <span>Back of House</span>
        <span class="read-more" @click="toggleItem('backofhouse')">Read More</span>
      </div>
      <div class="capability-content" v-if="expandedItems.backofhouse">
        <p>We streamline service-area layouts to enhance workflow, safety and staff productivity.</p>
      </div>
    </div>
    
    <!-- Strategy Section -->
    <div class="capability-group">
      <h3 class="capability-title">STRATEGY</h3>
      <p class="capability-description">We define positioning, narratives and concepts that connect brand, place and audience.</p>
      
      <div class="capability-item">
        <span>Brand Integration</span>
        <span class="read-more" @click="toggleItem('brand')">Read More</span>
      </div>
      <div class="capability-content" v-if="expandedItems.brand">
        <p>We translate brand values into physical environments that deliver consistent, memorable experiences.</p>
      </div>
      
      <div class="capability-item">
        <span>Market Positioning</span>
        <span class="read-more" @click="toggleItem('market')">Read More</span>
      </div>
      <div class="capability-content" v-if="expandedItems.market">
        <p>We identify competitive advantages and create distinctive experiences that capture target audiences.</p>
      </div>
      
      <div class="capability-item">
        <span>Service Design</span>
        <span class="read-more" @click="toggleItem('service')">Read More</span>
      </div>
      <div class="capability-content" v-if="expandedItems.service">
        <p>We design service frameworks that align guest journeys with operational efficiency and brand promise.</p>
      </div>
    </div>
    
    <!-- Consulting Section -->
    <div class="capability-group">
      <h3 class="capability-title">CONSULTING</h3>
      <p class="capability-description">We advise stakeholders and validate projects to maximize performance and ensure compliance.</p>
      
      <div class="capability-item">
        <span>Technical Review</span>
        <span class="read-more" @click="toggleItem('technical')">Read More</span>
      </div>
      <div class="capability-content" v-if="expandedItems.technical">
        <p>We evaluate designs against brand standards, building codes and operational requirements to ensure feasibility.</p>
      </div>
      
      <div class="capability-item">
        <span>Implementation Support</span>
        <span class="read-more" @click="toggleItem('implementation')">Read More</span>
      </div>
      <div class="capability-content" v-if="expandedItems.implementation">
        <p>We provide guidance throughout construction and installation to maintain design integrity and quality.</p>
      </div>
      
      <div class="capability-item">
        <span>Strategic Advisory</span>
        <span class="read-more" @click="toggleItem('advisory')">Read More</span>
      </div>
      <div class="capability-content" v-if="expandedItems.advisory">
        <p>We provide strategic counsel and develop design guidelines that ensure consistency and excellence at every project phase.</p>
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
/* Capabilities Container */
.capabilities-container {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.section-title {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: 700; /* Bold */
  letter-spacing: 220%; /* Spacing 220 - exact specification */
  text-transform: uppercase; /* CAPSLOCK: SIM */
}

/* Capability Groups */
.capability-group {
  margin-bottom: 3rem;
}

.capability-title {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700; /* Bold */
  letter-spacing: 220%; /* Spacing 220 - exact specification */
  text-transform: uppercase; /* CAPSLOCK: SIM */
}

.capability-description {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  max-width: 90%;
  font-weight: 600; /* Semi-bold */
  letter-spacing: 220%; /* Spacing 220 - exact specification */
  text-transform: uppercase; /* CAPSLOCK: SIM */
}

/* Capability Items */
.capability-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Be Vietnam Pro', sans-serif;
}

.capability-item span {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1rem;
  font-weight: 600; /* Semi-bold */
  letter-spacing: 220%; /* Spacing 220 - exact specification */
  text-transform: uppercase; /* CAPSLOCK: SIM */
}

.read-more {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  font-weight: 600; /* Semi-bold */
  transition: transform 0.3s ease, color 0.3s ease;
  display: inline-block;
}

.read-more:hover {
  color: #000;
  transform: translateY(2px);
}

/* Expandable content styling */
.capability-content {
  padding: 1rem 0;
  margin-left: 1rem;
  border-left: 2px solid rgba(0, 0, 0, 0.1);
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  max-width: 90%;
  animation: fadeIn 0.3s ease-in-out;
}

.capability-content p {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  margin: 0;
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
  
  .capability-description {
    max-width: 100%;
  }
  
  .capability-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .capability-content {
    margin-left: 0;
    padding-left: 1rem;
    max-width: 100%;
  }
}
</style>
