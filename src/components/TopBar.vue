<template>
  <div>
    <v-app-bar app color="light-green darken-4" dark>
      <div class="d-flex align-center">
        <v-img
          alt="MiniscalerLogo"
          class="shrink mr-2"
          contain
          src="..\assets\scalerLogoWhite.png"
          transition="scale-transition"
          width="45"
        />

        <h3 class="display-1 heading-3 font-weight-bold my-auto">
          Mini Scaler
        </h3>
      </div>
      <v-spacer></v-spacer>

      <v-menu offset-y transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="yellow darken-3"
            dark
            v-bind="attrs"
            v-on="on"
            class="ml-10"
          >
            40k Reference
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in Wh40Heights" :key="i">
            <v-list-item-name>
              <a class="caption" @click="setPreset(item.height)">
                {{ item.name }} {{ item.height }} cm</a
              ></v-list-item-name
            >
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu transition="slide-y-transition" offset-y bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="yellow darken-3" dark v-bind="attrs" v-on="on">
            DnD Reference
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in dndHeights" :key="i">
            <v-list-item-name>
              <a @click="setPreset(item.height)">
                {{ item.name }} {{ item.height }} cm</a
              >
            </v-list-item-name>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

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
