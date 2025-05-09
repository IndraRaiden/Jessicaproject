<template>
  <div class="window-container" ref="windowContainer">    
    <!-- Food section with image -->
    <div class="food-section" @click="navigateToFoodPage">
      <div class="food-image">
        <div class="food-title">FOOD</div>
        <div class="video-container">
          <YoutubeEmbed 
            videoId="e7IfmJAdhDk" 
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

/* Video foreground styling is now handled by the YoutubeEmbed component */

.food-title {
  font-family: 'Vietnam Pro', sans-serif;
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
  
  /* Mobile video styling is now handled by the YoutubeEmbed component */
}
</style>
