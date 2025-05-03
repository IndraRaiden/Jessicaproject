<template>
  <div class="hero-container">
    <!-- Logo header with light background -->
    <div class="logo-header">
      <div class="overlay-logo">
        <svg id="oara-logo" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1227.7 534.5">
          <path class="logo-o" d="M270.6,131.8c-74.9,0-129.3,57.1-129.3,135.7s54.4,135.3,129.3,135.3,129.3-56.9,129.3-135.3-54.4-135.7-129.3-135.7ZM242.4,149.7c17.6,0,26.3,26,33.1,39.6,8.4,16.8,13.8,34.9,53.8,63,30.4,21.4,33.7,37.7,33.7,59.8s-36.7,76.8-91.6,76.8-101.5-67.9-101.5-123.3,33.2-115.9,72.4-115.9Z"/>
          <path class="logo-text" d="M834.1,397.3l-106-131.3c43.6-6.3,70.6-27.6,70.6-63s-34.8-67.4-90.9-67.4h-85v1.1l.5.6c9.6,12.6,11.5,32.6,11.5,57.9v144.3c0,29.4-2.9,46.2-11.5,57.9l-.4.6v1.1h54.3v-1.1l-.4-.6c-8.3-11.8-11.2-28.6-11.2-57.9v-71.4s25.1,0,25.1,0l107.5,130.2.7.8h32.6s2.7,0,2.7,0M766,202.4c0,28.9-23,50.6-63.1,50.6h-37.3v-102.7h37.3c52.1,0,63.1,31.8,63.1,52Z"/>
          <path class="logo-text" d="M1058.8,342.3l-2-4.8-81.3-200.6-.6-1.4h-25.3l-.5,1.4-79.4,202.1-1.9,4.9c-8.5,21.3-15.2,40.6-27,52.8l-.6.6v1.7h53.1v-1.7l-.3-.5c-6-11.4-4.2-32.8,6.1-59.6l8.2-21.7c.5-1.4,1.9-2.3,3.4-2.3h82.7c11.7,0,22.3,7.1,26.7,18l1.8,4.5c10.4,26.4,12.6,50.5,7.1,61.8l-.2.5v1.1h57.6v-1.1l-.6-.6c-10.9-12.3-17.4-31.1-27.1-55ZM959.8,182.4l46.6,115.6c.2.6-.2,1.2-.8,1.2h-57.8c-6.5,0-17-2.1-20.7-11.3-3.1-7.6-3.4-12.3,7.8-42.1l24.8-63.4Z"/>
          <path class="logo-text" d="M589.1,342.3l-2-4.8-81.3-200.6-.6-1.4h-25.3l-.5,1.4-79.4,202.1-1.9,4.9c-8.5,21.3-15.2,40.6-27,52.8l-.6.6v1.7h53.1v-1.7l-.3-.5c-6-11.4-4.2-32.8,6.1-59.6l8.2-21.7c.5-1.4,1.9-2.3,3.4-2.3h82.7c11.7,0,22.3,7.1,26.7,18l1.8,4.5c10.4,26.4,12.6,50.5,7.1,61.8l-.2.5v1.1h57.6v-1.1l-.6-.6c-10.9-12.3-17.4-31.1-27.1-55ZM490.1,182.4l46.6,115.6c.2.6-.2,1.2-.8,1.2h-57.8c-6.5,0-17-2.1-20.7-11.3-3.1-7.6-3.4-12.3,7.8-42.1l24.8-63.4Z"/>
        </svg>
      </div>
      <div class="plus-icon" @click="toggleSidebar">+</div>
    </div>
    
    <!-- Swimming people image -->
    <div class="swimming-image">
      <img src="/swimming-dark.jpg" alt="People swimming in dark water" class="swimming-img" />
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
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
}

.logo-header {
  width: 100%;
  height: 120px;
  background-color: #F2EEE3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
}

.swimming-image {
  width: 100%;
  height: calc(100vh - 120px);
  position: relative;
  overflow: hidden;
}

.swimming-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.overlay-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

#oara-logo {
  width: 280px;
  height: auto;
}

.logo-o, .logo-text {
  fill: #1d2a29;
}

.logo-o {
  transition: transform 0.3s ease;
  transform-origin: center;
  transform-box: fill-box;
}

.overlay-logo:hover .logo-o {
  transform: scale(1.2);
}

.plus-icon {
  font-size: 4.5rem;
  color: #1d2a29;
  font-weight: 400;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
}

.plus-icon:hover {
  transform: translateY(-50%) rotate(90deg);
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .header {
    padding: 20px;
  }
  
  .overlay-logo h1 {
    font-size: 2.5rem;
  }
  
  .plus-icon {
    font-size: 4.5rem; /* Maintain the same size as desktop */
    width: 60px;
    height: 60px;
    right: 20px; /* Adjust position for mobile */
    min-width: 60px; /* Ensure minimum width */
    min-height: 60px; /* Ensure minimum height */
  }
}
</style>
