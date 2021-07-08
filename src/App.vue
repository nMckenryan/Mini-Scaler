<template>
  <v-app>
    <v-main class="light-green lighten-5"> <TopBar /></v-main>
  </v-app>
</template>

<script>
import TopBar from "./components/TopBar";

export default {
  name: "App",

  components: {
    TopBar,
    // Topbar -> ScaleCalc
  },

  data: () => ({}),
};
</script>
