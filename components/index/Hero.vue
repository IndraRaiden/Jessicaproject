<template>
  <div class="hero-container">
    <div class="video-placeholder">
      <!-- Header with logo and menu icon -->
      <div class="header">
        <div class="overlay-logo">
          <img src="/index/OARA-MARCA-SITE.svg" alt="OARA Logo" />
        </div>
        <div class="plus-icon" @click="toggleSidebar">+</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggle-sidebar']);

const toggleSidebar = () => {
  emit('toggle-sidebar');
};
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
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

.header {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index: 100;
}

.overlay-logo {
  width: 300px;
  max-width: 30%;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: default;
}

.overlay-logo img {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3)) brightness(0) invert(1);
}

.overlay-logo:hover {
  transform: translateX(10px);
}

.plus-icon {
  font-size: 5rem;
  color: white;
  font-weight: 300;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-top: -20px;
}

.plus-icon:hover {
  transform: rotate(90deg);
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .header {
    padding: 0 20px;
  }
  
  .overlay-logo {
    width: 200px;
    max-width: 40%;
  }
}
</style>
