// import { i18n } from "./locales/config";

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
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
  modules: ["@nuxtjs/i18n"],
});
