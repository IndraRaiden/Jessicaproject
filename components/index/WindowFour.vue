<template>
  <div class="window-container" ref="windowContainer">    
    <!-- Wellness section with image -->
    <div class="wellness-section" @click="navigateToWellnessPage">
      <div class="wellness-image">
        <div class="title-container">
          <div class="wellness-title">WELLNESS</div>
          <div class="coming-soon">( Coming Soon )</div>
        </div>
        <div class="video-container">
          <div class="video-foreground">
            <iframe 
              src="https://www.youtube.com/embed/grp4C6if5qA?autoplay=1&mute=1&loop=1&playlist=grp4C6if5qA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1" 
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

const navigateToWellnessPage = () => {
  router.push('/wellness');
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

/* Wellness section */
.wellness-section {
  width: 100%;
  height: 90vh; /* Same height as WindowThree */
  position: relative;
  cursor: pointer;
  background-color: transparent;
  padding: 0; /* Remove padding for full-screen effect */
}

.wellness-image {
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
.wellness-image {
  position: relative;
  overflow: hidden;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.wellness-section:hover .wellness-image {
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

.title-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1; /* Ensure title container appears above the video */
}

.wellness-title {
  font-family: 'Abril Fatface', serif;
  font-size: 4.5rem;
  font-weight: 400;
  color: white;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0.9;
  position: relative;
  z-index: 2;
}

.wellness-section:hover .wellness-title {
  letter-spacing: 0.08em;
  transform: translateY(-5px);
}

.coming-soon {
  font-family: 'Space Mono', monospace;
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  margin-top: 0.5rem;
}

.wellness-section:hover .coming-soon {
  opacity: 0.9;
  transform: translateY(0);
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .wellness-section {
    height: 80vh; /* Same as WindowThree mobile */
  }
  
  .wellness-image {
    width: 100%;
    height: 100%;
    padding: 2rem;
  }
  
  .wellness-title {
    font-size: 3rem;
  }
  
  .coming-soon {
    font-size: 1rem;
    margin-top: 0.3rem;
  }
  
  .video-foreground iframe {
    width: 120vw; /* Even wider on mobile to ensure coverage */
    height: 67.5vw; /* Maintain 16:9 aspect ratio (56.25vw * 1.2) */
    min-height: 120%; /* Even taller on mobile to ensure coverage */
    min-width: 213.32vh; /* Maintain 16:9 aspect ratio (177.77vh * 1.2) */
  }
}
</style>
