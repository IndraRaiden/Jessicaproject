<template>
  <div class="page-background"></div>
  <div class="santuaries-page">
    <Navbar />
    <div class="hero-image-container">
      <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100" alt="Santuaries and Cultural Hero" class="hero-image" />
    </div>
      
    <div class="content-section">
      <div class="image-grid">
        <div class="grid-row">
          <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Sanctuary image 1" />
          </div>
          
          <div class="grid-item">
            <div class="project-link" @click="navigateToProject('/projectone')">
              <img src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Cultural image 2" />
              <div class="overlay">
                <span>Project One</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid-row">
          <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1609142621730-db3293839541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Sanctuary image 3" />
          </div>
          
          <div class="grid-item">
            <img src="https://images.unsplash.com/photo-1540567736792-f78f6242e4e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Cultural image 4" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

const router = useRouter();

const navigateToProject = (route) => {
  // Use window.location for a hard navigation that ensures full page reload
  window.location.href = route;
};

onMounted(() => {
  // Animation or initialization logic can be added here
  // Title is now set globally in nuxt.config.js
});
</script>

<style scoped>
.page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F9F3EF;
  z-index: -1;
}

.santuaries-page {
  min-height: 100vh;
  color: #333;
  position: relative;
}

.hero-image-container {
  width: 100%;
  height: 80vh;
  margin-top: 140px; /* Gap for the navbar */
  overflow: hidden;
  position: relative;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.content-section {
  padding: 5rem 10%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: #F9F3EF; /* Light nude color */
}

.image-grid {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.grid-row {
  display: flex;
  gap: 8rem;
  width: 100%;
  justify-content: center;
}

.grid-item {
  flex: 0 0 auto;
  width: 450px;
  height: 280px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.grid-item:hover img {
  transform: scale(1.05);
}

.project-link {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  text-decoration: none;
  cursor: pointer;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay span {
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1px;
}

.project-link:hover .overlay {
  opacity: 1;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .hero-image-container {
    height: 50vh;
    margin-top: 160px; /* Doubled gap for mobile navbar */
  }
  
  .content-section {
    padding: 3rem 5%;
  }
  
  .grid-row {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
  
  .grid-item {
    width: 350px;
    height: 220px;
  }
  
  .image-grid {
    gap: 4rem;
  }
}
</style>
