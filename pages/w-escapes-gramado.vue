<template>
  <div>
    <div class="page-background"></div>
    <Navbar />
    <div class="project-page">
      <div class="project-header">
        <div class="project-meta">
          <div class="client-info">
            <p>CLIENT: W HOTELS</p>
            <p>SERVICES: INTERIOR DESIGN / ARCHITECTURAL CONSULTING / BRANDING</p>
          </div>
        </div>
        
        <div class="project-headline">
          <h1>W ESCAPES GRAMADO: LUXURY RETREAT IN BRAZIL'S SCENIC MOUNTAINS</h1>
        </div>
        
        <div class="controls">
          <button class="control-btn">▶</button>
          <button class="control-btn">II</button>
        </div>
      </div>
    
      <div class="project-content">
        <div class="content-section">
          <h2 class="section-title">W ESCAPES GRAMADO. REDEFINING MOUNTAIN LUXURY...</h2>
          
          <div class="image-container">
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="W Escapes Gramado exterior" class="feature-image" />
          </div>
          
          <div class="content-footer">
            <a href="#" class="external-link">WHOTELS.COM</a>
            <button class="read-more">READ MORE</button>
          </div>
        </div>
        
        <div class="content-section">
          <div class="image-grid">
            <div class="grid-item">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Hotel image 1" />
            </div>
            
            <div class="grid-item">
              <img src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Hotel image 2" />
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
