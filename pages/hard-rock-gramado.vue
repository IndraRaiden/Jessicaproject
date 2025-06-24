<template>
  <div>
    <div class="page-background"></div>
    <Navbar />
    <div class="project-page">
      <div class="project-header">
        <div class="project-meta">
          <div class="client-info">
            <p>CLIENT: HARD ROCK HOTELS</p>
            <p>SERVICES: INTERIOR DESIGN / ARCHITECTURAL CONSULTING / BRANDING</p>
          </div>
        </div>
        
        <div class="project-headline">
          <h1>HARD ROCK HOTEL, GRAMADO: ROCK 'N' ROLL LUXURY IN BRAZIL'S MOUNTAIN RETREAT</h1>
        </div>
        
        <div class="controls">
          <button class="control-btn">▶</button>
          <button class="control-btn">II</button>
        </div>
      </div>
    
      <div class="project-content">
        <div class="content-section">
          <h2 class="section-title">HARD ROCK HOTEL, GRAMADO. A HOSPITALITY COMPLEX AT CITY SCALE</h2>
          
          <div class="project-description">
            <p>With 823 guest rooms and seven F&B venues, Hard Rock Hotel Gramado was developed as a hospitality complex at the scale of a small city. Acting independently of any architecture office, Jessica led the interior design development and participate in the architectural peer review process, ensuring brand alignment and operational efficiency across all guest-facing areas, including a retail store and multiple dining concepts.</p>
            <p>The design process began with an immersive local research phase, where three narrative pillars — historical, physical, and social — were defined to guide aesthetic and functional decisions. These insights guided the definition of material palette, furniture selection, and decorative elements, including custom pieces that brought regional character into dialogue with the global identity of the brand.</p>
            <div class="project-meta-details">
              <p><strong>SCOPE:</strong> Interior Design / Peer Review / Conceptual Narrative</p>
              <p><strong>LOCATION:</strong> Gramado, Brazil</p>
              <p><strong>ROOMS:</strong> 823</p>
              <p><strong>VENUES:</strong> 7</p>
              <p><strong>NARRATIVE PILLARS:</strong> Historical, Physical, Social</p>
              <p><strong>FEATURES:</strong> Retail store, Multiple dining concepts</p>
            </div>
          </div>
          
          <div class="image-container">
            <img src="~/public/hotels/hardrockgrimaldo/Captura de pantalla 2025-05-27 191941.png" alt="Hard Rock Hotel Gramado exterior" class="feature-image" />
          </div>
          
          <div class="content-footer">
            <a href="#" class="external-link">HARDROCK.COM</a>
            <button class="read-more">READ MORE</button>
          </div>
        </div>
        
        <div class="content-section">
          <div class="image-grid">
            <div class="grid-item">
              <img src="~/public/hotels/hardrockgrimaldo/Captura de pantalla 2025-05-27 192020.png" alt="Hard Rock Hotel Exterior View" />
            </div>
            
            <div class="grid-item">
              <img src="~/public/hotels/hardrockgrimaldo/Captura de pantalla 2025-05-27 192049.png" alt="Hard Rock Hotel Lobby" />
            </div>
            
            <div class="grid-item">
              <img src="~/public/hotels/hardrockgrimaldo/Captura de pantalla 2025-05-27 192115.png" alt="Hard Rock Hotel Room" />
            </div>
            
            <div class="grid-item">
              <img src="~/public/hotels/hardrockgrimaldo/Captura de pantalla 2025-05-27 192140.png" alt="Hard Rock Hotel Pool" />
            </div>
            
            <div class="grid-item">
              <img src="~/public/hotels/hardrockgrimaldo/Captura de pantalla 2025-05-27 192156.png" alt="Hard Rock Hotel Restaurant" />
            </div>
            
            <div class="grid-item">
              <img src="~/public/hotels/hardrockgrimaldo/Captura de pantalla 2025-05-27 192222.png" alt="Hard Rock Hotel Bar" />
            </div>
            
            <div class="grid-item">
              <img src="~/public/hotels/hardrockgrimaldo/Captura de pantalla 2025-05-27 192259.png" alt="Hard Rock Hotel Spa" />
            </div>
            
            <div class="grid-item">
              <img src="~/public/hotels/hardrockgrimaldo/Captura de pantalla 2025-05-27 192325.png" alt="Hard Rock Hotel Entertainment" />
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
