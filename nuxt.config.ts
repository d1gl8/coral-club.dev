export default defineNuxtConfig({
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
});
