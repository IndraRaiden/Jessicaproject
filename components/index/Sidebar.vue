<template>
  <div class="sidebar" :class="{ 'open': isOpen }">
    <div class="sidebar-content">
      <div class="header">
        <div class="spacer"></div>
        <div class="logo" @click="navigateTo('/')" style="cursor: pointer;">
          <img src="/index/OARA-MARCA-SITE.svg" alt="OARA Logo" class="logo-img" />
        </div>
        <div class="close-btn" @click="closeSidebar">+</div>
      </div>
      
      <div class="hospitality-text">
        <div class="horizontal-line top-line"></div>
        <h2 style="letter-spacing: 0.6em !important;">{{ translations[currentLanguage].heroText }}</h2>
        <div class="horizontal-line bottom-line"></div>
      </div>
      
      <div class="sidebar-layout">
        <!-- Language switcher -->
        <div class="sidebar-language-switcher">
          <button @click="toggleLanguage" class="sidebar-language-btn">
            <span class="sidebar-language-icon">🌐</span>
            <span class="sidebar-language-text">{{ currentLanguage === 'en' ? 'Português' : 'English' }}</span>
          </button>
        </div>
        
        <!-- Main Navigation -->
        <div class="nav-section">

          <div class="nav-group">
            <div class="nav-links">
              <div class="nav-column hotels-column">
                <a @click.prevent="navigateTo('/hotels')" class="nav-link hotels-link">{{ translations[currentLanguage].hotels }}</a>
              </div>
              
              <div class="nav-column food-column">
                <a @click.prevent="navigateTo('/foodnbeverage')" class="nav-link food-link">{{ translations[currentLanguage].food }}</a>
                <div class="food-list">
                  <a @click.prevent="navigateTo('/matador-room')" class="food-item">MATADOR ROOM,<br>JEAN GEORGES</a>
                  <a @click.prevent="navigateTo('/the-street')" class="food-item">THE STREET,<br>SOUTH SEAPORT, NY</a>
                  <a @click.prevent="navigateTo('/council-oak')" class="food-item">COUNCIL OAK, GRAMADO</a>
                  <a @click.prevent="navigateTo('/shinsegae-food-hall')" class="food-item">SHINSEGAE FOOD HALL,<br>DAEGON</a>
                  <a @click.prevent="navigateTo('/hyatt-regency')" class="food-item">HYATT REGENCY,<br>SIGNATURE RESTAURANT</a>
                  <a @click.prevent="navigateTo('/foodnbeverage')" class="food-item see-all">{{ translations[currentLanguage].seeAllFood }} ></a>
                </div>
              </div>
              
              <div class="nav-column cultural-column">
                <a @click.prevent="navigateTo('/santuaries-and-cultural')" class="nav-link sanctuaries-link">{{ translations[currentLanguage].cultural }}</a>
              </div>
              
              <div class="nav-column about-column">
                <a @click.prevent="navigateTo('/about')" class="nav-link about-link">{{ translations[currentLanguage].about }}</a>
              </div>
            </div>
          </div>
          

          <div class="hotels-list">
            <a @click.prevent="navigateTo('/equinox-hotel-chicago')" class="hotel-item">EQUINOX HOTEL, CHICAGO</a>
            <a @click.prevent="navigateTo('/equinox-hotel-houston')" class="hotel-item">EQUINOX HOTEL, HOUSTON</a>
            <a @click.prevent="navigateTo('/legendre-40-paris')" class="hotel-item">LEGENDRE 40, PARIS</a>
            <a @click.prevent="navigateTo('/edition-hotel-tampa')" class="hotel-item">EDITION HOTEL, TAMPA</a>
            <a @click.prevent="navigateTo('/emmons-hotel-ny')" class="hotel-item">EMMONS HOTEL, NY</a>
            <a @click.prevent="navigateTo('/w-escapes-gramado')" class="hotel-item">W ESCAPES GRAMADO</a>
            <a @click.prevent="navigateTo('/w-residences-gramado')" class="hotel-item">W THE RESIDENCES GRAMADO</a>
            <a @click.prevent="navigateTo('/w-residence-sao-paulo')" class="hotel-item">W THE RESIDENCE, SÃO PAULO</a>
            <a @click.prevent="navigateTo('/hilton-garden-inn')" class="hotel-item">HILTON GARDEN INN</a>
            <a @click.prevent="navigateTo('/holiday-inn-porto-maravilha')" class="hotel-item">HOLIDAY INN PORTO MARAVILHA,<br>RIO DE JANEIRO</a>
            <a @click.prevent="navigateTo('/transamerica-fit-concept')" class="hotel-item">TRANSAMERICA FIT CONCEPT</a>
            <a @click.prevent="navigateTo('/hard-rock-sao-paulo')" class="hotel-item">HARD ROCK HOTEL, SÃO PAULO</a>
            <a @click.prevent="navigateTo('/hard-rock-gramado')" class="hotel-item">HARD ROCK HOTEL, GRAMADO</a>
            <a @click.prevent="navigateTo('/hard-rock-caldas-novas')" class="hotel-item">HARD ROCK HOTEL, CALDAS NOVAS</a>
            <a @click.prevent="navigateTo('/pensacola-hotel')" class="hotel-item">PENSACOLA HOTEL</a>
            <a @click.prevent="navigateTo('/sheraton-santos')" class="hotel-item">SHERATON SANTOS</a>
            <a @click.prevent="navigateTo('/westin-jekyll-island')" class="hotel-item">WESTIN HOTELS JEKYLL ISLAND</a>
            <a @click.prevent="navigateTo('/hotels')" class="hotel-item see-all">See all Hotels ></a>
          </div>
        </div>
        
        <!-- Contact Information -->
        <div class="contact-section">
          <div class="contact-info">
            <p style="color: #29332e !important; margin-bottom: 10px;">HORIZON COLLECTIVE</p>
            <p style="color: #29332e !important; margin-bottom: 10px;">118 MERIDIAN AVENUE</p>
            <p style="color: #29332e !important; margin-bottom: 15px;">OSLO, NORWAY</p>
            <div class="contact-links">
              <a href="mailto:hello@horizon.co" style="color: #29332e !important; margin-bottom: 10px; display: block;">HELLO@HORIZON.CO</a>
              <a href="tel:+4721558899" style="color: #29332e !important; display: block;">+47 215 588 99</a>
            </div>
          </div>
          
          <div class="social-links" style="margin-top: 15px;">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" style="color: #29332e !important;">INSTAGRAM</a>
            <a href="https://www.linkedin.com/in/jessicalianza?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" class="social-link" style="color: #29332e !important;">LINKEDIN</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';

