<template>
  <div class="home-page">
    <!-- Hero Component from index folder -->
    <Hero @toggle-sidebar="toggleSidebar" />
    
    <!-- Sidebar Component from index folder -->
    <Sidebar :isOpen="sidebarOpen" @close="closeSidebar" />


  </div>
</template>

<script setup>
import { ref } from 'vue';
import Hero from '~/components/index/Hero.vue';
import Sidebar from '~/components/index/Sidebar.vue';

const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const closeSidebar = () => {
  sidebarOpen.value = false;
};
</script>

<style scoped>
.home-page {
  width: 100%;
}
</style>
