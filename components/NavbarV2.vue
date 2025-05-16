<template>
  <div>
    <div class="navbar-wrapper">
      <nav class="navbar" :class="{ 'scrolled': isScrolled }">
        <div class="navbar-container">
          <!-- Logo container with the same SVG used in Navbar.vue -->
          <div class="logo-container" @click="navigateTo('/')" style="cursor: pointer;">
            <svg id="oara-logo" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1227.7 534.5">
              <path class="logo-path" d="M270.6,131.8c-74.9,0-129.3,57.1-129.3,135.7s54.4,135.3,129.3,135.3,129.3-56.9,129.3-135.3-54.4-135.7-129.3-135.7ZM242.4,149.7c17.6,0,26.3,26,33.1,39.6,8.4,16.8,13.8,34.9,53.8,63,30.4,21.4,33.7,37.7,33.7,59.8s-36.7,76.8-91.6,76.8-101.5-67.9-101.5-123.3,33.2-115.9,72.4-115.9Z"/>
              <path class="logo-path" d="M834.1,397.3l-106-131.3c43.6-6.3,70.6-27.6,70.6-63s-34.8-67.4-90.9-67.4h-85v1.1l.5.6c9.6,12.6,11.5,32.6,11.5,57.9v144.3c0,29.4-2.9,46.2-11.5,57.9l-.4.6v1.1h54.3v-1.1l-.4-.6c-8.3-11.8-11.2-28.6-11.2-57.9v-71.4s25.1,0,25.1,0l107.5,130.2.7.8h32.6s2.7,0,2.7,0M766,202.4c0,28.9-23,50.6-63.1,50.6h-37.3v-102.7h37.3c52.1,0,63.1,31.8,63.1,52Z"/>
              <path class="logo-path" d="M1058.8,342.3l-2-4.8-81.3-200.6-.6-1.4h-25.3l-.5,1.4-79.4,202.1-1.9,4.9c-8.5,21.3-15.2,40.6-27,52.8l-.6.6v1.7h53.1v-1.7l-.3-.5c-6-11.4-4.2-32.8,6.1-59.6l8.2-21.7c.5-1.4,1.9-2.3,3.4-2.3h82.7c11.7,0,22.3,7.1,26.7,18l1.8,4.5c10.4,26.4,12.6,50.5,7.1,61.8l-.2.5v1.1h57.6v-1.1l-.6-.6c-10.9-12.3-17.4-31.1-27.1-55ZM959.8,182.4l46.6,115.6c.2.6-.2,1.2-.8,1.2h-57.8c-6.5,0-17-2.1-20.7-11.3-3.1-7.6-3.4-12.3,7.8-42.1l24.8-63.4Z"/>
              <path class="logo-path" d="M589.1,342.3l-2-4.8-81.3-200.6-.6-1.4h-25.3l-.5,1.4-79.4,202.1-1.9,4.9c-8.5,21.3-15.2,40.6-27,52.8l-.6.6v1.7h53.1v-1.7l-.3-.5c-6-11.4-4.2-32.8,6.1-59.6l8.2-21.7c.5-1.4,1.9-2.3,3.4-2.3h82.7c11.7,0,22.3,7.1,26.7,18l1.8,4.5c10.4,26.4,12.6,50.5,7.1,61.8l-.2.5v1.1h57.6v-1.1l-.6-.6c-10.9-12.3-17.4-31.1-27.1-55ZM490.1,182.4l46.6,115.6c.2.6-.2,1.2-.8,1.2h-57.8c-6.5,0-17-2.1-20.7-11.3-3.1-7.6-3.4-12.3,7.8-42.1l24.8-63.4Z"/>
            </svg>
          </div>
          
          <!-- Navigation links in a horizontal layout -->
          <div class="nav-links">
            <NuxtLink to="/about" class="nav-link">ABOUT OARA</NuxtLink>
            <NuxtLink to="/team" class="nav-link">TEAM</NuxtLink>
            <NuxtLink to="/methodology" class="nav-link">METHODOLOGY</NuxtLink>
            <NuxtLink to="/contact" class="nav-link">CONTACT US</NuxtLink>
            <NuxtLink to="/foodnbeverage" class="nav-link">FOOD & BEVERAGE</NuxtLink>
          </div>
          
          <!-- Mobile menu button -->
          <div class="mobile-menu-button" @click="toggleMobileMenu">
            <div class="bar" :class="{ 'active': mobileMenuOpen }"></div>
            <div class="bar" :class="{ 'active': mobileMenuOpen }"></div>
            <div class="bar" :class="{ 'active': mobileMenuOpen }"></div>
          </div>
        </div>
      </nav>
      
      <!-- Mobile menu -->
      <div class="mobile-menu" :class="{ 'open': mobileMenuOpen }">
        <NuxtLink to="/about" class="mobile-nav-link" @click="closeMobileMenu">ABOUT OARA</NuxtLink>
        <NuxtLink to="/team" class="mobile-nav-link" @click="closeMobileMenu">TEAM</NuxtLink>
        <NuxtLink to="/methodology" class="mobile-nav-link" @click="closeMobileMenu">METHODOLOGY</NuxtLink>
        <NuxtLink to="/contact" class="mobile-nav-link" @click="closeMobileMenu">CONTACT US</NuxtLink>
        <NuxtLink to="/foodnbeverage" class="mobile-nav-link" @click="closeMobileMenu">FOOD & BEVERAGE</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // Prevent scrolling when menu is open
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

const navigateTo = (route) => {
  if (router) {
    router.push(route);
  } else {
    window.location.href = route;
  }
  closeMobileMenu();
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Force initial check
  setTimeout(() => {
    handleScroll();
  }, 100);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #f2eee3;
  box-sizing: border-box;
  display: block !important;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  padding: 10px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-container {
  display: flex;
  align-items: center;
}

#oara-logo {
  width: 120px;
  height: auto;
  transition: width 0.3s ease;
}

.scrolled #oara-logo {
  width: 100px;
}

.logo-path {
  fill: #29332e;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  font-family: 'Space Mono', monospace;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #29332e;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.3s ease;
  position: relative;
}

.nav-link:after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -3px;
  left: 0;
  background-color: #29332e;
  transition: width 0.3s ease;
}

.nav-link:hover:after {
  width: 100%;
}

.mobile-menu-button {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: #29332e;
  transition: all 0.3s ease;
}

.bar.active:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.bar.active:nth-child(2) {
  opacity: 0;
}

.bar.active:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #f2eee3;
  overflow: hidden;
  transition: height 0.3s ease;
  z-index: 999;
}

.mobile-menu.open {
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;
}

.mobile-nav-link {
  font-family: 'Space Mono', monospace;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #29332e;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.3s ease;
}

.mobile-nav-link:hover {
  opacity: 0.8;
}

/* Media queries for responsiveness */
@media (max-width: 992px) {
  .nav-links {
    gap: 20px;
  }
  
  .nav-link {
    font-size: 0.8rem;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-button {
    display: flex;
  }
  
  .navbar-container {
    justify-content: space-between;
  }
  
  #oara-logo {
    width: 100px;
  }
}
</style>
