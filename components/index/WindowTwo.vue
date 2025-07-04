<template>
  <div class="window-container" ref="windowContainer">
    <!-- Real estate intro section -->
    <div class="real-estate-intro">
      <div class="left-spacer"></div>
      <div class="intro-content">
        <div class="quote-contact-wrapper">
          <p class="pure-instrument-serif" v-html="t('introText').replace('\n', '<br>')">
          </p>
        </div>
        <div class="find-out-more" style="margin-top: 20px;">
          <a @click="navigateToAboutPage" class="about-link" style="letter-spacing: 220%;">{{ t('findOutMore') }}</a>
        </div>
      </div>
      <div class="right-spacer"></div>
    </div>
    
    <!-- Hotels section with image -->
    <div class="hotels-section" @click="navigateToHotelsPage">
      <div class="hotels-image">
        <div class="hotels-title">{{ t('hotels') }}</div>
        <div class="video-container">
          <YoutubeEmbed 
            videoId="1ksLFMF-MGw" 
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

const navigateToHotelsPage = () => {
  router.push('/hotels');
};

const navigateToAboutPage = () => {
  // Use window.location for a full page navigation that resets scroll position
  window.location.href = '/about';
};

const navigateToContactPage = () => {
  // Use window.location for a full page navigation that resets scroll position
  window.location.href = '/contact';
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
  display: flex;
  flex-direction: column;
}

/* Real estate intro section */
.real-estate-intro {
  width: 100%;
  min-height: 40vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5% 0;
}

.left-spacer {
  width: 3%;
}

.right-spacer {
  width: 10%; /* Increased slightly to pull content a bit from the far right */
}

.intro-content {
  /* max-width: 800px; */ /* Removed to allow content to fill space */
  padding: 0;
  flex-grow: 1; /* Allow this container to grow */
}

.pure-instrument-serif {
  font-family: 'Instrument Serif', serif !important;
  font-size: 2.7rem;
  font-weight: 400;
  color: #1d2a29;
  margin-bottom: 2.5rem;
  line-height: 1.3;
  letter-spacing: 0;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.intro-content .main-text {
  max-width: 800px; /* Constrain only the paragraph width */
  margin-bottom: 0; /* Remains 0 as 'Find out more' is in its own block below */
  /* margin-right: 40px; */ /* Removed, spacing handled by contact link's margin-left */
}

.quote-contact-wrapper {
  display: flex;
  align-items: center;
}

@media (min-width: 1024px) {
  .quote-contact-wrapper {
    justify-content: space-between;
  }
}

.find-out-more a {
  font-family: 'Instrument Serif', serif !important;
  font-size: 1.8rem;
  font-weight: 100; /* Thinnest possible weight */
  color: #1d2a29;
  text-decoration: none; /* Remove default underline */
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  cursor: pointer;
  letter-spacing: 20px; /* Spacing 20 as shown in the image */
  text-transform: none; /* CAPSLOCK: NÃO as shown in the image */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: none; /* Remove any text shadow that might make text appear bolder */
  font-variation-settings: 'wght' 100; /* For variable fonts, ensure lightest weight */
  font-stretch: normal;
  font-style: normal;
}

/* Animated underline */
.find-out-more a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 1px;
  background-color: #1d2a29;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.find-out-more a:hover::after {
  transform: scaleX(1);
}

/* Hotels section */
.hotels-section {
  width: 100%;
  height: 90vh; /* Increased height */
  position: relative;
  cursor: pointer;
  background-color: transparent;
  padding: 0; /* Remove padding for full-screen effect */
}

.hotels-image {
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



/* Hover effect without grid lines */
.hotels-image {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hotels-section:hover .hotels-image {
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

.hotels-title {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 6rem;
  font-weight: 600; /* Semi-bold */
  color: white;
  letter-spacing: 220%; /* Spacing 220 */
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0.9;
  transform: translateY(5px);
  position: relative;
  z-index: 1; /* Ensure title appears above the video */
  text-transform: uppercase; /* CAPSLOCK: SIM - matching WindowThree */
  padding-bottom: 4px;
}

/* Underline effect */
.hotels-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.hotels-section:hover .hotels-title::after {
  transform: scaleX(1);
}

.hotels-section:hover .hotels-title {
  transform: translateY(-5px);
  /* Keep the letter-spacing consistent with specs */
  letter-spacing: 220%;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .real-estate-intro {
    padding: 10% 0;
  }
  
  .left-spacer {
    width: 3%;
  }
  
  .right-spacer {
    width: 50%;
  }
  
  .intro-content .main-text {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .hotels-section {
    height: 80vh; /* Adjusted for mobile but still larger than before */
  }
  
  .hotels-image {
    width: 100%;
    height: 100%;
    padding: 2rem;
  }
  
  .hotels-title {
    font-size: 4rem;
  }
  
  /* Mobile video styling is now handled by the YoutubeEmbed component */
}

/* Clean and minimal styling */

/* Override font for Find out more link */
.find-out-more a {
  letter-spacing: 220%;
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro', sans-serif !important;
  font-weight: 700 !important;
}

</style>
