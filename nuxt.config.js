import theme from "./utils/theme";

export default {
  // Target: https://go.nuxtjs.dev/config-target

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - azmNuxt",
    title: "Azm",
    htmlAttrs: {
      lang: "ar",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss", "@/assets/fonts/stylesheet.css"],
  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
  loadingIndicator: {
    name: "cube-grid",
    color: "#f00",
    background: "white",
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "nuxt-i18n",
    "@nuxtjs/auth",

    [
      "nuxt-sweetalert2",
      {
        showCancelButton: true,
        focusConfirm: false,
      },
    ],
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/vuetify.js" }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  i18n: {
    locales: [
      {
        code: "ar",
        file: "ar.json",
        name: "arabic",
        icon: "$arabicIcon",
      },
      {
        code: "en",
        file: "en.json",
        name: "english",
        icon: "$englishIcon",
      },
    ],
    defaultLocale: "ar",
    strategy: "prefix_and_default",
    langDir: "locales/",
    lazy: true,
    useCookie: true,
    cookieKey: "language",
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: "ar",
    },
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["assets/scss/_variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: theme.dark,
        light: theme.light,
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