const router = useRouter();
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

// Language state
const currentLanguage = ref('en');

// Translations object
const translations = reactive({
  en: {
    heroText: 'HOSPITALITY DESIGN + STRATEGY',
    hotels: 'HOTELS',
    food: 'FOOD',
    cultural: 'CULTURAL',
    about: 'ABOUT & SERVICES',
    seeAllFood: 'See all Food'
  },
  pt: {
    heroText: 'DESIGN E ESTRATÉGIA DE HOSPITALIDADE',
    hotels: 'HOTÉIS',
    food: 'GASTRONOMIA',
    cultural: 'CULTURAL',
    about: 'SOBRE & SERVIÇOS',
    seeAllFood: 'Ver todos os restaurantes'
  }
});

// Check for saved language preference on component mount
onMounted(() => {
  if (process.client) {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      currentLanguage.value = savedLanguage;
    }
  }
});

const closeSidebar = () => {
  emit('close');
}

// Toggle language function
const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'pt' : 'en';
  // Store language preference in localStorage for persistence
  localStorage.setItem('preferredLanguage', currentLanguage.value);
};

const navigateTo = (route) => {
  // Close sidebar first
  closeSidebar();
  
  // Force a reflow/repaint before navigation
  document.body.style.display = 'none';
  
  // Use setTimeout to ensure the DOM has time to update
  setTimeout(() => {
    document.body.style.display = '';
    
    // Navigate to the route
    router.push(route);
    
    // Force scroll to top after navigation
    window.scrollTo(0, 0);
  }, 50);
};
</script>

<style scoped>
:root {
  --dark-green: #28332d; /* Dark green color as specified */
}

.sidebar {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: #f2eee3;
  z-index: 2000;
  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrollbar */
  display: block;
}

.sidebar.open {
  right: 0;
}

.sidebar-content {
  width: 100%;
  margin: 0;
  padding: 3rem 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  padding: 1rem 0;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: -30px;
  position: relative;
  padding-bottom: 5px;
}

.logo::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #29332e;
  transition: width 0.3s ease;
}

.logo:hover::after {
  width: 100%;
}

.logo-img {
  height: 140px;
  width: auto;
  /* Adjusted size to 140px */
}

.close-btn {
  font-size: 5rem;
  color: #29332e;
  cursor: pointer;
  transform: rotate(45deg);
  transition: transform 0.6s ease;
  margin-top: -2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  overflow: hidden; /* Prevent content overflow */
  position: relative; /* Ensure positioning context */
}

.close-btn:hover {
  transform: rotate(90deg);
  /* No additional transformations that could cause layout shifts */
}

.hospitality-text {
  width: 100%;
  height: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  margin-top: -6rem;
}

.horizontal-line {
  width: 100%;
  height: 1px;
  background-color: rgba(41, 51, 46, 0.15); /* Subtle line color matching sidebar theme */
}

.top-line {
  margin-bottom: 10px;
}

.bottom-line {
  margin-top: 10px;
}

