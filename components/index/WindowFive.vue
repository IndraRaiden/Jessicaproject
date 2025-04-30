<template>
  <div class="window-container" ref="windowContainer">
    <div class="real-estate-message">
      <div class="message-content">
        <h2>We craft immersive real estate destinations</h2>
        <h3>that maximize asset value and make people feel alive</h3>
        <div class="find-out-more">
          <a @click="navigateToAboutPage" class="about-link">Find out more.</a>
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

.real-estate-message {
  width: 100%;
  min-height: 40vh;
  background-color: #f2eee3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5% 10%;
}

.message-content {
  max-width: 800px;
}

.message-content h2 {
  font-family: 'Space Mono', monospace;
  font-size: 2.2rem;
  font-weight: 400;
  color: #1d2a29;
  margin-bottom: 0.8rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.message-content h3 {
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

/* Media query for mobile devices */
@media (max-width: 768px) {
  .real-estate-message {
    padding: 10% 8%;
  }
  
  .message-content h2 {
    font-size: 1.8rem;
  }
  
  .message-content h3 {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
}
</style>
