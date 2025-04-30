<template>
  <div class="window-container" ref="windowContainer">    
    <!-- Wellness section with image -->
    <div class="wellness-section" @click="navigateToWellnessPage">
      <div class="wellness-image">
        <div class="wellness-title">WELLNESS</div>
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
  background-color: #f2eee3;
  padding: 1.5% 0;
}

.wellness-image {
  width: 98%; /* Same width as WindowThree */
  height: 98%; /* Same height as WindowThree */
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center; /* Changed from flex-end to center for vertical alignment */
  justify-content: flex-start;
  padding: 3rem;
  border: 1px solid rgba(29, 42, 41, 0.2);
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80');
  background-size: cover;
  background-position: center;
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

.wellness-title {
  font-family: 'Space Mono', monospace;
  font-size: 4.5rem;
  font-weight: 400;
  color: white;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
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

/* Media query for mobile devices */
@media (max-width: 768px) {
  .wellness-section {
    height: 80vh; /* Same as WindowThree mobile */
  }
  
  .wellness-image {
    width: 98%;
    height: 98%;
    padding: 2rem;
  }
  
  .wellness-title {
    font-size: 3rem;
  }
}
</style>