.hospitality-text h2 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.95rem;
  font-weight: 600; /* SEMIBOLD as per specifications */
  color: #29332e;
  letter-spacing: 220%; /* 220 spacing as per specifications */
  text-transform: uppercase; /* CAPSLOCK: SIM */
  margin: 0;
  padding: 0 15px;
  line-height: 1;
}

.spacer {
  width: 5rem;
}

.sidebar-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8rem);
  padding-bottom: 2rem;
}

.nav-section {
  margin-bottom: 4rem;
}

.nav-group {
  margin-bottom: 3rem;
}

.nav-group h3 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #29332e;
  letter-spacing: 0.1em;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  width: 100%;
  position: relative;
  padding: 0;
  height: 3rem;
  align-items: flex-start;
}

.nav-column {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 0.5rem;
}

.food-column {
  width: 25%;
  position: absolute;
  left: 30%;
}

.hotels-column {
  width: 15%;
  position: absolute;
  left: 0;
}

.cultural-column {
  width: 15%;
  position: absolute;
  left: 58%;
}

.about-column {
  width: 20%;
  position: absolute;
  right: 0;
  text-align: right;
}

.hotels-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.hotel-item {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.25rem;
  color: #29332e;
  text-decoration: none;
  transition: color 0.2s ease;
  display: block;
  width: 100%;
  padding: 0.2rem 0;
  line-height: 1.3;
}

.hotel-item:hover {
  color: #a67c52;
}

.hotel-item.see-all, .food-item.see-all {
  color: #a67c52;
  font-weight: 600;
  margin-top: 0.5rem;
}



.food-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 4rem;
}

.food-item {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.25rem;
  color: #29332e;
  text-decoration: none;
  transition: color 0.2s ease;
  display: block;
  padding: 0.2rem 0;
  line-height: 1.3;
  white-space: nowrap;
}

.food-item:hover {
  color: #a67c52;
}

.nav-link {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.8rem;
  color: #29332e;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.2s ease;
  display: inline-block;
}

.nav-link:hover {
  color: #a67c52;
}

.hotels-link, .food-link, .sanctuaries-link, .about-link {
  position: relative;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.category h4 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #29332e;
}

.category a {
  display: block;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  color: #29332e;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: opacity 0.2s;
}

.category a:hover {
  opacity: 0.7;
}

.contact-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #ddd;
  padding-top: 2rem;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
}

.contact-info p {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  color: #29332e;
  margin-bottom: 0.3rem;
}

/* Language switcher styles */
.sidebar-language-switcher {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.sidebar-language-btn {
  background-color: transparent;
  color: #29332e;
  border: 1px solid #a67c52;
  border-radius: 30px;
  padding: 8px 16px;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
}

.sidebar-language-icon {
  font-size: 0.9rem;
}

.sidebar-language-text {
  letter-spacing: 0.05em;
  position: relative;
  z-index: 2;
}

.sidebar-language-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(166, 124, 82, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1;
}

.sidebar-language-btn:hover {
  color: #a67c52;
}

.sidebar-language-btn:hover::before {
  transform: translateX(0);
}

.contact-links {
  margin-top: 1rem;
}

.contact-links a {
  display: block;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.8rem;
  color: #29332e;
  text-decoration: none;
  margin-bottom: 0.3rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.8rem;
  color: #29332e;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 600; /* Semi-bold */
  letter-spacing: 220%; /* Spacing 220 - exact specification */
  text-transform: uppercase; /* CAPSLOCK: SIM */
}

.social-link:hover {
  opacity: 0.8;
}

/* Media queries for responsive design */
@media (max-width: 1024px) {
  .contact-section {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .social-links {
    margin-top: 2rem;
  }
}

@media (max-width: 640px) {
  .nav-links {
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    height: auto;
  }
  
  .nav-column {
    width: 100% !important;
    margin-bottom: 1rem;
  }
  
  .hotels-list {
    padding: 0 0.5rem;
  }
  

  
  .category-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .sidebar-content {
    padding: 2rem 1.5rem;
  }
  
  .logo-img {
    height: 100px;
  }
  
  .hospitality-text {
    height: 50px;
    margin-top: -5.2rem;
    margin-bottom: 2rem;
  }
  
  .hospitality-text h2 {
    font-size: 0.8rem;
    letter-spacing: 0.6em !important;
  }
}

/* iOS-specific fixes */
@supports (-webkit-touch-callout: none) {
  .hospitality-text h2 {
    /* Fix for iOS text rendering */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.6em !important; /* Matching hero section letter spacing */
    padding: 0 10px;
    width: auto;
    display: inline-block;
  }
  
  .logo-img {
    /* Ensure SVG renders properly on iOS */
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }
  
  .nav-link {
    /* Fix for iOS text rendering in navigation */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0.03em; /* Tighter letter spacing on iOS */
  }
  
  /* Fix for iOS text rendering in mobile */
  @media (max-width: 640px) {
    .hospitality-text h2 {
      letter-spacing: 0.6em !important;
      font-size: 0.75rem;
    }
  }
}
</style>
