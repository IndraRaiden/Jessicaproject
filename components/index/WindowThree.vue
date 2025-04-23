<template>
  <div class="window-container" ref="windowContainer">
    <div class="video-placeholder">
      <!-- Video placeholder with overlay text -->
      <div class="overlay-text" :class="{ 'visible': isVisible }">HOTELS</div>
      <div class="scroll-indicator" :class="{ 'visible': isVisible }">EXPLORE</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const windowContainer = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  // Create an Intersection Observer to detect when the section is in view
  observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      isVisible.value = true;
      // Once it's visible, we don't need to observe anymore
      observer.disconnect();
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
  overflow: hidden;
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
  background-image: url('https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
}

.overlay-text {
  font-family: 'Space Mono', monospace;
  font-size: 3.5rem;
  font-weight: 400;
  color: white;
  position: absolute;
  top: 10%;
  left: 5%;
  letter-spacing: 0.1em;
  transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;
  opacity: 0;
  transform: translateX(-30px);
}

.overlay-text.visible {
  opacity: 1;
  transform: translateX(0);
}

.overlay-text:hover {
  letter-spacing: 0.15em;
  transform: translateX(10px);
  opacity: 0.9;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}

.scroll-indicator {
  position: absolute;
  bottom: 5%;
  right: 2%;
  font-size: 1rem;
  font-family: 'Roboto Condensed', sans-serif;
  color: white;
  letter-spacing: 0.2em;
  cursor: pointer;
  z-index: 100;
  transition: all 1.8s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
  transform: translateX(20px);
}

.scroll-indicator.visible {
  opacity: 1;
  transform: translateX(0);
}

.scroll-indicator:hover {
  transform: translateY(-10px);
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .overlay-text {
    font-size: 3rem;
    top: 15%;
  }
}
</style>
