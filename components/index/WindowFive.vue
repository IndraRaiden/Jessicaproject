<template>
  <div class="window-container" ref="windowContainer">
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const windowContainer = ref(null);
const isVisible = ref(false);
let observer = null;

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
}












</style>
