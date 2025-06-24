<template>
  <div class="sidebar-item" @click="toggleSection">
    <div class="sidebar-header">
      <h2>PROJECTS</h2>
      <div class="arrow-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['dropdown-arrow', { 'rotated': isOpen }]">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    <div v-if="isOpen" class="section-content portfolio-content">
      <!-- Hotels section -->
      <div class="portfolio-section">
        <h3 @click.stop="$emit('navigate', '/hotels')" style="cursor: pointer;">{{ translations[currentLanguage].hotels }}</h3>
        <div class="portfolio-links">
          <a @click.stop.prevent="$emit('navigate', '/equinox-hotel-chicago')" class="portfolio-link">EQUINOX HOTEL, CHICAGO</a>
          <a @click.stop.prevent="$emit('navigate', '/equinox-hotel-houston')" class="portfolio-link">EQUINOX HOTEL, HOUSTON</a>
          <a @click.stop.prevent="$emit('navigate', '/legendre-40-paris')" class="portfolio-link">LEGENDRE 40, PARIS</a>
          <a @click.stop.prevent="$emit('navigate', '/edition-hotel-tampa')" class="portfolio-link">EDITION HOTEL, TAMPA</a>
          <a @click.stop.prevent="$emit('navigate', '/emmons-hotel-ny')" class="portfolio-link">EMMONS HOTEL, NY</a>
          <a @click.stop.prevent="$emit('navigate', '/w-escapes-gramado')" class="portfolio-link">W ESCAPES GRAMADO</a>
          <a @click.stop.prevent="$emit('navigate', '/w-residences-gramado')" class="portfolio-link">W THE RESIDENCES GRAMADO</a>
          <a @click.stop.prevent="$emit('navigate', '/w-residence-sao-paulo')" class="portfolio-link">W THE RESIDENCE, SÃO PAULO</a>
          <a @click.stop.prevent="$emit('navigate', '/hilton-garden-inn')" class="portfolio-link">HILTON GARDEN INN</a>
          <a @click.stop.prevent="$emit('navigate', '/holiday-inn-porto-maravilha')" class="portfolio-link">HOLIDAY INN PORTO MARAVILHA, RIO DE JANEIRO</a>
          <a @click.stop.prevent="$emit('navigate', '/transamerica-fit-concept')" class="portfolio-link">TRANSAMERICA FIT CONCEPT</a>
          <a @click.stop.prevent="$emit('navigate', '/hard-rock-sao-paulo')" class="portfolio-link">HARD ROCK HOTEL, SÃO PAULO</a>
          <a @click.stop.prevent="$emit('navigate', '/hard-rock-gramado')" class="portfolio-link">HARD ROCK HOTEL, GRAMADO</a>
          <a @click.stop.prevent="$emit('navigate', '/hard-rock-caldas-novas')" class="portfolio-link">HARD ROCK HOTEL, CALDAS NOVAS</a>
          <a @click.stop.prevent="$emit('navigate', '/pensacola-hotel')" class="portfolio-link">PENSACOLA HOTEL</a>
          <a @click.stop.prevent="$emit('navigate', '/sheraton-santos')" class="portfolio-link">SHERATON SANTOS</a>
          <a @click.stop.prevent="$emit('navigate', '/westin-jekyll-island')" class="portfolio-link">WESTIN HOTELS JEKYLL ISLAND</a>
          <a @click.stop.prevent="$emit('navigate', '/hotels')" class="portfolio-link see-all">See all Hotels ></a>
        </div>
      </div>
      
      <!-- Food section -->
      <div class="portfolio-section">
        <h3 style="cursor: pointer;">
          <NuxtLink to="/foodnbeverage" @click.stop style="color: inherit; text-decoration: none;">
            {{ translations[currentLanguage].food }}
          </NuxtLink>
        </h3>
        <div class="portfolio-links">
          <a @click.stop.prevent="$emit('navigate', '/matador-room')" class="portfolio-link">MATADOR ROOM, JEAN GEORGES</a>
          <a @click.stop.prevent="$emit('navigate', '/the-street')" class="portfolio-link">THE STREET, SOUTH SEAPORT, NY</a>
          <a @click.stop.prevent="$emit('navigate', '/council-oak')" class="portfolio-link">COUNCIL OAK, GRAMADO</a>
          <a @click.stop.prevent="$emit('navigate', '/shinsegae-food-hall')" class="portfolio-link">SHINSEGAE FOOD HALL, DAEGON</a>
          <a @click.stop.prevent="$emit('navigate', '/hyatt-regency')" class="portfolio-link">HYATT REGENCY, SIGNATURE RESTAURANT</a>
          <NuxtLink to="/foodnbeverage" class="portfolio-link see-all" @click.stop style="text-decoration: none; color: inherit;">
            {{ translations[currentLanguage].seeAllFood }} >
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  currentLanguage: {
    type: String,
    required: true
  },
  translations: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['navigate']);

const isOpen = ref(false);

const toggleSection = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.sidebar-item {
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
}

.sidebar-header {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 100%;
}

.sidebar-header h2 {
  flex: 1;
  text-align: center;
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

.arrow-container {
  position: absolute;
  right: 0;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.section-content {
  padding: 1.5rem 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Portfolio content styles */
.portfolio-content {
  padding: 1rem 0;
  display: flex;
  flex-direction: column; /* stack Hotels, Foods, etc. */
  gap: 2.5rem; /* bigger separation */
}

/* Stack sections on small screens */
@media (max-width: 768px) {
  .portfolio-content {
    grid-template-columns: 1fr;
  }
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

.portfolio-section h3 a {
  color: inherit;
  text-decoration: none;
}

.portfolio-links {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 uniform columns on desktop */
  gap: 1rem;
}

@media (max-width: 1024px) {
  .portfolio-links {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .portfolio-links {
    grid-template-columns: repeat(2, 1fr);
  }
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
</style>
