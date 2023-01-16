<template>
  <div>
    <LazyNavBar />
  </div>
</template>

<script>
export default {
  directives: {
    onScroll: {
      bind(el, bind) {
        document.addEventListener("scroll", (e) => {
          if (e.path[1].scrollY > 100) {
            el.classList.add("active-header");
          } else {
            el.classList.remove("active-header");
          }
        });
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    items() {
      return [
        {
          title: "الرئيسية",
          to: "/",
        },
        {
          title: "عن المنصة",
          to: "/about-us",
        },
        {
          title: "الدبلومات",
          to: "/dibloms",
        },
        {
          title: "الدورات",
          to: "/courses",
        },
        {
          title: "المقالات",
          to: "/articles",
        },
        {
          title: "اتصل بنا",
          to: "/contact-us",
        },
      ];
    },
  },
};
</script>
