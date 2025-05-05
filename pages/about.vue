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
          
          <!-- Founder Section -->
          <div class="founder-section">
            <h2 class="founder-title">Meet the founder</h2>
            
            <div class="founder-content">
              <div class="founder-photo">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Jessica Lianza" />
                <div class="founder-position">Global CEO</div>
              </div>
              <div class="founder-bio">
                <p>Jessica Lianza moves between structure and soul. Raised in São Paulo by an Israeli psychologist mother and a Brazilian Italian father who managed buildings and people, she was immersed early on in the emotional and operational layers of how we live. Her world has always balanced the visible and invisible — the architecture of feeling, the precision of systems. At 14, a psychosomatic illness led her inward. Yoga, stillness, and the rituals of well-being became her compass. That inward turn was the start of a life devoted to designing spaces that offer care, clarity, and presence.</p>
                <p>Born in New York and shaped by four cultures, Jessica's instinct is global and her gaze, personal. She's guided architecture, interior design, service innovation, and project management across São Paulo, New York, London, and Southeast Asia — always seeking to understand how people move through space and how space moves people. Her time in ecological schools and remote retreats sharpened a sensitivity that remains central to her work.</p>
                <p>Over the past 15 years, she has led hospitality, cultural, and residential projects across four continents, working with names like Gerber Collection, W Hotels, Edition, Hilton, and Hard Rock, as well as quieter, deeply personal ventures where story, memory, and experience guide every line. From narrative to layout, operations to atmosphere, Jessica designs places meant to last — spaces that make us feel human.</p>
              </div>
            </div>
          </div>
          
          <!-- Team Section -->
          <div class="team-section">
            <h3 class="team-title">Meet our team:</h3>
            
            <div class="team-members">
              <!-- Team Member 2 -->
              <div class="team-member">
                <div class="member-photo">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" alt="Team Member 2" />
                  <div class="member-position">DESIGN DIRECTOR</div>
                </div>
                <div class="member-info">
                  <h4 class="member-name">Sarah Chen</h4>
                  <p class="member-bio">Sarah's innovative approach to spatial design has earned international recognition, with a portfolio spanning luxury hotels, restaurants, and retail environments.</p>
                </div>
              </div>
              
              <!-- Team Member 3 -->
              <div class="team-member">
                <div class="member-photo">
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Team Member 3" />
                  <div class="member-position">STRATEGY DIRECTOR</div>
                </div>
                <div class="member-info">
                  <h4 class="member-name">Miguel Cortez</h4>
                  <p class="member-bio">Miguel specializes in translating brand narratives into compelling spatial experiences, with expertise in concept development and strategic positioning.</p>
                </div>
              </div>
              
              <!-- Team Member 4 -->
              <div class="team-member">
                <div class="member-photo">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Team Member 4" />
                  <div class="member-position">CREATIVE DIRECTOR</div>
                </div>
                <div class="member-info">
                  <h4 class="member-name">Jon Park</h4>
                  <p class="member-bio">Jon is passionate about bringing category-redefining creativity to the world's most significant brands and businesses.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="capabilities-section">
            <h3 class="capabilities-title">Our capabilities:</h3>
            
            <div class="capability-list">
              <!-- DESIGN SECTION -->
              <div class="capability-category">
                <h2 class="category-title">DESIGN</h2>
                <p class="category-description">We craft tailored environments that blend bold aesthetics with seamless operations, ensuring spaces inspire and perform.</p>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">Architecture & Interior Design</span>
                <span class="read-more" @click="toggleItem(0)">read more <span class="plus-icon" :class="{ 'rotated': expandedItems[0] }">+</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[0]">
                  <p>We identify and source furnishings and equipment that align precisely with your design vision and operational needs.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">FF&E Design and Specification Package</span>
                <span class="read-more" @click="toggleItem(1)">read more <span class="plus-icon" :class="{ 'rotated': expandedItems[1] }">+</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[1]">
                  <p>We streamline service-area layouts to enhance workflow, safety and staff productivity.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Back of House Optimization & Design</span>
                <span class="read-more" @click="toggleItem(2)">read more <span class="plus-icon" :class="{ 'rotated': expandedItems[2] }">+</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[2]">
                  <p>We optimize back-of-house spaces to improve operational efficiency and staff comfort.</p>
                </div>
              </transition>
              
              <!-- STRATEGY SECTION -->
              <div class="capability-category">
                <h2 class="category-title">STRATEGY</h2>
                <p class="category-description">We articulate compelling brand stories and design guest journeys that foster loyalty and differentiation.</p>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">Brand Strategy & Experience Design</span>
                <span class="read-more" @click="toggleItem(3)">read more <span class="plus-icon" :class="{ 'rotated': expandedItems[3] }">+</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[3]">
                  <p>We develop site-specific concepts that weave local culture into immersive destination experiences.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Placemaking, Spatial Concepts & Storytelling</span>
                <span class="read-more" @click="toggleItem(4)">read more <span class="plus-icon" :class="{ 'rotated': expandedItems[4] }">+</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[4]">
                  <p>We create compelling spatial narratives that engage guests and enhance the sense of place.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Service Design</span>
                <span class="read-more" @click="toggleItem(5)">read more <span class="plus-icon" :class="{ 'rotated': expandedItems[5] }">+</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[5]">
                  <p>We design service frameworks that align guest journeys with operational efficiency and brand promise.</p>
                </div>
              </transition>
              
              <!-- CONSULTING SECTION -->
              <div class="capability-category">
                <h2 class="category-title">CONSULTING</h2>
                <p class="category-description">We advocate for owners' interests and coordinate with operators to synchronize goals and execution.</p>
              </div>
              
              <div class="capability-item">
                <span class="capability-name">Owners Representation & Operator Interface</span>
                <span class="read-more" @click="toggleItem(6)">read more <span class="plus-icon" :class="{ 'rotated': expandedItems[6] }">+</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[6]">
                  <p>We evaluate design proposals against best practices, optimizing quality and compliance from concept through delivery.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Architecture & Interiors Peer Review</span>
                <span class="read-more" @click="toggleItem(7)">read more <span class="plus-icon" :class="{ 'rotated': expandedItems[7] }">+</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[7]">
                  <p>We provide expert review of architectural and interior design plans to ensure quality and compliance.</p>
                </div>
              </transition>
              
              <div class="capability-item">
                <span class="capability-name">Advisory & Design Guidelines</span>
                <span class="read-more" @click="toggleItem(8)">read more <span class="plus-icon" :class="{ 'rotated': expandedItems[8] }">+</span></span>
              </div>
              <transition name="slide-fade">
                <div class="capability-description" v-if="expandedItems[8]">
                  <p>We provide strategic counsel and develop design guidelines that ensure consistency and excellence at every project phase.</p>
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
const toggleItem = (index) => {
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
  max-width: 1000px;
}

