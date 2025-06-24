<template>
  <div class="layout-container">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
// Food layout now with Navbar and Footer, used for food and beverage pages
</script>

<style scoped>
.layout-container {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
