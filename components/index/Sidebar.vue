<template>
  <div class="sidebar" :class="{ 'open': isOpen }">
    <div class="sidebar-content">
      <SidebarHeader 
        :current-language="currentLanguage" 
        :translations="translations" 
        @close="closeSidebar" 
        @navigate="navigateTo"
      />
      
      <div class="sidebar-layout">
        <!-- Language switcher -->
        <SidebarLanguageSwitcher 
          :current-language="currentLanguage" 
          @toggle-language="toggleLanguage" 
        />
        
        <!-- Main Navigation -->
        <div class="nav-section">
          <!-- New Sidebar Menu Items -->
          <div class="sidebar-menu-container">
            <SidebarAboutSection />
            
            <SidebarPortfolioSection 
              :current-language="currentLanguage" 
              :translations="translations" 
              @navigate="navigateTo" 
            />
            
            <SidebarServicesSection />
          </div>
        </div>
        

        <!-- Footer -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';
import { useTranslation } from '~/composables/useTranslation';
import SidebarHeader from '../sidebar/SidebarHeader.vue';
import SidebarLanguageSwitcher from '../sidebar/SidebarLanguageSwitcher.vue';
import SidebarAboutSection from '../sidebar/SidebarAboutSection.vue';
import SidebarPortfolioSection from '../sidebar/SidebarPortfolioSection.vue';
import SidebarServicesSection from '../sidebar/SidebarServicesSection.vue';
import Footer from '../Footer.vue';

const router = useRouter();
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

// Each component now manages its own open/closed state internally

// Use global translation composable
const { currentLanguage, translations, toggleLanguage } = useTranslation();


const closeSidebar = () => {
  emit('close');
}

// toggleLanguage is provided by composable; no additional code needed.

const navigateTo = (route) => {
  // Close sidebar first
  closeSidebar();
  
  // Force a reflow/repaint before navigation
  document.body.style.display = 'none';
  
  // Use setTimeout to ensure the DOM has time to update
  setTimeout(() => {
    document.body.style.display = '';
    
    // Navigate to the route
    router.push(route);
    
    // Force scroll to top after navigation
    window.scrollTo(0, 0);
  }, 50);
};
</script>

<style scoped>
:root {
  --dark-green: #28332d; /* Dark green color as specified */
  --cream-bg: #FEF6E4; /* Cream background color for sidebar items */
}

.sidebar {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: #f2eee3;
  z-index: 2000;
  transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrollbar */
  display: block;
}

.sidebar.open {
  right: 0;
}

.sidebar-content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  /* Increased horizontal padding for better breathing space */
  padding: 2.5rem 2rem;
  position: relative;
  background-color: #FEF6E4; /* Cream background color */
}

/* Sidebar layout styles */
.sidebar-layout {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: flex-start;
  width: 100%;
  max-width: none; /* Remove fixed width to allow full expansion */
  margin: 0; /* Remove automatic centering */
}

.sidebar-menu-container {
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem; /* Slightly tighter gap to reduce excessive vertical whitespace */
  margin-bottom: 1.5rem;
}

.nav-section {
  margin-bottom: 1.5rem;
}

/* Ensure consistent left alignment */
.sidebar-layout,
.sidebar-menu-container,
.nav-section {
  display: flex;
  flex-direction: column;
  align-items: center; /* center horizontally */
}

/* All component-specific styles have been moved to their respective component files */

.sidebar-language-btn:hover {
  color: #a67c52;
}

.sidebar-language-btn:hover::before {
  transform: translateX(0);
}

.contact-links {
  margin-top: 1rem;
}

.contact-links a {
  display: block;
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.8rem;
  color: #29332e;
  text-decoration: none;
  margin-bottom: 0.3rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 0.8rem;
  color: #29332e;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 600; /* Semi-bold */
  letter-spacing: 220%; /* Spacing 220 - exact specification */
  text-transform: uppercase; /* CAPSLOCK: SIM */
}

.social-link:hover {
  opacity: 0.8;
}

/* Media queries for responsive design */
@media (max-width: 1024px) {
  .contact-section {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .social-links {
    margin-top: 2rem;
  }
}

@media (max-width: 640px) {
  .nav-links {
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    height: auto;
  }
  
  .nav-column {
    width: 100% !important;
    margin-bottom: 1rem;
  }
  
  .hotels-list {
    padding: 0 0.5rem;
  }
  

  
  .category-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .sidebar-content {
    padding: 2rem 1.5rem;
  }
  
  .logo-img {
    height: 100px;
  }
  
  .hospitality-text {
    height: 50px;
    margin-top: -5.2rem;
    margin-bottom: 2rem;
  }
  
  .hospitality-text h2 {
    font-size: 0.8rem;
    letter-spacing: 0.6em !important;
  }
}

/* iOS-specific fixes */
@supports (-webkit-touch-callout: none) {

  .hospitality-text h2 {
    /* Fix for iOS text rendering */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.6em !important; /* Matching hero section letter spacing */
    padding: 0 10px;
    width: auto;
    display: inline-block;
  }
  
  .logo-img {
    /* Ensure SVG renders properly on iOS */
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }
  
  .nav-link {
    /* Fix for iOS text rendering in navigation */
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0.03em; /* Tighter letter spacing on iOS */
  }
  
  /* Fix for iOS text rendering in mobile */
  @media (max-width: 640px) {
    .hospitality-text h2 {
      letter-spacing: 0.6em !important;
      font-size: 0.75rem;
    }
  }
}


  /* Sidebar-specific footer overrides */
  .sidebar :deep(.footer) {
    padding: 1.5rem 0;
    background: transparent; /* remove white background */
  }
  .sidebar :deep(.footer-columns) {
    max-width: none;
    margin: 0;
    padding: 0 1rem; /* align with sidebar padding visually */
  }
  @media (max-width: 640px) {
    .sidebar :deep(.footer-columns) {
      padding: 0;
    }
  }

  /* Remove bottom gap under footer */
  .sidebar-content {
    padding-bottom: 0 !important;
  }
  .sidebar :deep(.footer) {
    padding-bottom: 0;
  }
/* Extra spacing to push footer down and enable scroll */
.sidebar-content {
  padding-bottom: 5rem !important;
}

.sidebar :deep(.footer) {
  margin-top: 3rem;
  padding-bottom: 2rem;
}

</style>
