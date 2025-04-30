<template>
  <div>
    <div class="page-background"></div>
    <div class="about-page">
      <Navbar />
      <!-- Header Section with spacing preserved -->
      <div class="oara-header">
      </div>
      
      <!-- Main Image Section -->
      <div class="desk-image-container">
        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="Architecture Desk" class="desk-image" />
      </div>
      
      <!-- About Content Section -->
      <div class="content-section">
        <div class="about-content">
          <div class="intro-section">
            <h2 class="intro-title">We are OARA.</h2>
            <p class="intro-text">
              The hospitality design and strategy partner founded by a visionary leader with deep roots in architecture, interiors, branding, and hospitality – born of deep expertise in architecture, interiors, branding and global F&B – from New York to São Paulo, Europe to Southeast Asia.
            </p>
            <p class="intro-text">
              We deliver a true 360° approach, transforming real estate into immersive destinations through rigorous, brand-led placemaking and the creativity of soulful design. By honoring each project's narrative and rhythm, we reimagine space to unlock value – amplifying returns, shaping perception and sparking genuine connection.
            </p>
          </div>
          
          <div class="capabilities-section">
            <h3 class="capabilities-title">Our capabilities:</h3>
            
            <div class="capability-list">
              <div class="capability-item">
                <span class="capability-name">Spatial Storytelling</span>
                <span class="read-more">read more <span class="arrow">↓</span></span>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">Architecture & Interior Design</span>
                <span class="read-more">read more <span class="arrow">↓</span></span>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">Operator Interface & Owner's Representation</span>
                <span class="read-more">read more <span class="arrow">↓</span></span>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">Placemaking & Concept Development</span>
                <span class="read-more">read more <span class="arrow">↓</span></span>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">F&B Strategy & Curation</span>
                <span class="read-more">read more <span class="arrow">↓</span></span>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">Brand Strategy & Market Positioning</span>
                <span class="read-more">read more <span class="arrow">↓</span></span>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">Feasibility Studies</span>
                <span class="read-more">read more <span class="arrow">↓</span></span>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">Back of the House Design</span>
                <span class="read-more">read more <span class="arrow">↓</span></span>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">Architecture Peer Review</span>
                <span class="read-more">read more <span class="arrow">↓</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

onMounted(() => {
  // Set page title
  document.title = "About Us | OARA";
  
  // Force scroll to top
  window.scrollTo(0, 0);
  
  // Use nextTick to ensure DOM is updated before scrolling
  nextTick(() => {
    window.scrollTo(0, 0);
    
    // Add a slight delay to ensure scroll happens after any transitions
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });
});
</script>

<style scoped>
.page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f2eee3;
  z-index: -1;
}

.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* OARA Header Styles */
.oara-header {
  padding: 2rem 10%;
  margin-top: 80px; /* Space for navbar */
  text-align: center;
}

.oara-header h1 {
  font-family: 'Space Mono', monospace;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #333;
}

/* Desk Image Styles */
.desk-image-container {
  width: 100%;
  height: 70vh;
  overflow: hidden;
}

.desk-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content-section {
  padding: 5rem 10%;
  background-color: #f2eee3;
}

.about-content {
  max-width: 1400px;
  margin: 0 auto;
}

/* Intro Section Styles */
.intro-section {
  margin-bottom: 4rem;
}

.intro-title {
  font-family: 'Space Mono', monospace;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #333;
}

.intro-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
  max-width: 900px;
}

/* Capabilities Section Styles */
.capabilities-section {
  margin-top: 4rem;
}

.capabilities-title {
  font-family: 'Space Mono', monospace;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #333;
}

.capability-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.capability-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.capability-name {
  font-family: 'Space Mono', monospace;
  font-size: 1.1rem;
  color: #333;
}

.read-more {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.arrow {
  font-size: 0.8rem;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .oara-header {
    margin-top: 160px; /* Doubled gap for mobile navbar */
    padding: 1rem 5%;
  }
  
  .desk-image-container {
    height: 50vh;
  }
  
  .content-section {
    padding: 3rem 5%;
  }
  
  .intro-title {
    font-size: 1.5rem;
  }
  
  .intro-text {
    font-size: 1rem;
  }
  
  .capabilities-title {
    font-size: 1.2rem;
  }
  
  .capability-name {
    font-size: 0.9rem;
  }
  
  .read-more {
    font-size: 0.8rem;
  }
}
</style>
