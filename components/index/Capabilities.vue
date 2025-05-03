<template>
  <div class="capabilities-section">
    <!-- Testimonial Section -->
    <div class="testimonial">
      <div class="scroll-arrow left-arrow">◀</div>
      <div class="testimonial-content">
        <p class="quote">"Jessica has added...xxxxx<br>xxxxxxxxxxxxx"</p>
        <p class="author">Rachel Ratterman:</p>
        <p class="projects">Worked together on projects like:<br>Equinox Hotel Chicago, Legendre Hotel, Edition Tampa</p>
      </div>
      <div class="scroll-arrow right-arrow">▶</div>
    </div>
    
    <!-- Capabilities Section -->
    <div class="capabilities-container">
      <h2 class="section-title">Our capabilities :</h2>
      
      <!-- Design Section -->
      <div class="capability-group">
        <h3 class="capability-title">DESIGN</h3>
        <p class="capability-description">We create environments that balance form, function and guest experience.</p>
        
        <div class="capability-item">
          <span>Architecture & Interior Design</span>
          <span class="read-more">read more →</span>
        </div>
        
        <div class="capability-item">
          <span>FF&E Design and Specification Package</span>
          <span class="read-more">read more →</span>
        </div>
        
        <div class="capability-item">
          <span>Back-of-House Optimization & Design</span>
          <span class="read-more">read more →</span>
        </div>
      </div>
      
      <!-- Strategy Section -->
      <div class="capability-group">
        <h3 class="capability-title">STRATEGY</h3>
        <p class="capability-description">We define positioning, narratives and concepts that connect brand, place and audience.</p>
        
        <div class="capability-item">
          <span>Brand Strategy & Experience Design</span>
          <span class="read-more">read more →</span>
        </div>
        
        <div class="capability-item">
          <span>Placemaking, Spatial Concepts & Storytelling</span>
          <span class="read-more">read more →</span>
        </div>
        
        <div class="capability-item">
          <span>Service Design</span>
          <span class="read-more">read more →</span>
        </div>
      </div>
      
      <!-- Consulting Section -->
      <div class="capability-group">
        <h3 class="capability-title">CONSULTING</h3>
        <p class="capability-description">We advise stakeholders and validate projects to maximize performance and ensure compliance.</p>
        
        <div class="capability-item">
          <span>Owners Representation & Operator Interface</span>
          <span class="read-more">read more →</span>
        </div>
        
        <div class="capability-item">
          <span>Architecture & Interiors Peer Review</span>
          <span class="read-more">read more →</span>
        </div>
        
        <div class="capability-item">
          <span>Advisory & Design Guidelines</span>
          <span class="read-more">read more →</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Capabilities'
}
</script>

<style scoped>
.capabilities-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f2eee3;
  padding-bottom: 4rem;
}

/* Testimonial Section */
.testimonial {
  background-color: #1F1B1A;
  color: #E9EFC9;
  padding: 4rem 2rem;
  text-align: center;
  font-family: 'Inter', sans-serif;
  min-height: 35vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.testimonial-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.scroll-arrow {
  font-size: 1.5rem;
  color: #E9EFC9;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0 1.5rem;
}

.scroll-arrow:hover {
  opacity: 1;
}

.quote {
  font-size: 1.4rem;
  margin-bottom: 1.2rem;
  font-weight: 300;
  line-height: 1.4;
}

.author {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  font-weight: 500;
}

.projects {
  font-size: 1rem;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;
  font-weight: 300;
}

/* Capabilities Container */
.capabilities-container {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.section-title {
  font-family: 'Space Mono', monospace;
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

/* Capability Groups */
.capability-group {
  margin-bottom: 3rem;
}

.capability-title {
  font-family: 'Space Mono', monospace;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.capability-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  max-width: 90%;
}

/* Capability Items */
.capability-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Inter', sans-serif;
}

.capability-item span {
  font-size: 1rem;
}

.read-more {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
}

.read-more:hover {
  text-decoration: underline;
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
  
  .testimonial {
    padding: 4rem 1rem;
    min-height: 35vh;
  }
  
  .scroll-arrow {
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }
  
  .quote {
    font-size: 1.4rem;
  }
}
</style>
