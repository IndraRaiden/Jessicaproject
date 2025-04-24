<template>
  <div class="foodnbeverage-container">
    <div class="hero-section">
      <h1 class="title">FOOD AND BEVERAGE</h1>
      <div class="subtitle">Culinary Excellence</div>
    </div>
    
    <div class="content-section">
      <div class="description">
        <p>
          Indulge in a culinary journey that celebrates the finest ingredients and innovative techniques. 
          Our food and beverage offerings are designed to delight the senses and create memorable experiences.
        </p>
        <p>
          From farm-fresh ingredients to expertly crafted cocktails, every detail is curated to provide 
          an exceptional dining experience that reflects our commitment to quality and sustainability.
        </p>
      </div>
      
      <div class="features">
        <div class="feature">
          <h3>FARM TO TABLE</h3>
          <p>Locally sourced ingredients that celebrate seasonal flavors and support local producers.</p>
        </div>
        
        <div class="feature">
          <h3>SIGNATURE COCKTAILS</h3>
          <p>Handcrafted beverages that blend traditional techniques with modern innovation.</p>
        </div>
        
        <div class="feature">
          <h3>CULINARY WORKSHOPS</h3>
          <p>Interactive experiences that invite guests to explore the art of gastronomy.</p>
        </div>
      </div>
    </div>
    
    <div class="cta-section">
      <NuxtLink to="/" class="back-button">RETURN HOME</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Animation or initialization logic can be added here
  document.title = "Food & Beverage | Jessica Project";
});
</script>

<style scoped>
.foodnbeverage-container {
  min-height: 100vh;
  background-color: #0a0a0a;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.hero-section {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.title {
  font-family: 'Space Mono', monospace;
  font-size: 4rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  text-align: center;
}

.subtitle {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  position: relative;
  z-index: 2;
  opacity: 0.8;
}

.content-section {
  padding: 5rem 10%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.description {
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  line-height: 1.8;
  font-size: 1.1rem;
}

.description p {
  margin-bottom: 1.5rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 2rem;
}

.feature {
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.feature:hover {
  transform: translateY(-10px);
  background-color: rgba(255, 255, 255, 0.1);
}

.feature h3 {
  font-family: 'Space Mono', monospace;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

.feature p {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
}

.cta-section {
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-button {
  font-family: 'Space Mono', monospace;
  font-size: 1rem;
  letter-spacing: 0.1em;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border: 1px solid white;
  transition: all 0.3s ease;
}

.back-button:hover {
  background-color: white;
  color: black;
  letter-spacing: 0.15em;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  
  .content-section {
    padding: 3rem 5%;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
