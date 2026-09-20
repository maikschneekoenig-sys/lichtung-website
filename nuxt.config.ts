export default defineNuxtConfig({
  compatibilityDate: "2026-09-11",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "de" },
    },
  },
  nitro: { prerender: { routes: ["/", "/grillabend"] } },
});
