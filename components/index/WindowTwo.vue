<template>
  <div class="window-container" ref="windowContainer">
    <!-- Real estate intro section -->
    <div class="real-estate-intro">
      <div class="left-spacer"></div>
      <div class="intro-content">
        <h2>We craft immersive real estate destinations</h2>
        <h3>that maximize asset value and make people feel alive.</h3>
        <div class="find-out-more">
          <a @click="navigateToAboutPage" class="about-link">Find out more.</a>
        </div>
      </div>
      <div class="right-spacer"></div>
    </div>
    
    <!-- Hotels section with image -->
    <div class="hotels-section" @click="navigateToHotelsPage">
      <div class="hotels-image">
        <div class="hotels-title">HOTELS</div>
        <div class="video-container">
          <div class="video-foreground">
            <iframe 
              src="https://www.youtube.com/embed/1ksLFMF-MGw?autoplay=1&mute=1&loop=1&playlist=1ksLFMF-MGw&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const windowContainer = ref(null);
const isVisible = ref(false);
let observer = null;

const navigateToHotelsPage = () => {
  router.push('/hotels');
};

const navigateToAboutPage = () => {
  // Use window.location for a full page navigation that resets scroll position
  window.location.href = '/about';
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
  width: 70%;
}

.intro-content {
  max-width: 800px;
  padding: 0;
}

.intro-content h2 {
  font-family: 'Space Mono', monospace;
  font-size: 2.2rem;
  font-weight: 400;
  color: #1d2a29;
  margin-bottom: 0.8rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.intro-content h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.7rem;
  font-weight: 400;
  color: #1d2a29;
  margin-bottom: 2.5rem;
  line-height: 1.3;
}

.find-out-more a {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #1d2a29;
  text-decoration: underline;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.find-out-more a:hover {
  opacity: 0.7;
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

.video-foreground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.video-foreground iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 110vw; /* Slightly wider to avoid dark edges */
  height: 61.875vw; /* Maintain 16:9 aspect ratio (56.25vw * 1.1) */
  min-height: 110%; /* Slightly taller to avoid dark edges */
  min-width: 195.55vh; /* Maintain 16:9 aspect ratio (177.77vh * 1.1) */
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hotels-title {
  font-family: 'Abril Fatface', serif;
  font-size: 4.5rem;
  font-weight: 400;
  color: white;
  letter-spacing: 0.02em;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0.9;
  transform: translateY(5px);
  position: relative;
  z-index: 1; /* Ensure title appears above the video */
}

.hotels-section:hover .hotels-title {
  transform: translateY(-5px);
  letter-spacing: 0.08em;
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
  
  .intro-content h2 {
    font-size: 1.8rem;
  }
  
  .intro-content h3 {
    font-size: 1.3rem;
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
    font-size: 3rem;
  }
  
  .video-foreground iframe {
    width: 120vw; /* Even wider on mobile to ensure coverage */
    height: 67.5vw; /* Maintain 16:9 aspect ratio (56.25vw * 1.2) */
    min-height: 120%; /* Even taller on mobile to ensure coverage */
    min-width: 213.32vh; /* Maintain 16:9 aspect ratio (177.77vh * 1.2) */
  }
}
</style>
