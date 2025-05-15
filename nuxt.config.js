// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
    '~/assets/css/global-font.css'
  ],
  
  // Add PostCSS configuration for Tailwind
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2025-04-24',
  
  // Configure router to always scroll to top on page navigation
  app: {
    head: {
      title: 'Oara',
      titleTemplate: 'Oara',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    },
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