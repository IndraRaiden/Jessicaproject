<template>
  <div>
    <nav class="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="navbar-container">
        <NuxtLink to="/" class="navbar-logo">OARA</NuxtLink>
        <div class="navbar-links">
          <NuxtLink to="/foodnbeverage" class="navbar-link">FOOD & BEVERAGE</NuxtLink>
          <NuxtLink to="/" class="navbar-link">HOME</NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false
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
  font-family: 'Space Mono', monospace;
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  color: #333;
  text-decoration: none;
  transition: font-size 0.4s ease;
}

.navbar.scrolled .navbar-logo {
  font-size: 1.5rem;
}

.navbar-links {
  display: flex;
  gap: 3rem;
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
}
</style>
