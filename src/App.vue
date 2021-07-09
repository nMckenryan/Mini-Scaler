<template>
  <v-app>
    <v-main class="light-green lighten-5"> <TopBar /></v-main>
  </v-app>
</template>

<script>
import TopBar from "./components/TopBar";

export default {
  name: "App",
  metaInfo: {
    title: "Mini Scaler",
    titleTemplate: "%s - Easy 3D Printed Mini Scaling",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },

  components: {
    TopBar,
    // Topbar -> ScaleCalc
  },

  data: () => ({}),
};
</script>
