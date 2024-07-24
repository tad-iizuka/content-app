import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true }
  },
  app: {
    baseURL: '/content-app/',
  },
  compatibilityDate: '2024-07-24',
  modules: ["@nuxtjs/tailwindcss"]
})
