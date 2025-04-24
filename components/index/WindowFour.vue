<template>
  <div class="window-container" ref="windowContainer">
    <div class="video-placeholder">
      <!-- Video placeholder with overlay text -->
      <div class="overlay-text" data-hover="COMING SOON" :class="{ 'visible': isVisible }">WELLNESS</div>
      <div class="scroll-indicator" :class="{ 'visible': isVisible }">DISCOVER</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const windowContainer = ref(null);
const isVisible = ref(false);
let observer = null;

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
  height: 100vh; /* Match Hero component height */
  position: relative;
  overflow: visible; /* Changed from hidden to visible */
  margin: 0;
  padding: 0;
  display: block;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  background-color: #2c3e50; /* Darker blue-gray for contrast with Hero */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-image: url('https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80');
  background-size: cover;
  background-position: center;
}

.overlay-text {
  font-family: 'Space Mono', monospace;
  font-size: 3.5rem;
  font-weight: 400;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  letter-spacing: 0.1em;
  transition: opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1), transform 1.8s cubic-bezier(0.16, 1, 0.3, 1); /* Separated properties */
  cursor: default;
  opacity: 0;
  z-index: 10; /* Added z-index to ensure visibility */
}

.overlay-text.visible {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.overlay-text:hover {
  letter-spacing: 0.15em;
  transform: translate(-50%, -50%) scale(1.05) translateY(-5px);
  opacity: 0.9;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.7);
  color: #f8f8f8;
  transition: all 0.4s ease-out;
}

.overlay-text:hover::after {
  content: attr(data-hover);
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  transform: none;
  font-size: 1.5rem;
  margin-top: 1rem;
  white-space: nowrap;
  opacity: 0;
  animation: fadeIn 1.2s forwards 0.3s;
  pointer-events: none;
  z-index: 20;
  text-align: center;
  width: 100%;
  letter-spacing: 0.1em;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

.scroll-indicator {
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 1rem;
  font-family: 'Roboto Condensed', sans-serif;
  color: white;
  letter-spacing: 0.2em;
  cursor: pointer;
  z-index: 100;
  transition: opacity 2s cubic-bezier(0.16, 1, 0.3, 1), transform 2s cubic-bezier(0.16, 1, 0.3, 1); /* Separated properties */
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: auto; /* Ensure clickability */
}

.scroll-indicator.visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-indicator:hover {
  transform: translateX(-10px);
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .overlay-text {
    font-size: 3rem;
  }
}
</style>
