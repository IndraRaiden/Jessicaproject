<template>
  <div>
    <nav class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="navbar-container">
        <NuxtLink to="/" class="navbar-logo">
          <img src="/index/OARA-MARCA-SITE.svg" alt="OARA Logo" class="logo-img" />
        </NuxtLink>
        <div class="navbar-links">
          <NuxtLink to="/hotels" class="navbar-link">HOTELS</NuxtLink>
          <div class="spacer"></div>
          <NuxtLink to="/foodnbeverage" class="navbar-link">FOOD</NuxtLink>
          <div class="spacer"></div>
          <NuxtLink to="/wellness" class="navbar-link">WELLNESS</NuxtLink>
        </div>
        <div class="plus-icon" @click="toggleSidebar">+</div>
      </div>
    </nav>
    <SidebarIndex :isOpen="sidebarOpen" @close="closeSidebar" />
  </div>
</template>

<script>
// No need to import Plus icon anymore
import SidebarIndex from './index/Sidebar.vue';

export default {
  components: {
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
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  transition: all 0.4s ease;
  position: relative;
}

.navbar-logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.4s ease;
  position: absolute;
  left: 2rem;
}

.logo-img {
  height: 75px;
  width: auto;
  filter: brightness(0);
  transition: height 0.4s ease;
}

.navbar.scrolled .logo-img {
  height: 55px;
}

.navbar-links {
  display: flex;
  gap: 0;
  transition: gap 0.4s ease;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.navbar.scrolled .navbar-links {
  gap: 0;
}

.navbar-link {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  transition: font-size 0.4s ease;
  padding: 0 2rem;
}

.navbar.scrolled .navbar-link {
  font-size: 1.1rem;
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

.plus-icon {
  font-size: 3rem;
  color: #1d2a29;
  font-weight: 400;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 2rem;
  top: 35%;
  transform: translateY(-50%);
}

.plus-icon:hover {
  transform: translateY(-50%) rotate(90deg);
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
    gap: 0;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    left: 0;
    transform: none;
  }
}

.spacer {
  width: 6rem;
}

.navbar.scrolled .spacer {
  width: 4rem;
}

@media (max-width: 768px) {
  .spacer {
    width: 2rem;
  }
}
</style>
