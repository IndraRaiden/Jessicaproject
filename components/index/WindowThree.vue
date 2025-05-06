<template>
  <div class="window-container" ref="windowContainer">    
    <!-- Food section with image -->
    <div class="food-section" @click="navigateToFoodPage">
      <div class="food-image">
        <div class="food-title">FOOD</div>
        <div class="video-container">
          <div class="video-foreground">
            <iframe 
              src="https://www.youtube.com/embed/e7IfmJAdhDk?autoplay=1&mute=1&loop=1&playlist=e7IfmJAdhDk&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1" 
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

const navigateToFoodPage = () => {
  router.push('/foodnbeverage');
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

/* Food section */
.food-section {
  width: 100%;
  height: 90vh; /* Increased height to match WindowTwo */
  position: relative;
  cursor: pointer;
  background-color: transparent;
  padding: 0; /* Remove padding for full-screen effect */
}

.food-image {
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
.food-image {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.food-section:hover .food-image {
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

.food-title {
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

.food-section:hover .food-title {
  transform: translateY(-5px);
  letter-spacing: 0.08em;
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .food-section {
    height: 80vh; /* Increased height for mobile to match WindowTwo */
  }
  
  .food-image {
    width: 100%;
    height: 100%;
    padding: 2rem;
  }
  
  .food-title {
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
