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
                <span class="read-more" @click="toggleDescription(0)">read more <span class="arrow" :class="{ 'arrow-up': expandedItems[0] }">{{ expandedItems[0] ? '↑' : '↓' }}</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[0]">
                  <p>We embed narratives into every layout, guiding guests through memorable journeys that resonate with your brand and honor the site's heritage.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Architecture & Interior Design</span>
                <span class="read-more" @click="toggleDescription(1)">read more <span class="arrow" :class="{ 'arrow-up': expandedItems[1] }">{{ expandedItems[1] ? '↑' : '↓' }}</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[1]">
                  <p>We create buildings and interiors that balance form and function—enhancing asset value and guest satisfaction while reflecting local context and roots.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Operator Interface & Owner's Representation</span>
                <span class="read-more" @click="toggleDescription(2)">read more <span class="arrow" :class="{ 'arrow-up': expandedItems[2] }">{{ expandedItems[2] ? '↑' : '↓' }}</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[2]">
                  <p>We serve as your dedicated liaison—synchronizing investors, operators, and design teams for seamless execution that respects site-specific traditions.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Placemaking & Concept Development</span>
                <span class="read-more" @click="toggleDescription(3)">read more <span class="arrow" :class="{ 'arrow-up': expandedItems[3] }">{{ expandedItems[3] ? '↑' : '↓' }}</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[3]">
                  <p>We uncover each site's unique character and translate it into concepts that captivate guests and investors alike, rooted in local culture and history.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">F&B Strategy & Curation</span>
                <span class="read-more" @click="toggleDescription(4)">read more <span class="arrow" :class="{ 'arrow-up': expandedItems[4] }">{{ expandedItems[4] ? '↑' : '↓' }}</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[4]">
                  <p>We craft culinary programs that marry operational efficiency with inspired menus—driving revenue and delight while celebrating regional flavors.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Brand Strategy & Market Positioning</span>
                <span class="read-more" @click="toggleDescription(5)">read more <span class="arrow" :class="{ 'arrow-up': expandedItems[5] }">{{ expandedItems[5] ? '↑' : '↓' }}</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[5]">
                  <p>We define clear brand frameworks and market tactics that set your project apart and fuel growth, grounded in the project's local narrative.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Feasibility Studies</span>
                <span class="read-more" @click="toggleDescription(6)">read more <span class="arrow" :class="{ 'arrow-up': expandedItems[6] }">{{ expandedItems[6] ? '↑' : '↓' }}</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[6]">
                  <p>We perform thorough analysis to determine project viability, considering market conditions, financial projections, and operational requirements.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Back of the House Design</span>
                <span class="read-more" @click="toggleDescription(7)">read more <span class="arrow" :class="{ 'arrow-up': expandedItems[7] }">{{ expandedItems[7] ? '↑' : '↓' }}</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[7]">
                  <p>We streamline support zones—optimizing staff flow and comfort to underpin flawless service delivery with respect for local operational heritage.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Architecture Peer Review</span>
                <span class="read-more" @click="toggleDescription(8)">read more <span class="arrow" :class="{ 'arrow-up': expandedItems[8] }">{{ expandedItems[8] ? '↑' : '↓' }}</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[8]">
                  <p>We perform in-depth technical checks, ensuring compliance, quality, and consistency with your brand standards and the authenticity of place.</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

// Create a reactive array to track which descriptions are expanded
const expandedItems = ref(Array(9).fill(false));

// Function to toggle the visibility of a description
const toggleDescription = (index) => {
  expandedItems.value[index] = !expandedItems.value[index];
};

onMounted(() => {
  // Title is now set globally in nuxt.config.js
  
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
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #000;
}

.capability-description {
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  max-width: 90%;
}

.arrow-up {
  transform: rotate(180deg);
}

/* Animation styles */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 200px;
  opacity: 1;
  margin-top: 0.5rem;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  max-height: 0;
  opacity: 0;
  margin-top: 0;
  overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
  max-height: 0;
  margin-top: 0;
  overflow: hidden;
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
