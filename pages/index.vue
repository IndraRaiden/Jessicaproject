<template>
  <div class="home-page">
    <!-- Hero Component from index folder -->
    <Hero @toggle-sidebar="toggleSidebar" />
    
    <!-- Sidebar Component from index folder -->
    <Sidebar :isOpen="sidebarOpen" @close="closeSidebar" />

    <!-- WindowTwo Component -->
    <WindowTwo />

    <!-- CTA Component -->
    <Cta />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import Hero from '~/components/index/Hero.vue';
import Sidebar from '~/components/index/Sidebar.vue';
import WindowTwo from '~/components/index/WindowTwo.vue';
import Cta from '~/components/index/Cta.vue';

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
}

.home-page {
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
}
</style>
