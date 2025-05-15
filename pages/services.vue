<template>
  <div class="services-container">
    <div class="services-header">
      <h1>SERVICES</h1>
      <div class="horizontal-line"></div>
    </div>
    
    <div class="services-content">
      <p class="intro-text">
        We offer a comprehensive range of hospitality design and strategy services tailored to create exceptional guest experiences and maximize operational efficiency.
      </p>
      
      <div class="services-grid">
        <div class="service-card">
          <h3>CONCEPT DEVELOPMENT</h3>
          <p>Creating unique hospitality concepts that align with your brand vision and market positioning.</p>
        </div>
        
        <div class="service-card">
          <h3>INTERIOR DESIGN</h3>
          <p>Full-service interior design from initial concept to final implementation, focusing on both aesthetics and functionality.</p>
        </div>
        
        <div class="service-card">
          <h3>BRAND STRATEGY</h3>
          <p>Developing comprehensive brand strategies that differentiate your property in the competitive hospitality market.</p>
        </div>
        
        <div class="service-card">
          <h3>OPERATIONAL CONSULTING</h3>
          <p>Optimizing operational workflows and spaces to enhance guest experience and staff efficiency.</p>
        </div>
        
        <div class="service-card">
          <h3>FF&E SPECIFICATION</h3>
          <p>Careful selection and specification of furniture, fixtures, and equipment that balance quality, aesthetics, and durability.</p>
        </div>
        
        <div class="service-card">
          <h3>PROJECT MANAGEMENT</h3>
          <p>End-to-end project management ensuring timely delivery within budget while maintaining design integrity.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Services page component
</script>

<style scoped>
.services-container {
  padding: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.services-header {
  margin-bottom: 3rem;
}

.services-header h1 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 2rem;
  color: #29332e;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.horizontal-line {
  height: 1px;
  background-color: #29332e;
  width: 100px;
  margin-bottom: 2rem;
}

.intro-text {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.2rem;
  color: #29332e;
  max-width: 800px;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 2rem;
  background-color: #f2eee3;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.service-card h3 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.2rem;
  color: #29332e;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

.service-card p {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  color: #29332e;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .services-container {
    padding: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
