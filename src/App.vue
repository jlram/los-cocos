<template>
  <v-app id="app">
    <Landing />
  </v-app>
</template>

<script>
import Landing from "./pages/Landing.vue";

export default {
  name: "App",
  components: {
    Landing,
  },
};
</script>

<style>
@import "./assets/css/main.css";
</style>
