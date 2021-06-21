<template>
  <v-app>
    <!--  -->
    <v-app-bar app color="light-blue darken-4" dark>
      <div class="d-flex align-center">
        <!-- TODO: Create Logo -->
        <v-img
          alt="MiniscalerLogo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1 class="display-1 font-weight-bold mb-3">
          Mini Scaler
        </h1>
      </div>
      <v-spacer></v-spacer>
      <!-- TODO: Add reference Info dropdown bar -->

      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="purple" color="primary" dark v-bind="attrs" v-on="on">
            Menu Test
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

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

  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>
