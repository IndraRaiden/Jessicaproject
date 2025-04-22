<template>
  <div class="hero-container">
    <div class="video-placeholder">
      <!-- Video placeholder with overlay text -->
      <div class="overlay-text">HORIZON</div>
      <div class="plus-icon" @click="toggleSidebar">+</div>
      <Sidebar :isOpen="sidebarOpen" @close="closeSidebar" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const closeSidebar = () => {
  sidebarOpen.value = false;
};
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  background-color: #8c9aa6; /* Muted gray-blue similar to the image */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-image: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80');
  background-size: cover;
  background-position: center;
}

.overlay-text {
  font-family: 'Space Mono', monospace;
  font-size: 5rem;
  font-weight: 400;
  color: white;
  position: absolute;
  top: 2%;
  left: 2%;
  letter-spacing: 0.1em;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;
}

.overlay-text:hover {
  letter-spacing: 0.15em;
  transform: translateX(10px);
  opacity: 0.9;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}

.plus-icon {
  position: absolute;
  top: 5%;
  right: 2%;
  font-size: 2rem;
  color: white;
  font-weight: 300;
  cursor: pointer;
  z-index: 100;
  transition: transform 0.3s ease;
}

.plus-icon:hover {
  transform: rotate(90deg);
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .overlay-text {
    font-size: 3rem;
  }
}
</style>
