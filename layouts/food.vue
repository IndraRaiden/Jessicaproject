<template>
  <div class="layout-container">
    <NavbarV2 />
    <slot />
  </div>
</template>

<script setup>
import NavbarV2 from '~/components/NavbarV2.vue';
// Food layout now with NavbarV2, used for food and beverage pages
</script>

<style scoped>
.layout-container {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}
</style>
