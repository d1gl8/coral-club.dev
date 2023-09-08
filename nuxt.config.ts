// import { i18n } from "./locales/config";

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    rootId: "coral-club",
  },
  css: ["~/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_mixins.scss";
          `,
        },
      },
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  modules: ["@nuxtjs/i18n"],
});
