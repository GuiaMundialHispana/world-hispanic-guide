// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      title: 'Guia Mundial Hispana',
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  modules: [
    'nuxt-icons',
    '@nuxtjs/device',
    '@nuxt/image'
  ],
  dir: {
    middleware: 'maintenance'
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      API: process.env.BASE_URL
    }
  },
  compatibilityDate: '2025-03-31'
})
