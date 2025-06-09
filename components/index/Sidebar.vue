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
          <!-- New Sidebar Menu Items -->
          <div class="sidebar-menu-container">
            <div class="sidebar-item" @click="toggleSection('about')">
              <div class="sidebar-header">
                <h2>ABOUT OARA</h2>
                <div class="arrow-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['dropdown-arrow', { 'rotated': openSections.about }]">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div v-if="openSections.about" class="section-content">
                <div class="about-content">
                  <p>The hospitality design and strategy partner founded by a visionary leader with deep roots in architecture, interiors, branding, and hospitality – born of deep expertise in architecture, interiors, branding and global F&B – from New York to São Paulo, Europe to Southeast Asia.</p>
                  <p>We deliver a true 360° approach, transforming real estate into immersive destinations through rigorous, brand-led placemaking and the creativity of soulful design. By honoring each project's narrative and rhythm, we reimagine space to unlock value – amplifying returns, shaping perception and sparking genuine connection.</p>
                  <div class="founder-section">
                    <h3>Meet the founder</h3>
                    <div class="founder-image-container">
                      <img src="/about/founder-placeholder.svg" alt="Jessica Lianza - Founder" class="founder-image">
                      <div class="founder-caption">Global CEO</div>
                    </div>
                    <p>Jessica Lianza moves between structure and soul. Raised in São Paulo by an Israeli psychologist mother and a Brazilian Italian father who managed buildings and people, she was immersed early on in the emotional and operational layers of how we live. Her world has always balanced the visible and invisible – the architecture of feeling, the precision of systems. At 14, a psychosomatic illness led her inward. Yoga, stillness, and the rituals of well-being became her compass. That inward turn was the start of a life devoted to designing spaces that offer care, clarity, and presence.</p>
                    <p>Born in New York and shaped by four cultures, Jessica's instinct is global and her gaze, personal. She's guided architecture, interior design, service innovation, and project management across São Paulo, New York, London, and Southeast Asia – always seeking to understand how people move through space and how space moves people. Her time in ecological schools and remote retreats sharpened a sensitivity that remains central to her work.</p>
                    <p>Over the past 15 years, she has led hospitality, cultural, and residential projects across four continents, working with names like Gerber Collection, W Hotels, Edition, Hilton, and Hard Rock, as well as quieter, deeply personal ventures where story, memory, and experience guide every line. From narrative to layout, operations to atmosphere, Jessica designs places meant to last – spaces that make us feel human.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="sidebar-item" @click="toggleSection('portfolio')">
              <div class="sidebar-header">
                <h2>PORTFÓLIO</h2>
                <div class="arrow-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['dropdown-arrow', { 'rotated': openSections.portfolio }]">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div v-if="openSections.portfolio" class="section-content portfolio-content">
                <!-- Hotels section -->
                <div class="portfolio-section">
                  <h3 @click="navigateTo('/hotels')" style="cursor: pointer;">{{ translations[currentLanguage].hotels }}</h3>
                  <div class="portfolio-links">
                    <a @click.prevent="navigateTo('/equinox-hotel-chicago')" class="portfolio-link">EQUINOX HOTEL, CHICAGO</a>
                    <a @click.prevent="navigateTo('/equinox-hotel-houston')" class="portfolio-link">EQUINOX HOTEL, HOUSTON</a>
                    <a @click.prevent="navigateTo('/legendre-40-paris')" class="portfolio-link">LEGENDRE 40, PARIS</a>
                    <a @click.prevent="navigateTo('/edition-hotel-tampa')" class="portfolio-link">EDITION HOTEL, TAMPA</a>
                    <a @click.prevent="navigateTo('/emmons-hotel-ny')" class="portfolio-link">EMMONS HOTEL, NY</a>
                    <a @click.prevent="navigateTo('/w-escapes-gramado')" class="portfolio-link">W ESCAPES GRAMADO</a>
                    <a @click.prevent="navigateTo('/w-residences-gramado')" class="portfolio-link">W THE RESIDENCES GRAMADO</a>
                    <a @click.prevent="navigateTo('/w-residence-sao-paulo')" class="portfolio-link">W THE RESIDENCE, SÃO PAULO</a>
                    <a @click.prevent="navigateTo('/hilton-garden-inn')" class="portfolio-link">HILTON GARDEN INN</a>
                    <a @click.prevent="navigateTo('/holiday-inn-porto-maravilha')" class="portfolio-link">HOLIDAY INN PORTO MARAVILHA, RIO DE JANEIRO</a>
                    <a @click.prevent="navigateTo('/transamerica-fit-concept')" class="portfolio-link">TRANSAMERICA FIT CONCEPT</a>
                    <a @click.prevent="navigateTo('/hard-rock-sao-paulo')" class="portfolio-link">HARD ROCK HOTEL, SÃO PAULO</a>
                    <a @click.prevent="navigateTo('/hard-rock-gramado')" class="portfolio-link">HARD ROCK HOTEL, GRAMADO</a>
                    <a @click.prevent="navigateTo('/hard-rock-caldas-novas')" class="portfolio-link">HARD ROCK HOTEL, CALDAS NOVAS</a>
                    <a @click.prevent="navigateTo('/pensacola-hotel')" class="portfolio-link">PENSACOLA HOTEL</a>
                    <a @click.prevent="navigateTo('/sheraton-santos')" class="portfolio-link">SHERATON SANTOS</a>
                    <a @click.prevent="navigateTo('/westin-jekyll-island')" class="portfolio-link">WESTIN HOTELS JEKYLL ISLAND</a>
                    <a @click.prevent="navigateTo('/hotels')" class="portfolio-link see-all">See all Hotels ></a>
                  </div>
                </div>
                
                <!-- Food section -->
                <div class="portfolio-section">
                  <h3>{{ translations[currentLanguage].food }}</h3>
                  <div class="portfolio-links">
                    <a @click.prevent="navigateTo('/matador-room')" class="portfolio-link">MATADOR ROOM, JEAN GEORGES</a>
                    <a @click.prevent="navigateTo('/the-street')" class="portfolio-link">THE STREET, SOUTH SEAPORT, NY</a>
                    <a @click.prevent="navigateTo('/council-oak')" class="portfolio-link">COUNCIL OAK, GRAMADO</a>
                    <a @click.prevent="navigateTo('/shinsegae-food-hall')" class="portfolio-link">SHINSEGAE FOOD HALL, DAEGON</a>
                    <a @click.prevent="navigateTo('/hyatt-regency')" class="portfolio-link">HYATT REGENCY, SIGNATURE RESTAURANT</a>
                    <a @click.prevent="navigateTo('/foodnbeverage')" class="portfolio-link see-all">{{ translations[currentLanguage].seeAllFood }} ></a>
                  </div>
                </div>
                

              </div>
            </div>
            
            <div class="sidebar-item" @click="toggleSection('services')">
              <div class="sidebar-header">
                <h2>SERVICES</h2>
                <div class="arrow-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['dropdown-arrow', { 'rotated': openSections.services }]">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div class="service-description">
                <p>We deliver a true 360° approach, transforming real estate into immersive destinations through rigorous, brand-led placemaking and the creativity of soulful design</p>
              </div>
              <div v-if="openSections.services" class="section-content">
                <div class="services-grid">
                  <!-- Design Column -->
                  <div class="service-column">
                    <h3 class="service-category">DESIGN</h3>
                    <p class="service-description">WE CREATE ENVIRONMENTS THAT BALANCE FORM, FUNCTION AND GUEST EXPERIENCE.</p>
                    
                    <div class="service-item">
                      <h4>CONCEPT DEVELOPMENT</h4>
                      <a href="#" class="read-more">Read More</a>
                    </div>
                    
                    <div class="service-item">
                      <h4>SPACE PLANNING</h4>
                      <a href="#" class="read-more">Read More</a>
                    </div>
                    
                    <div class="service-item">
                      <h4>BACK OF HOUSE OPTIMIZATION & DESIGN</h4>
                      <a href="#" class="read-more">Read More</a>
                    </div>
                  </div>
                  
                  <!-- Strategy Column -->
                  <div class="service-column">
                    <h3 class="service-category">STRATEGY</h3>
                    <p class="service-description">WE DEFINE POSITIONING, NARRATIVES AND CONCEPTS THAT CONNECT BRAND, PLACE AND AUDIENCE.</p>
                    
                    <div class="service-item">
                      <h4>BRAND INTEGRATION & EXPERIENCE DESIGN</h4>
                      <a href="#" class="read-more">Read More</a>
                    </div>
                    
                    <div class="service-item">
                      <h4>MARKET POSITIONING & PLACEMAKING</h4>
                      <a href="#" class="read-more">Read More</a>
                    </div>
                    
                    <div class="service-item">
                      <h4>SERVICE DESIGN</h4>
                      <a href="#" class="read-more">Read More</a>
                    </div>
                  </div>
                  
                  <!-- Consultancy Column -->
                  <div class="service-column">
                    <h3 class="service-category">CONSULTANCY</h3>
                    <p class="service-description">WE ADVISE STAKEHOLDERS AND VALIDATE PROJECTS TO MAXIMIZE PERFORMANCE AND ENSURE COMPLIANCE.</p>
                    
                    <div class="service-item">
                      <h4>TECHNICAL REVIEW & COMPLIANCE</h4>
                      <a href="#" class="read-more">Read More</a>
                    </div>
                    
                    <div class="service-item">
                      <h4>IMPLEMENTATION SUPPORT</h4>
                      <a href="#" class="read-more">Read More</a>
                    </div>
                    
                    <div class="service-item">
                      <h4>STRATEGIC DESIGN ADVISORY</h4>
                      <a href="#" class="read-more">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          
          <div class="social-links" style="margin-top: 15px; display: flex; gap: 30px;">
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

