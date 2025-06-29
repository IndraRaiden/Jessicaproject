<template>
  <div class="sidebar-item" @click="toggleSection">
    <div class="sidebar-header">
      <h2>{{ t('footerAboutTitle') }}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="['dropdown-arrow', { 'rotated': isOpen }]">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
    <div v-if="isOpen" class="section-content">
      <div class="about-content">
        <h2 class="intro-heading">We are OARA.</h2>
        <p>The hospitality design and strategy partner founded by a visionary leader with deep roots in architecture, interiors, branding, and hospitality – born of deep expertise in architecture, interiors, branding and global F&B – from New York to São Paulo, Europe to Southeast Asia.</p>
        <p>We deliver a true 360° approach, transforming real estate into immersive destinations through rigorous, brand-led placemaking and the creativity of soulful design. By honoring each project's narrative and rhythm, we reimagine space to unlock value – amplifying returns, shaping perception and sparking genuine connection.</p>
        <div class="founder-section">
          <h3>Meet the founder</h3>
          <div class="founder-info">
            <div class="founder-image-container">
              <img src="/about/founder-placeholder.svg" alt="Jessica Lianza - Founder" class="founder-image">
              <div class="founder-caption">Global CEO</div>
            </div>
            <div class="founder-text">
              <p>Jessica Lianza moves between structure and soul. Raised in São Paulo by an Israeli psychologist mother and a Brazilian Italian father who managed buildings and people, she was immersed early on in the emotional and operational layers of how we live. Her world has always balanced the visible and invisible – the architecture of feeling, the precision of systems. At 14, a psychosomatic illness led her inward. Yoga, stillness, and the rituals of well-being became her compass. That inward turn was the start of a life devoted to designing spaces that offer care, clarity, and presence.</p>
              <p>Born in New York and shaped by four cultures, Jessica's instinct is global and her gaze, personal. She's guided architecture, interior design, service innovation, and project management across São Paulo, New York, London, and Southeast Asia – always seeking to understand how people move through space and how space moves people. Her time in ecological schools and remote retreats sharpened a sensitivity that remains central to her work.</p>
              <p>Over the past 15 years, she has led hospitality, cultural, and residential projects across four continents, working with names like Gerber Collection, W Hotels, Edition, Hilton, and Hard Rock, as well as quieter, deeply personal ventures where story, memory, and experience guide every line. From narrative to layout, operations to atmosphere, Jessica designs places meant to last – spaces that make us feel human.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTranslation } from '~/composables/useTranslation';

const { t } = useTranslation();
const isOpen = ref(false);

const toggleSection = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.sidebar-item {
  padding: 0.5rem 0;
  width: 100%;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.sidebar-header {
  display: flex;
  position: relative;
  justify-content: center;
  /* removed relative positioning */
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
  position: absolute;
  right: 0;
  position: absolute;
  right: 0;
  position: absolute;
  right: 0;
}

.arrow-container {
  position: static;
  right: 0;
  position: static;
  right: 0;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.section-content {
  padding: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.about-content {
  color: #29332e;
  font-family: 'Be Vietnam Pro', sans-serif;
}

.about-content p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.7;
}


.intro-heading {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-family: 'Instrument Serif', serif;
}

.founder-section {
  margin-top: 2rem;
}

.founder-section h3 {
  font-family: 'Instrument Serif', serif;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  color: #29332e;
}

.founder-image-container {
  flex: 0 0 180px;
  width: 100%;
  max-width: 300px;
  margin: 0 0 2rem 0;
}

.founder-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.founder-caption {
  font-family: 'Instrument Serif', serif;
  font-size: 1rem;
  color: #29332e;
  margin-top: 0.8rem;
}

.intro-heading {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-family: 'Instrument Serif', serif;
}

.sidebar-item {
  /* removed relative positioning */
}

.section-content {
  position: static;
  /* top removed */
  /* left removed */
  width: 100%;
  /* bg removed */
  /* z-index removed */
}

.founder-info {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}

.founder-text {
  flex: 1;
}

@media (max-width: 768px) {
  .founder-info {
    flex-direction: column;
  }
}

</style>