.capabilities-title {
  font-family: 'Space Mono', monospace;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #333;
}

.capability-category {
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.capability-category:first-child {
  margin-top: 1rem;
}

.category-title {
  font-family: 'Space Mono', monospace;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #333;
}

.category-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.4;
  color: #333;
  margin-bottom: 1.5rem;
  max-width: 90%;
}

.capability-list {
  display: flex;
  flex-direction: column;
}

.capability-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.capability-name {
  font-family: 'Space Mono', monospace;
  font-size: 1rem;
  color: #333;
  font-weight: 400;
}

.read-more {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.plus-icon {
  display: inline-block;
  transition: transform 0.3s ease;
}

.plus-icon.rotated {
  transform: rotate(45deg);
}

.read-more:hover {
  color: #000;
}

.capability-description {
  padding: 0.5rem 0 1rem 2rem;
  margin-bottom: 0;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
  max-width: 90%;
  position: relative;
}

.capability-description::before {
  content: '';
  position: absolute;
  left: 0;
  top: 1.2rem;
  width: 1.5rem;
  height: 1px;
  background-color: #333;
}

.arrow-up {
  transform: rotate(180deg);
}

/* Animation styles */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 200px;
  opacity: 1;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.arrow {
  font-size: 0.8rem;
}

/* Founder Section Styles */
.founder-section {
  margin-top: 4rem;
  margin-bottom: 4rem;
  max-width: 1000px;
}

.founder-title {
  font-family: 'Space Mono', monospace;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
  color: #333;
  position: relative;
}

.founder-content {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
}

.founder-photo {
  width: 220px;
  position: relative;
  flex-shrink: 0;
}

.founder-photo img {
  width: 100%;
  height: auto;
  display: block;
}

.founder-position {
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: #333;
  padding: 0.3rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
}

.founder-bio {
  flex: 1;
  padding-top: 0.5rem;
}

.founder-bio p {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 1.5rem;
}

/* Media queries for founder section */
@media (max-width: 768px) {
  .founder-content {
    flex-direction: row;
    gap: 1.5rem;
  }
  
  .founder-photo {
    width: 180px;
  }
  
  .founder-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .founder-content {
    flex-direction: column;
  }
  
  .founder-photo {
    width: 100%;
    max-width: 220px;
  }
}

/* Team Section Styles */
.team-section {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.team-title {
  font-family: 'Space Mono', monospace;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 3rem;
  color: #333;
}

.team-members {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.team-member {
  display: flex;
  gap: 2rem;
}

.member-photo {
  width: 200px;
  position: relative;
}

.member-photo img {
  width: 100%;
  height: auto;
  display: block;
}

.member-position {
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  color: #333;
  padding: 0.3rem 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
}

.member-info {
  flex: 1;
}

.member-name {
  font-family: 'Space Mono', monospace;
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #333;
}

.member-bio {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

/* Media queries for team section */
@media (max-width: 768px) {
  .team-member {
    flex-direction: column;
    gap: 1rem;
  }
  
  .member-photo {
    width: 100%;
    max-width: 300px;
  }
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