// Dropdown sections state
const openSections = reactive({
  about: false,
  portfolio: false,
  services: false
});

// Toggle section method
const toggleSection = (section) => {
  openSections[section] = !openSections[section];
};

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
  --cream-bg: #FEF6E4; /* Cream background color for sidebar items */
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

/* Sidebar Menu Container Styles */
.sidebar-menu-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1px;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.sidebar-item {
  background-color: var(--cream-bg);
  border-radius: 16px;
  padding: 2.2rem 2.5rem;
  margin-bottom: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.sidebar-header h2 {
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin: 0;
  font-family: 'Be Vietnam Pro', sans-serif;
  color: #000;
  text-transform: uppercase;
}

.dropdown-arrow {
  width: 32px;
  height: 32px;
  stroke-width: 2px;
  stroke: #000;
  transition: transform 0.3s ease;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.section-content {
  padding: 1rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.about-content {
  color: #29332e;
  font-family: 'Be Vietnam Pro', sans-serif;
}

.about-content p {
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.founder-section {
  margin-top: 1.5rem;
}

.founder-section h3 {
  font-family: 'Space Mono', monospace;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
  color: #29332e;
}

.founder-image-container {
  position: relative;
  width: 100%;
  max-width: 240px;
  margin: 0 0 1.5rem 0;
}

.founder-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.founder-caption {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: #29332e;
  margin-top: 0.5rem;
}

.service-description {
  font-size: 0.95rem;
  line-height: 1.65;
  margin-top: 1.2rem;
  max-width: 80%;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 400;
  color: #000;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0.5rem 0;
}

.service-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-category {
  font-family: 'Space Mono', monospace;
  font-size: 1.2rem;
  font-weight: 400;
  color: #29332e;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.service-column .service-description {
  font-size: 0.8rem;
  line-height: 1.4;
  font-weight: 500;
  margin-bottom: 1rem;
  padding: 0;
  max-width: 100%;
}

.service-item {
  margin-bottom: 1rem;
  border-top: 1px solid rgba(41, 51, 46, 0.2);
  padding-top: 0.8rem;
}

.service-item h4 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #29332e;
  margin-bottom: 0.5rem;
}

.read-more {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.75rem;
  color: #29332e;
  text-decoration: none;
  display: block;
  margin-top: 0.3rem;
}

.read-more:hover {
  text-decoration: underline;
}

.service-description p {
  margin: 0;
}

.section-content {
  padding-top: 1rem;
  overflow: hidden;
  animation: slideDown 0.3s ease-in-out;
}

/* Portfolio content styles */
.portfolio-content {
  padding: 1rem 0;
}

.portfolio-section {
  margin-bottom: 1.5rem;
}

.portfolio-section h3 {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #000;
}

.portfolio-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.5rem;
}

.portfolio-link {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.9rem;
  color: #000;
  text-decoration: none;
  transition: color 0.2s ease;
  display: block;
  padding: 0.4rem 0;
  cursor: pointer;
}

.portfolio-link:hover {
  color: #555;
  text-decoration: underline;
}

.portfolio-link.see-all {
  font-weight: 600;
  margin-top: 0.5rem;
}

@keyframes slideDown {
  from { max-height: 0; opacity: 0; }
  to { max-height: 500px; opacity: 1; }
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
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-top: 1px solid #ddd;
  padding-top: 2rem;
  padding-left: 0;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  max-width: 90%;
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
