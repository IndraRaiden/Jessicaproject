<template>
  <div class="layout-container">
    <slot />
    <Footer />
  </div>
</template>

<script setup>
// Default layout with Footer component included
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
