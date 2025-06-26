<template>
  <div class="window-container" ref="windowContainer">    
    <!-- Santuaries and Cultural section with image -->
    <div class="santuaries-section" @click="navigateToSantuariesPage">
      <div class="santuaries-image">
        <div class="title-container">
          <div class="santuaries-title">{{ t('sanctuaries') }}</div>
          <div class="coming-soon">{{ t('comingSoon') }}</div>
        </div>
        <div class="video-container">
          <YoutubeEmbed 
            videoId="grp4C6if5qA" 
            :autoplay="true" 
            :mute="true" 
            :loop="true" 
            :controls="false" 
            :showInfo="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTranslation } from '~/composables/useTranslation';

const router = useRouter();
const windowContainer = ref(null);
const isVisible = ref(false);
let observer = null;

// Use the global translation system
const { currentLanguage, translations, t } = useTranslation();

const navigateToSantuariesPage = () => {
  router.push('/santuaries-and-cultural');
};

onMounted(() => {
  // Reset visibility state when component is mounted
  isVisible.value = false;
  
  // Create an Intersection Observer to detect when the section is in view
  observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      isVisible.value = true;
    }
  }, {
    threshold: 0.2 // Trigger when 20% of the element is visible
  });

  // Start observing the section
  if (windowContainer.value) {
    observer.observe(windowContainer.value);
  }
});

onUnmounted(() => {
  // Clean up the observer when the component is unmounted
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.window-container {
  width: 100%;
  position: relative;
  overflow: visible;
  margin: 0;
  padding: 0;
}

/* Santuaries and Cultural section */
.santuaries-section {
  width: 100%;
  height: 90vh; /* Same height as WindowThree */
  position: relative;
  cursor: pointer;
  background-color: transparent;
  padding: 0; /* Remove padding for full-screen effect */
}

.santuaries-image {
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center; /* Changed from flex-end to center for vertical alignment */
  justify-content: flex-start;
  padding: 3rem;
  border: none; /* Remove border for full-screen effect */
  overflow: hidden;
  position: relative;
}

/* Hover effect without corner brackets */
.santuaries-image {
  position: relative;
  overflow: hidden;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.santuaries-section:hover .santuaries-image {
  /* Subtle brightness change on hover */
  filter: brightness(1.05);
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  background: #000;
}

/* Video foreground styling is now handled by the YoutubeEmbed component */

.title-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1; /* Ensure title container appears above the video */
}

.santuaries-title {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 4.5rem;
  font-weight: 600; /* Semi-bold */
  color: white;
  letter-spacing: 220%; /* Spacing 220 */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0.9;
  position: relative;
  z-index: 2;
  text-transform: uppercase; /* CAPSLOCK: SIM */
}

.santuaries-section:hover .santuaries-title {
  /* Keep the letter-spacing consistent with specs */
  letter-spacing: 220%;
  transform: translateY(-5px);
}

.coming-soon {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.85rem;
  font-weight: 600; /* Semi-bold */
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 220%; /* Spacing 220 */
  margin-top: 1rem;
  position: relative;
  display: inline-block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 2px;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(10px);
  text-transform: uppercase; /* CAPSLOCK: SIM */
}



.santuaries-section:hover .coming-soon {
  opacity: 1;
  transform: translateY(0);
  color: rgba(255, 255, 255, 1);
  border-bottom-color: rgba(255, 255, 255, 0.7);
  /* Keep the letter-spacing consistent with specs */
  letter-spacing: 220%;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .santuaries-section {
    height: 80vh; /* Same as WindowThree mobile */
  }
  
  .santuaries-image {
    width: 100%;
    height: 100%;
    padding: 2rem;
  }
  
  .santuaries-title {
    font-size: 3rem;
  }
  
  .coming-soon {
    font-size: 0.75rem;
    margin-top: 0.8rem;
  }
  
  /* Mobile video styling is now handled by the YoutubeEmbed component */
}
</style>
