// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // css: [
  //   "vuetify/lib/styles/main.sass"
  // ],

  // build: {
  //     transpile: ["vuetify"]
  // },

  // modules: [
  //   '@pinia/nuxt',
  // ],
  devtools: { enabled: true },
  // modules: ['@nuxt/content', "@nuxt/image"],
  routeRules: {
    '/': { prerender: true }
  },

  app: {
    baseURL: '/content-app/',
  },
  compatibilityDate: '2024-07-24'
})
