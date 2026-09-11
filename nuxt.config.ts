export default defineNuxtConfig({
  compatibilityDate: "2026-09-11",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "de" },
      title: "Die Lichtung · Ein Leben in Annahme und Liebe",
      meta: [
        {
          name: "description",
          content:
            "Eine entstehende Gemeinschaft für ein ehrliches, liebevolles und naturverbundenes Miteinander. Menschen. Natur. Gemeinschaft. Zukunft.",
        },
        { name: "theme-color", content: "#f4efe3" },
        {
          property: "og:title",
          content: "Die Lichtung · Ein Leben in Annahme und Liebe",
        },
        {
          property: "og:description",
          content: "Mehr Mensch. Mehr Leben. Eine Lichtung für uns alle.",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "de_DE" },
        {
          property: "og:image",
          content: "https://lichtung.be/images/waldlandschaft.webp",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/images/lichtung-logo.png" },
      ],
    },
  },
  nitro: { prerender: { routes: ["/"] } },
});
