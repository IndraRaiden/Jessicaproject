<template>
  <div>
    <div class="page-background"></div>
    <div class="project-page">
      <div class="project-header">
        <div class="project-meta">
          <div class="client-info">
            <p>CLIENT: SHINSEGAE GROUP</p>
            <p>SERVICES: VISUAL IDENTITY / SPATIAL DESIGN / BRANDING / SIGNAGE</p>
          </div>
        </div>
        
        <div class="project-headline">
          <h1>SHINSEGAE FOOD HALL: A CULINARY DESTINATION SHOWCASING THE FINEST KOREAN AND INTERNATIONAL CUISINE IN DAEGON.</h1>
        </div>
        
        <div class="controls">
          <button class="control-btn">▶</button>
          <button class="control-btn">II</button>
        </div>
      </div>
    
      <div class="project-content">
        <div class="content-section">
          <h2 class="section-title">SHINSEGAE FOOD HALL, DAEJEON. MULTI-LAYERED EXPERIENCE DESIGN</h2>
          
          <div class="project-description">
            <p>Located in the sub-level of a commercial tower in South Korea, the Shinsegae project was commissioned by a real estate fund backed by Samsung and LG, with the goal of transforming an entire underground footprint into two distinct experiences: a high-end food hall and a technology-driven department store.</p>
            <p>As Design Lead at Roman and Williams, Jessica co-developed a multi-layered narrative strategy that guided the design from concept to execution. The project was structured around three key axes: the cultural context of South Korea, the influence of advanced technology as a thematic thread, and the need to create spatial distinction between local cuisine, international gastronomy, and the retail tech zone. This layered approach drove every design decision, from materiality and lighting to display structure, column treatment, and wayfinding systems. Each section was given its own architectural identity while maintaining overall cohesion. Practicality and durability were also core to the process, with special attention to lighting specs, seating solutions, and ease of long-term maintenance.</p>
            <div class="project-meta-details">
              <p><strong>SCOPE:</strong> Concept Narrative / Interior Architecture / Materiality / Visual Systems</p>
              <p><strong>LOCATION:</strong> Sub-level of commercial tower, Daejeon, South Korea</p>
              <p><strong>COMPANY:</strong> Roman and Williams</p>
              <p><strong>CLIENT:</strong> Real estate fund backed by Samsung and LG</p>
              <p><strong>COMPONENTS:</strong> High-end food hall, Technology-driven department store</p>
              <p><strong>DESIGN AXES:</strong> Cultural context of South Korea, Advanced technology influence, Spatial distinction between zones</p>
            </div>
          </div>
          
          <div class="image-container">
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Shinsegae Food Hall interior" class="feature-image" />
          </div>
          
          <div class="content-footer">
            <a href="#" class="external-link">SHINSEGAEFOODHALL.COM</a>
            <button class="read-more">READ MORE</button>
          </div>
        </div>
        
        <div class="content-section">
          <div class="image-grid">
            <div class="grid-item">
              <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Food image 1" />
            </div>
            
            <div class="grid-item">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Food image 2" />
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

definePageMeta({
  layout: 'food'
});

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
