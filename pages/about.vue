<template>
  <div>
    <div class="page-background"></div>
    <div class="about-page">
      <Navbar />
      <div class="hero-image-container">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100" alt="About Us Hero" class="hero-image" />
      </div>
        
      <div class="content-section">
        <div class="about-content">
          <div class="section-header">
            <h2 class="section-title">OUR STORY</h2>
            <div class="section-divider"></div>
          </div>
          
          <div class="image-grid">
            <div class="grid-row">
              <div class="grid-item text-item">
                <p>
                  Founded with a vision to redefine hospitality, OARA creates spaces where people feel truly welcome and inspired. We remain committed to authenticity, innovation, and exceptional service.
                </p>
              </div>
              
              <div class="grid-item">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Our Team" />
              </div>
            </div>
            
            <div class="section-header">
              <h2 class="section-title">OUR PHILOSOPHY</h2>
              <div class="section-divider"></div>
            </div>
            
            <div class="grid-row">
              <div class="grid-item">
                <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Our Philosophy" />
              </div>
              
              <div class="grid-item text-item">
                <p>
                  At OARA, we create exceptional experiences through attention to detail and innovative design. Every space tells a unique story while providing unparalleled comfort and functionality.
                </p>
              </div>
            </div>
            
            <!-- Vision Paragraph -->
            <div class="section-header">
              <h2 class="section-title">OUR VISION</h2>
              <div class="section-divider"></div>
            </div>
            
            <div class="vision-container">
              <p class="vision-text">
                At OARA, we envision creating spaces that inspire, comfort, and elevate the human experience. Our designs blend innovation with timeless elegance, crafting environments that resonate with purpose and beauty.
              </p>
            </div>
            
            <!-- About Us Hover Image -->
            <div class="hover-image-container">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100" alt="About OARA" class="hover-image" />
              <div class="hover-overlay">
                <span class="hover-text">ABOUT US</span>
              </div>
            </div>
            
            <!-- Horizontal Scroll Testimonials -->
            <div class="section-header">
              <h2 class="section-title">TESTIMONIALS</h2>
              <div class="section-divider"></div>
            </div>
            
            <div class="testimonials-container">
              <div class="testimonials-scroll">
                <div class="testimonial-item">
                  <p class="testimonial-text">"OARA transformed our space into something beyond our imagination. Their attention to detail and innovative approach created a truly unique environment."</p>
                  <p class="testimonial-author">— Sarah Johnson, Luxury Hotel Group</p>
                </div>
                
                <div class="testimonial-item">
                  <p class="testimonial-text">"Working with OARA was a seamless experience from concept to completion. Their team understood our vision perfectly and executed it flawlessly."</p>
                  <p class="testimonial-author">— Michael Chen, Restaurant Owner</p>
                </div>
                
                <div class="testimonial-item">
                  <p class="testimonial-text">"The design solutions provided by OARA elevated our brand and created an unforgettable experience for our customers."</p>
                  <p class="testimonial-author">— Emma Rodriguez, Retail Director</p>
                </div>
                
                <div class="testimonial-item">
                  <p class="testimonial-text">"OARA's innovative approach to sustainable design helped us achieve our environmental goals without compromising on aesthetics."</p>
                  <p class="testimonial-author">— David Miller, Eco Resort</p>
                </div>
              </div>
            </div>
            
            <!-- Clients Hover Image -->
            <div class="hover-image-container">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100" alt="Our Clients" class="hover-image" />
              <div class="hover-overlay clients-overlay">
                <span class="hover-text">CLIENTS</span>
              </div>
            </div>
            
            <!-- Projects List -->
            <div class="section-header">
              <h2 class="section-title">OUR PROJECTS</h2>
              <div class="section-divider"></div>
            </div>
            
            <div class="projects-container">
              <div class="project-category">
                <h3 class="category-title">Hospitality</h3>
                <ul class="project-list">
                  <li>Azure Bay Resort & Spa</li>
                  <li>The Meridian Hotel</li>
                  <li>Elysian Boutique Lodging</li>
                  <li>Urban Retreat Hotel</li>
                </ul>
              </div>
              
              <div class="project-category">
                <h3 class="category-title">Restaurants</h3>
                <ul class="project-list">
                  <li>Ember & Vine Bistro</li>
                  <li>Salt & Stone Dining</li>
                  <li>Fusion 22 Restaurant</li>
                  <li>The Nordic Table</li>
                </ul>
              </div>
              
              <div class="project-category">
                <h3 class="category-title">Retail</h3>
                <ul class="project-list">
                  <li>Lumen Concept Store</li>
                  <li>Terra Sustainable Fashion</li>
                  <li>Prism Gallery Space</li>
                  <li>The Artisan Market</li>
                </ul>
              </div>
              
              <div class="project-category">
                <h3 class="category-title">Wellness</h3>
                <ul class="project-list">
                  <li>Serene Spa Retreat</li>
                  <li>Balance Fitness Center</li>
                  <li>Oasis Wellness Club</li>
                  <li>Pure Yoga Studio</li>
                </ul>
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
import { onMounted } from 'vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

