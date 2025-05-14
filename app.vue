<template>
  <div>
    <NuxtPage :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  mounted() {
    // Add event listener for browser back/forward navigation
    window.addEventListener('popstate', this.handlePopState);
    
    // Force initial scroll to top
    window.scrollTo(0, 0);
  },
  beforeDestroy() {
    // Remove event listener
    window.removeEventListener('popstate', this.handlePopState);
  },
  methods: {
    handlePopState() {
      console.log('Browser navigation detected');
      // Force a full page reload when using browser back/forward buttons
      window.location.reload();
      
      // Ensure we're at the top of the page
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style>
/* Import Be Vietnam Pro font */
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-image: url('/index/background_1920x1080_F2EEE3_horizontal.png');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

html, body {
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 600; /* Semi-bold */
  color: #333;
  background-color: transparent;
  position: relative;
}

.content {
  padding: 4rem 2rem;
}

.section {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  font-weight: 600; /* Semi-bold */
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  color: #333;
  font-family: 'Be Vietnam Pro', sans-serif;
}
</style>
