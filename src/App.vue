<template>
  <v-app>
    <v-main>
      <ScaleCalculator />
    </v-main>
  </v-app>
</template>

<script>
import ScaleCalculator from "./components/ScaleCalculator";

export default {
  name: "App",

  components: {
    ScaleCalculator,
  },

  data: () => ({}),
};
</script>
