<template>
  <v-container>
    <div class="main--title primary">أكادمية عزم</div>
    <v-btn class="pink white--text">click me</v-btn>
    <v-btn color="pink white--text">click me</v-btn>
    <v-btn depressed color="pink">click me</v-btn>
    <v-btn text depressed color="pink">click me</v-btn>
    <v-btn depressed class="pink white--text">
      <span>email</span>
      <v-icon left>mdi-email</v-icon>
    </v-btn>
    <v-btn class="pink white--text" icon x-large nuxt to="/about-us">
      <v-icon>mdi-email</v-icon>
    </v-btn>
    <v-btn class="purple" dark fab nuxt to="/about-us">
      <v-icon>mdi-email</v-icon>
    </v-btn>

    <div>
      <!-- <v-btn class="hidden-md-and-up"> click me</v-btn>
      <v-btn class="hidden-md-and-down"> click me</v-btn> -->
      <v-btn class="hidden-md-only">Click me</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
