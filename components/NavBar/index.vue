<template>
  <v-card flat>
    <v-app-bar flat color="white">
      <v-toolbar-title>logo</v-toolbar-title>

      <v-spacer></v-spacer>

      <div>
        <v-btn color="primary" class="ma-2">
          <span>انشاء حساب</span>
        </v-btn>

        <v-btn flat>
          <span>تسجيل الدخول</span>
        </v-btn>
      </div>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="indigo" temporary>
      <p class="primary">text</p>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
