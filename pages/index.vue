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
    
    <!-- Capabilities Component -->
    <Capabilities />

    <!-- CTA component removed from main index -->

    <!-- Footer component -->
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/index/Hero.vue';
import Sidebar from '~/components/index/Sidebar.vue';
import WindowTwo from '~/components/index/WindowTwo.vue';
import WindowThree from '~/components/index/WindowThree.vue';
import WindowFour from '~/components/index/WindowFour.vue';
import WindowFive from '~/components/index/WindowFive.vue';
import Capabilities from '~/components/index/Capabilities.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Hero,
    Sidebar,
    WindowTwo,
    WindowThree,
    WindowFour,
    WindowFive,
    Capabilities,
    Footer
  },
  data() {
    return {
      sidebarOpen: false,
      // Track if this is a back navigation
      fromBackNavigation: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    }
  },
  beforeRouteEnter(to, from, next) {
    // This hook is called before the component is created
    // We can detect if we're coming from another page
    next(vm => {
      // If we're coming from another route, this might be a back navigation
      if (from.name) {
        vm.fromBackNavigation = true;
      }
    });
  },
  mounted() {
    // Force scroll to top
    window.scrollTo(0, 0);
    
    // If this is a back navigation, reload the page to ensure proper rendering
    if (this.fromBackNavigation || window.performance && window.performance.navigation.type === 2) {
      console.log('Back navigation detected - reloading page');
      window.location.reload();
    }
  }
}
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
