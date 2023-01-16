<template>
  <v-app v-if="!loading">
    <LazyLayoutHeader />
    <main>
      <nuxt :nuxt-child-key="$route.fullPath" />
    </main>
    <LazyLayoutFooter />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      loading: true,
      showScrollToButton: false,
    };
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === "en" ? "ltr" : "rtl",
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.loading = false;
    });
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        this.showScrollToButton = true;
      } else {
        this.showScrollToButton = false;
      }
    });
  },
  methods: {
    handleScrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  // watch: {
  //   "$i18n.locale": {
  //     handler() {
  //       this.$store.dispatch("globalSettings/setSettings");
  //     },
  //     immediate: true,
  //   },
  // },
  computed: {},
};
</script>
