<template>
  <div class="foodnbeverage-page">
    <div class="page-background"></div>
    <Navbar @toggle-sidebar="toggleSidebar" />
    <Sidebar :isOpen="sidebarOpen" @close="closeSidebar" />
    <div class="hero-image-container">
      <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100" alt="Food and Beverage Hero" class="hero-image" />
    </div>
      
    <div class="content-section">
      <div class="image-grid">
        <div class="grid-row">
          <div class="grid-item">
            <div class="project-link" @click="navigateToProject('/council-oak')">
              <img src="https://images.unsplash.com/photo-1514516345957-556ca7c90a34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Council Oak" />
              <div class="overlay">
                <span>Council Oak</span>
              </div>
            </div>
          </div>
          
          <div class="grid-item">
            <div class="project-link" @click="navigateToProject('/hyatt-regency')">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Hyatt Regency" />
              <div class="overlay">
                <span>Hyatt Regency</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid-row">
          <div class="grid-item">
            <div class="project-link" @click="navigateToProject('/shinsegae-food-hall')">
              <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Shinsegae Food Hall" />
              <div class="overlay">
                <span>Shinsegae Food Hall</span>
              </div>
            </div>
          </div>
          
          <div class="grid-item">
            <div class="project-link" @click="navigateToProject('/matador-room')">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Matador Room" />
              <div class="overlay">
                <span>Matador Room</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid-row">
          <div class="grid-item">
            <div class="project-link" @click="navigateToProject('/the-street')">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="The Street" />
              <div class="overlay">
                <span>The Street</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
import Sidebar from '~/components/index/Sidebar.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Footer
  },
  layout: 'food',
  data() {
    return {
      sidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    },
    navigateToProject(route) {
      // Use window.location for a hard navigation that ensures full page reload
      window.location.href = route;
    }
  },
  mounted() {
    // Add event listener for the Escape key
    document.addEventListener('keydown', (e) => {
      // Close sidebar with Escape key
      if (e.key === 'Escape' && this.sidebarOpen) {
        this.closeSidebar();
      }
    });
  },
  beforeDestroy() {
    // Clean up event listener
    document.removeEventListener('keydown', this.handleKeyDown);
  }
};
</script>

<style scoped>
.page-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/index/background_1920x1080_F2EEE3_horizontal.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: -1;
}

.foodnbeverage-page {
  min-height: 100vh;
  color: #333;
  position: relative;
}



.hero-image-container {
  width: 100%;
  height: 80vh;
  margin-top: 70px; /* Added margin for the Navbar */
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
  /* Removed background color to let the page background show through */
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
    margin-top: 0; /* Removed gap for mobile navbar */
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
