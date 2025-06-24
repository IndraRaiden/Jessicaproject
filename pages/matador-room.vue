<template>
  <div>
    <div class="page-background"></div>
    <Navbar />
    <div class="project-page">
      <div class="project-header">
        <div class="project-meta">
          <div class="client-info">
            <p>CLIENT: JEAN GEORGES</p>
            <p>SERVICES: VISUAL IDENTITY / INTERIOR DESIGN / BRANDING</p>
          </div>
        </div>
        
        <div class="project-headline">
          <h1>MATADOR ROOM: A CULINARY JOURNEY THROUGH LATIN CUISINE WITH JEAN GEORGES' SIGNATURE TOUCH.</h1>
        </div>
        
        <div class="controls">
          <button class="control-btn">▶</button>
          <button class="control-btn">II</button>
        </div>
      </div>
    
      <div class="project-content">
        <div class="content-section">
          <h2 class="section-title">MATADOR ROOM. MICHELIN-STARRED LATIN CUISINE</h2>
          
          <div class="project-description">
            <p>The Matador Room represents a seamless fusion of Jean-Georges Vongerichten's acclaimed culinary vision with Miami's mid-century glamour. Located within the historic Edition Hotel Miami Beach, this restaurant pays homage to the property's original 1950s venue of the same name, which was once a gathering place for the era's celebrities and tastemakers.</p>
            <p>Jessica worked with Ian Schrager's design team to develop the restaurant's interior concept, which features a dramatic sunken dining room with a spectacular original chandelier as its centerpiece. The design echoes the oval supper clubs of a bygone era while introducing contemporary elements that complement Jean-Georges' Latin-inspired menu. She was responsible for the space planning, finish selection, and custom furnishing design that creates a sophisticated yet comfortable environment that transitions seamlessly from formal dining to casual bar atmosphere. The space's meticulous detailing extends from its circular banquettes to the carefully curated art program that references both Miami's cultural heritage and the building's storied past.</p>
            <div class="project-meta-details">
              <p><strong>SCOPE:</strong> Interior Design / Space Planning / Custom Furnishings / Art Curation</p>
              <p><strong>LOCATION:</strong> Edition Hotel Miami Beach, Florida, USA</p>
              <p><strong>COMPANY:</strong> Ian Schrager Company</p>
              <p><strong>CLIENT:</strong> Jean-Georges Restaurants</p>
              <p><strong>DESIGN CONCEPT:</strong> Mid-century modern revival with contemporary Latin influences</p>
              <p><strong>SPECIAL FEATURES:</strong> Original historic chandelier, sunken circular dining room, indoor-outdoor transitional spaces</p>
            </div>
          </div>
          
          <div class="image-container">
            <img src="~/public/restaurants/elmatadorroom/16.png" alt="Matador Room interior" class="feature-image" />
          </div>
          
          <div class="content-footer">
            <a href="#" class="external-link">MATADORROOM.COM</a>
            <button class="read-more">READ MORE</button>
          </div>
        </div>
        
        <div class="content-section">
          <div class="image-grid">
            <div class="grid-item">
              <img src="~/public/restaurants/elmatadorroom/17.png" alt="Matador Room Dining Area" />
            </div>
            
            <div class="grid-item">
              <img src="~/public/restaurants/elmatadorroom/18.png" alt="Matador Room Bar" />
            </div>
            
            <div class="grid-item">
              <img src="~/public/restaurants/elmatadorroom/19.png" alt="Matador Room Cuisine" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';

onMounted(async () => {
  // Force a DOM update and ensure all components are properly mounted
  await nextTick();
  // Force scroll to top
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: -1;
  opacity: 1;
}

.project-page {
  min-height: 100vh;
  color: #000;
  position: relative;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.project-header {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  padding-top: 200px; /* Increased gap for the navbar */
  margin-bottom: 5rem;
}

.project-meta {
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  line-height: 1.6;
}

.client-info p {
  margin: 0 0 0.5rem 0;
  font-weight: 500;
}

.project-headline {
  grid-column: 2;
}

.project-headline h1 {
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.01em;
  max-width: 800px;
}

.controls {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.control-btn {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0;
}

.project-content {
  margin-top: 4rem;
}

.content-section {
  margin-bottom: 8rem;
}

.project-description {
  margin: 2rem 0;
  max-width: 900px;
}

.project-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-meta-details {
  margin-top: 2rem;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
}

.section-title {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  letter-spacing: -0.01em;
}

.image-container {
  width: 100%;
  margin: 2rem 0;
}

.feature-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.content-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.external-link {
  text-decoration: none;
  color: #000;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  position: relative;
}

.external-link::after {
  content: '↗';
  display: inline-block;
  margin-left: 0.25rem;
}

.read-more {
  background: none;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  letter-spacing: 0.05em;
  padding: 0;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 4rem 0;
}

.grid-item {
  overflow: hidden;
}

.grid-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.grid-item:hover img {
  transform: scale(1.03);
}

/* Media queries for responsiveness */
@media (max-width: 1024px) {
  .project-header {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .project-headline {
    grid-column: 1;
  }
  
  .project-headline h1 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .project-page {
    padding: 0 1rem;
  }
  
  .project-header {
    padding-top: 120px;
    margin-bottom: 3rem;
  }
  
  .project-headline h1 {
    font-size: 1.75rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .image-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .content-section {
    margin-bottom: 4rem;
  }
}
</style>
