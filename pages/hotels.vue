<template>
  <div>
    <div class="page-background"></div>
    <Navbar @toggle-sidebar="toggleSidebar" />
    <SidebarIndex :isOpen="sidebarOpen" @close="closeSidebar" />
    <div class="hotels-container">
      <div class="hotels-header">
        <h1>HOTELS</h1>
        <div class="horizontal-line"></div>
      </div>
      
      <div class="hotels-content">
        <p class="intro-text">
          Discover our collection of carefully curated hotel projects that blend sophisticated design with exceptional hospitality experiences.
        </p>
        
        <div class="hotels-grid">
          <!-- Equinox Hotels -->
          <NuxtLink to="/equinox-hotel-chicago" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Equinox Hotel Chicago" />
            </div>
            <div class="hotel-info">
              <h3>EQUINOX HOTEL</h3>
              <p>Chicago, USA</p>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/equinox-hotel-houston" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Equinox Hotel Houston" />
            </div>
            <div class="hotel-info">
              <h3>EQUINOX HOTEL</h3>
              <p>Houston, USA</p>
            </div>
          </NuxtLink>
          
          <!-- Legendre 40 -->
          <NuxtLink to="/legendre-40-paris" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Legendre 40 Paris" />
            </div>
            <div class="hotel-info">
              <h3>LEGENDRE 40</h3>
              <p>Paris, France</p>
            </div>
          </NuxtLink>
          
          <!-- Edition Hotel -->
          <NuxtLink to="/edition-hotel-tampa" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Edition Hotel Tampa" />
            </div>
            <div class="hotel-info">
              <h3>EDITION HOTEL</h3>
              <p>Tampa, USA</p>
            </div>
          </NuxtLink>
          
          <!-- Emmons Hotel -->
          <NuxtLink to="/emmons-hotel-ny" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Emmons Hotel NY" />
            </div>
            <div class="hotel-info">
              <h3>EMMONS HOTEL</h3>
              <p>New York, USA</p>
            </div>
          </NuxtLink>
          
          <!-- W Escapes Gramado -->
          <NuxtLink to="/w-escapes-gramado" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="W Escapes Gramado" />
            </div>
            <div class="hotel-info">
              <h3>W ESCAPES</h3>
              <p>Gramado, Brazil</p>
            </div>
          </NuxtLink>
          
          <!-- W The Residences Gramado -->
          <NuxtLink to="/w-residences-gramado" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="W Residences Gramado" />
            </div>
            <div class="hotel-info">
              <h3>W THE RESIDENCES</h3>
              <p>Gramado, Brazil</p>
            </div>
          </NuxtLink>
          
          <!-- W The Residence São Paulo -->
          <NuxtLink to="/w-residence-sao-paulo" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="W Residence São Paulo" />
            </div>
            <div class="hotel-info">
              <h3>W THE RESIDENCE</h3>
              <p>São Paulo, Brazil</p>
            </div>
          </NuxtLink>
          
          <!-- Hilton Garden Inn -->
          <NuxtLink to="/hilton-garden-inn" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Hilton Garden Inn" />
            </div>
            <div class="hotel-info">
              <h3>HILTON GARDEN INN</h3>
              <p>Various Locations</p>
            </div>
          </NuxtLink>
          
          <!-- Holiday Inn Porto Maravilha -->
          <NuxtLink to="/holiday-inn-porto-maravilha" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Holiday Inn Porto Maravilha" />
            </div>
            <div class="hotel-info">
              <h3>HOLIDAY INN</h3>
              <p>Porto Maravilha, Rio de Janeiro</p>
            </div>
          </NuxtLink>
          
          <!-- Transamerica Fit Concept -->
          <NuxtLink to="/transamerica-fit-concept" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Transamerica Fit Concept" />
            </div>
            <div class="hotel-info">
              <h3>TRANSAMERICA FIT CONCEPT</h3>
              <p>Brazil</p>
            </div>
          </NuxtLink>
          
          <!-- Hard Rock Hotels -->
          <NuxtLink to="/hard-rock-sao-paulo" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Hard Rock Hotel São Paulo" />
            </div>
            <div class="hotel-info">
              <h3>HARD ROCK HOTEL</h3>
              <p>São Paulo, Brazil</p>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/hard-rock-gramado" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Hard Rock Hotel Gramado" />
            </div>
            <div class="hotel-info">
              <h3>HARD ROCK HOTEL</h3>
              <p>Gramado, Brazil</p>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/hard-rock-caldas-novas" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Hard Rock Hotel Caldas Novas" />
            </div>
            <div class="hotel-info">
              <h3>HARD ROCK HOTEL</h3>
              <p>Caldas Novas, Brazil</p>
            </div>
          </NuxtLink>
          
          <!-- Other Hotels -->
          <NuxtLink to="/pensacola-hotel" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Pensacola Hotel" />
            </div>
            <div class="hotel-info">
              <h3>PENSACOLA HOTEL</h3>
              <p>Pensacola, USA</p>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/sheraton-santos" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Sheraton Santos" />
            </div>
            <div class="hotel-info">
              <h3>SHERATON</h3>
              <p>Santos, Brazil</p>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/westin-jekyll-island" class="hotel-card">
            <div class="hotel-image">
              <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Westin Jekyll Island" />
            </div>
            <div class="hotel-info">
              <h3>WESTIN HOTELS</h3>
              <p>Jekyll Island, USA</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import SidebarIndex from '../components/index/Sidebar.vue';

// Sidebar state
const sidebarOpen = ref(false);

// Toggle sidebar function
const toggleSidebar = (state) => {
  if (state !== undefined) {
    sidebarOpen.value = state;
  } else {
    sidebarOpen.value = !sidebarOpen.value;
  }
};

// Close sidebar function
const closeSidebar = () => {
  sidebarOpen.value = false;
};

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

.hotels-container {
  padding: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 150px; /* Added space for navbar */
  min-height: 100vh;
}

.hotels-header {
  margin-bottom: 3rem;
}

.hotels-header h1 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 2.5rem;
  color: #000;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  font-weight: 500;
}

.horizontal-line {
  height: 1px;
  background-color: #000;
  width: 100px;
  margin-bottom: 2rem;
}

.intro-text {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.2rem;
  color: #000;
  max-width: 800px;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.hotels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.hotel-card {
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.hotel-card:hover {
  transform: translateY(-5px);
}

.hotel-image {
  overflow: hidden;
  margin-bottom: 1rem;
}

.hotel-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hotel-card:hover .hotel-image img {
  transform: scale(1.05);
}

.hotel-info h3 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
  font-weight: 500;
}

.hotel-info p {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 1024px) {
  .hotels-container {
    padding: 3rem;
    padding-top: 120px;
  }
}

@media (max-width: 768px) {
  .hotels-container {
    padding: 2rem;
    padding-top: 100px;
  }
  
  .hotels-grid {
    grid-template-columns: 1fr;
  }
  
  .hotels-header h1 {
    font-size: 2rem;
  }
  
  .intro-text {
    font-size: 1rem;
  }
}
</style>
