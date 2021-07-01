<template>
  <v-app>
    <v-main> <TopBar /></v-main>
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
