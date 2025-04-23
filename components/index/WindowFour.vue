<template>
  <div class="window-container">
    <div class="video-placeholder">
      <!-- Video placeholder with overlay text -->
      <div class="overlay-text">NORDIC</div>
      <div class="scroll-indicator">DISCOVER</div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
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
  transform: translate(-50%, -50%);
  letter-spacing: 0.1em;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;
}

.overlay-text:hover {
  letter-spacing: 0.15em;
  transform: translate(-50%, -50%) scale(1.05);
  opacity: 0.9;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
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
  transition: transform 0.3s ease;
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
