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
  padding: 1.5% 0; /* Reduced padding to give more space to image */
}

.hotels-image {
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
  background-image: url('/swimming-dark.jpg');
  background-size: cover;
  background-position: center;
}



/* Hover effect without grid lines */
.hotels-image {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hotels-section:hover .hotels-image {
  /* Subtle brightness change on hover */
  filter: brightness(1.05);
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
    width: 98%;
    height: 98%;
    padding: 2rem;
  }
  
  .hotels-title {
    font-size: 3rem;
  }
}
</style>
