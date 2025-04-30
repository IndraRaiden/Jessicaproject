<template>
  <div class="window-container" ref="windowContainer">    
    <!-- Food section with image -->
    <div class="food-section" @click="navigateToFoodPage">
      <div class="food-image">
        <div class="food-title">FOOD</div>
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
  background-color: #f2eee3;
  padding: 1.5% 0;
}

.food-image {
  width: 98%; /* Increased width */
  height: 98%; /* Increased height */
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center; /* Changed from flex-end to center for vertical alignment */
  justify-content: flex-start;
  padding: 3rem;
  border: 1px solid rgba(29, 42, 41, 0.2);
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80');
  background-size: cover;
  background-position: center;
}

/* Hover effect without grid lines */
.food-image {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.food-section:hover .food-image {
  /* Subtle brightness change on hover */
  filter: brightness(1.05);
}

.food-title {
  font-family: 'Space Mono', monospace;
  font-size: 4.5rem;
  font-weight: 400;
  color: white;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0.9;
  transform: translateY(5px);
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
    width: 98%;
    height: 98%;
    padding: 2rem;
  }
  
  .food-title {
    font-size: 3rem;
  }
}
</style>
