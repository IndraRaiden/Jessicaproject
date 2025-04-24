<template>
  <div>
    <nav class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="navbar-container">
        <NuxtLink to="/" class="navbar-logo">
          <img src="/index/OARA-MARCA-SITE.svg" alt="OARA Logo" class="logo-img" />
        </NuxtLink>
        <div class="navbar-links">
          <NuxtLink to="/hotels" class="navbar-link">HOTELS</NuxtLink>
          <NuxtLink to="/foodnbeverage" class="navbar-link">FOOD & BEVERAGE</NuxtLink>
          <NuxtLink to="/wellness" class="navbar-link">WELLNESS</NuxtLink>
        </div>
        <button class="sidebar-toggle" @click="toggleSidebar">
          <Menu class="menu-icon" size="24" />
        </button>
      </div>
    </nav>
    <SidebarIndex :isOpen="sidebarOpen" @close="closeSidebar" />
  </div>
</template>

<script>
import { Menu } from 'lucide-vue-next';
import SidebarIndex from './index/Sidebar.vue';

export default {
  components: {
    Menu,
    SidebarIndex
  },
  data() {
    return {
      isScrolled: false,
      sidebarOpen: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // Force initial check
    setTimeout(() => {
      this.handleScroll();
    }, 100);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
      console.log('Scroll position:', window.scrollY, 'Scrolled:', this.isScrolled);
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    closeSidebar() {
      this.sidebarOpen = false;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
  border-bottom: none;
  height: 140px; /* Match the gap height */
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  height: 70px; /* Smaller height when scrolled */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  transition: all 0.4s ease;
}

.navbar-logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.4s ease;
}

.logo-img {
  height: 60px;
  width: auto;
  filter: brightness(0);
  transition: height 0.4s ease;
}

.navbar.scrolled .logo-img {
  height: 40px;
}

.navbar-links {
  display: flex;
  gap: 2rem;
  transition: gap 0.4s ease;
}

.navbar.scrolled .navbar-links {
  gap: 2.5rem;
}

.navbar-link {
  font-family: 'Space Mono', monospace;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  transition: font-size 0.4s ease;
}

.navbar.scrolled .navbar-link {
  font-size: 0.9rem;
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #333;
  transition: width 0.3s ease;
}

.navbar-link:hover::after {
  width: 100%;
}

.sidebar-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-icon {
  color: #333;
  transition: transform 0.3s ease;
}

.sidebar-toggle:hover .menu-icon {
  transform: scale(1.1);
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .navbar {
    height: 160px; /* Match the mobile gap height */
  }
  
  .navbar.scrolled {
    height: 90px;
  }
  
  .navbar-container {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
  }
  
  .navbar.scrolled .navbar-container {
    gap: 0.8rem;
  }
  
  .navbar-links {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
