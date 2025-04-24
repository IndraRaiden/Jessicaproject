<template>
  <div class="background-container" :class="{ 'visible': isVisible }">
    <div class="background-image"></div>
    <div class="overlay"></div>
    <div class="animated-border top" :class="{ 'animate': isVisible }"></div>
    <div class="animated-border right" :class="{ 'animate': isVisible }"></div>
    <div class="animated-border bottom" :class="{ 'animate': isVisible }"></div>
    <div class="animated-border left" :class="{ 'animate': isVisible }"></div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});

const isVisible = ref(false);

// Watch for changes to the visible prop
watch(() => props.visible, (newValue) => {
  if (newValue) {
    // Small delay to sync with parent animations
    setTimeout(() => {
      isVisible.value = true;
    }, 100);
  }
});

onMounted(() => {
  // If no parent is controlling visibility, auto-show after a delay
  if (!props.visible) {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    
    observer.observe(document.querySelector('.background-container'));
  }
});
</script>

<style scoped>
.background-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: visible; /* Changed from hidden to visible */
  margin: 0;
  padding: 0;
  min-height: 600px;
}

.background-container.visible .background-image {
  transform: scale(1);
  filter: blur(3px) brightness(0.8) grayscale(0.4);
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  filter: blur(3px) brightness(0.5) grayscale(0.6);
  transform: scale(1.1);
  transition: transform 1.5s ease-out, filter 1.5s ease-out;
  z-index: 1;
  margin: 0;
  padding: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.5);
  z-index: 2;
  margin: 0;
  padding: 0;
}

.animated-border {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 3;
  opacity: 0;
  transition: opacity 0.5s ease;
  will-change: box-shadow, width, height;
}

.animated-border.top {
  top: 20px;
  left: 20px;
  width: 0;
  height: 3px;
  animation: none;
}

.animated-border.right {
  top: 20px;
  right: 20px;
  width: 3px;
  height: 0;
  animation: none;
}

.animated-border.bottom {
  bottom: 20px;
  right: 20px;
  width: 0;
  height: 3px;
  animation: none;
}

.animated-border.left {
  bottom: 20px;
  left: 20px;
  width: 3px;
  height: 0;
  animation: none;
}

.animated-border.animate {
  opacity: 1;
}

.animated-border.top.animate {
  animation: expandWidth 3s cubic-bezier(0.16, 1, 0.3, 1) forwards, glowPulse 3s ease-in-out infinite 3s;
}

.animated-border.right.animate {
  animation: expandHeight 3s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.75s, glowPulse 3s ease-in-out infinite 3.75s;
}

.animated-border.bottom.animate {
  animation: expandWidth 3s cubic-bezier(0.16, 1, 0.3, 1) forwards 1.5s, glowPulse 3s ease-in-out infinite 4.5s;
}

.animated-border.left.animate {
  animation: expandHeight 3s cubic-bezier(0.16, 1, 0.3, 1) forwards 2.25s, glowPulse 3s ease-in-out infinite 5.25s;
}

@keyframes expandWidth {
  0% {
    width: 0;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  100% {
    width: calc(100% - 40px);
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
}

@keyframes expandHeight {
  0% {
    height: 0;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  100% {
    height: calc(100% - 40px);
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
}

@keyframes glowPulse {
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
}

/* Slot content will be positioned above everything */
:slotted(*) {
  position: relative;
  z-index: 10; /* Increased z-index to ensure visibility */
}
</style>