onMounted(() => {
  // Animation or initialization logic can be added here
  document.title = "About Us | OARA";
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

.about-page {
  min-height: 100vh;
  color: #333;
  position: relative;
}

.hero-image-container {
  width: 100%;
  height: 90vh;
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

.about-content {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 2rem;
}

.section-title {
  font-family: 'Space Mono', monospace;
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #333;
  margin-bottom: 1.5rem;
}

.section-divider {
  width: 60px;
  height: 2px;
  background-color: #333;
  margin: 0 auto;
}

.image-grid {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.grid-row {
  display: flex;
  gap: 8rem;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.grid-item {
  flex: 0 0 auto;
  width: 550px;
  height: 380px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item.text-item {
  height: auto;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
}

.grid-item.text-item:hover {
  transform: none;
  box-shadow: none;
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

.grid-item p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

/* Vision Container Styles */
.vision-container {
  max-width: 800px;
  margin: 0 auto 5rem;
  text-align: center;
}

.vision-text {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #555;
  font-style: italic;
}

/* Hover Image Styles */
.hover-image-container {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  margin: 5rem 0;
}

.hover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.hover-text {
  color: white;
  font-family: 'Space Mono', monospace;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 0.2em;
}

.hover-image-container:hover .hover-overlay {
  opacity: 1;
}

.hover-image-container:hover .hover-image {
  transform: scale(1.05);
}

/* Testimonials Styles */
.testimonials-container {
  width: 100%;
  overflow: hidden;
  margin: 2rem 0 5rem;
}

.testimonials-scroll {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 2rem;
  padding: 2rem 0;
  scrollbar-width: thin;
  scrollbar-color: #888 #F9F3EF;
}

.testimonials-scroll::-webkit-scrollbar {
  height: 8px;
}

.testimonials-scroll::-webkit-scrollbar-track {
  background: #F9F3EF;
}

.testimonials-scroll::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 20px;
}

.testimonial-item {
  flex: 0 0 auto;
  width: 350px;
  scroll-snap-align: start;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.testimonial-author {
  font-size: 0.9rem;
  color: #888;
  text-align: right;
}

/* Projects Styles */
.projects-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin: 3rem 0 5rem;
}

.project-category {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.category-title {
  font-family: 'Space Mono', monospace;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #333;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 0.5rem;
}

.project-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.project-list li {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.project-list li:last-child {
  border-bottom: none;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .hero-image-container {
    height: 60vh;
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
    width: 100%;
    height: 300px;
  }
  
  .grid-item.text-item {
    width: 100%;
  }
  
  .image-grid {
    gap: 4rem;
  }
  
  .hover-image-container {
    height: 250px;
    margin: 3rem 0;
  }
  
  .hover-text {
    font-size: 2rem;
  }
  
  .testimonial-item {
    width: 280px;
    padding: 1.5rem;
  }
  
  .projects-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .vision-container {
    margin-bottom: 3rem;
  }
  
  .vision-text {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>
