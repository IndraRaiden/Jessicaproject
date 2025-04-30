// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/main.css'
  ],

  devtools: { enabled: true },
  compatibilityDate: '2025-04-24',
  
  // Configure router to always scroll to top on page navigation
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      onBeforeEnter(el) {
        // Reset scroll position when entering a new page
        window.scrollTo(0, 0);
      }
    }
  },
  
  // Ensure scroll position is reset on route changes
  router: {
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    }
  }
})