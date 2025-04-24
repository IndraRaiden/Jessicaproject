<template>
  <div class="fnb-background">
    <slot></slot>
  </div>
</template>

<script setup>
// Component for Food and Beverage background with nude color
</script>

<style scoped>
.fnb-background {
  background-color: #F9F3EF; /* Lighter, more white-toned nude color */
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
