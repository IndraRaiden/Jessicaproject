<template>
  <div class="home-page">
    <!-- Hero Component from index folder -->
    <Hero @toggle-sidebar="toggleSidebar" />
    
    <!-- Sidebar Component from index folder -->
    <Sidebar :isOpen="sidebarOpen" @close="closeSidebar" />

    <!-- WindowTwo Component -->
    <WindowTwo />
    
    <!-- WindowThree Component -->
    <WindowThree />

    <!-- WindowFour Component -->
    <WindowFour />
    
    <!-- WindowFive Component -->
    <WindowFive />

    <!-- CTA component removed from main index -->

    <!-- Footer removed from main index -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Hero from '~/components/index/Hero.vue';
import Sidebar from '~/components/index/Sidebar.vue';
import WindowTwo from '~/components/index/WindowTwo.vue';
import WindowThree from '~/components/index/WindowThree.vue';
import WindowFour from '~/components/index/WindowFour.vue';
import WindowFive from '~/components/index/WindowFive.vue';
// CTA import removed from main index
// Footer import removed from main index

const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const closeSidebar = () => {
  sidebarOpen.value = false;
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  background-color: transparent !important;
}

.home-page {
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  background-image: url('/index/background_1920x1080_F2EEE3_horizontal.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
