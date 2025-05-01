<template>
  <div class="layout-container">
    <slot />
  </div>
</template>

<script setup>
// Default layout with no navbar, used for the index page
</script>

<style scoped>
.layout-container {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}
</style>
