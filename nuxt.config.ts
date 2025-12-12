// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  imports: {
    dirs: ["app/globals"],
  },

  nitro: {
    prerender: {
      routes: [
        "/",
      ],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
  },

  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/ui",
  ],
});
