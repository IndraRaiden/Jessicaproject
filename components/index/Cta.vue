<template>
  <section class="cta-section" ref="ctaSection">
    <CtaBackground :visible="isVisible">
      <div class="cta-container">
        <div class="cta-content" :class="{ 'visible': isVisible }">
          <h2 class="cta-title" :class="{ 'visible': isVisible }">
            ABOUT OARA
          </h2>
          <div class="cta-divider" :class="{ 'visible': isVisible }"></div>
          <p class="cta-text" :class="{ 'visible': isVisible }">
            Discover our story, our passion for excellence, and the unique experiences we create for our guests.
          </p>
          <div class="cta-buttons" :class="{ 'visible': isVisible }">
            <NuxtLink to="/about" class="btn-primary">OUR STORY</NuxtLink>
          </div>
        </div>
      </div>
    </CtaBackground>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import CtaBackground from '~/components/backgrounds/CtaBackground.vue';

const ctaSection = ref(null);
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
  if (ctaSection.value) {
    observer.observe(ctaSection.value);
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
.cta-section {
  padding: 0;
  position: relative;
  overflow: visible; /* Changed from hidden to visible */
  margin: 0;
  height: auto;
  background-color: #1e1e1e;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  z-index: 2;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.cta-title {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: 0.1em;
  color: white;
  line-height: 1.2;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 1s ease;
  z-index: 10; /* Added z-index to ensure visibility */
}

.cta-title.visible {
  opacity: 1;
  transform: translateY(0);
}

.cta-divider {
  width: 60px;
  height: 2px;
  background-color: white;
  margin: 0 auto 3rem;
  opacity: 0;
  transform: scaleX(0);
  transition: opacity 0.8s ease 0.3s, transform 1s ease 0.3s;
  z-index: 10; /* Added z-index to ensure visibility */
}

.cta-divider.visible {
  opacity: 1;
  transform: scaleX(1);
}

.cta-text {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 4rem;
  color: #e0e0e0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease 0.6s, transform 1s ease 0.6s;
  z-index: 10; /* Added z-index to ensure visibility */
}

.cta-text.visible {
  opacity: 1;
  transform: translateY(0);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease 0.9s, transform 1s ease 0.9s;
  z-index: 10; /* Added z-index to ensure visibility */
  position: relative; /* Added position to work with z-index */
}

.cta-buttons.visible {
  opacity: 1;
  transform: translateY(0);
}

.btn-primary {
  background: white;
  border: 1px solid white;
  color: #111;
  padding: 1rem 3rem;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background: transparent;
  color: white;
}

.btn-secondary {
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: 1rem 3rem;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: white;
  color: #111;
}

@media (max-width: 768px) {
  .cta-section {
    padding: 0;
    margin: 0;
  }
  
  .cta-container {
    padding: 4rem 1.5rem;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
  }
}
</style>
