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
            40k Reference
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in Wh40Heights" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="purple" color="primary" dark v-bind="attrs" v-on="on">
            DnD Reference
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in dndHeights" :key="i">
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
    dndHeights: [
      { title: "Human: 67'" },
      { title: "Half Elf: 66'" },
      { title: "Elf: 65'" },
      { title: "Dwarf: 49'" },
      { title: "Halfling: 36' " },
      { title: "Gnome: 40' " },
      { title: "Half-Orc: 69' " },
      { title: "Dragonborn: 75' " },
      { title: "Goliath: 90'" },
    ],
    Wh40Heights: [
      { title: "Imperial Guardsman: 6 ft" },
      { title: "Space Marine (Armoured): 7'5 ft" },
      { title: "Ork: 6 - 7ft" },
      { title: "Ork Warboss: 10+ ft" },
      { title: "Genestealer: 6'2ft " },
      { title: "Eldar/Drukhari: 6'2 ft" },
      { title: "Necron: 8 ft" },
      { title: "Tau: 5'5 ft" },
      { title: "Tyranid Warrior: 9 ft" },
    ],
  }),
};
</script>
