<template>
  <div class="mx-auto overflow-hidden" height="400">
    <v-app-bar app color="light-green darken-4" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <!-- TITLE -->
      <v-img
        alt="MiniscalerLogo"
        class="shrink mr-2"
        contain
        src="..\assets\scalerLogoWhite.png"
        transition="scale-transition"
        width="45"
      />

      <v-toolbar-title>Mini Scaler</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <!-- TODO: Establish nonclickable Dividers -->

          <v-list-item>
            40k References
          </v-list-item>

          <!-- TODO Fix slow responsive menu select -->
          <v-list-item v-for="(item, i) in Wh40Heights" :key="i">
            <v-list-item-name>
              <a @click="setPreset(item.height)">
                {{ item.name }} {{ item.height }} cm</a
              ></v-list-item-name
            >
          </v-list-item>

          <v-list-item>
            DnD References
          </v-list-item>
          <v-list-item v-for="(item, i) in dndHeights" :key="i">
            <v-list-item-name>
              <a @click="setPreset(item.height)">
                {{ item.name }} {{ item.height }} cm</a
              >
            </v-list-item-name>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <Scale-Calculator v-bind:hPreset="menuSelect" />
  </div>
</template>

<script>
import ScaleCalculator from "./ScaleCalculator.vue";
export default {
  name: "Topbar",
  components: {
    ScaleCalculator,
  },

  data: () => ({
    menuSelect: "",
    drawer: false,
    dndHeights: [
      { name: "Human", height: 170 },
      { name: "Half Elf", height: 167 },
      { name: "Elf", height: 165 },
      { name: "Dwarf", height: 125 },
      { name: "Halfling", height: 91 },
      { name: "Gnome", height: 101 },
      { name: "Half-Orc", height: 175 },
      { name: "Dragonborn", height: 190 },
      { name: "Goliath", height: 228 },
    ],
    Wh40Heights: [
      { name: "Imperial Guardsman", height: 182 },
      { name: "Space Marine (Armoured)", height: 228 },
      { name: "Ork ", height: 198 },
      { name: "Ork Warboss ", height: 300 },
      { name: "Genestealer ", height: 189 },
      { name: "Eldar/Drukhari ", height: 189 },
      { name: "Necron ", height: 243 },
      { name: "Tau", height: 167 },
      { name: "Tyranid Warrior", height: 274 },
    ],
  }),

  methods: {
    setPreset(item) {
      this.menuSelect = item;
    },
  },
};
</script>
