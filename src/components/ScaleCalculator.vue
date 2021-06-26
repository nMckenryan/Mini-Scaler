<template>
  <v-app>
    <v-app-bar app color="light-blue darken-4" dark>
      <div class="d-flex align-center">
        <!-- TODO: Create Logo -->
        <v-img
          alt="MiniscalerLogo"
          class="shrink mr-2"
          contain
          src="..\assets\scalerLogoWhite.png"
          transition="scale-transition"
          width="45"
        />

        <h1 class="display-1 font-weight-bold my-auto">
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
            <v-list-item-name @click="this.realCm = item.height">
              {{ item.name }} {{ item.height }} cm</v-list-item-name
            >
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- TODO: Change CharHeight on click -->
      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="purple" color="primary" dark v-bind="attrs" v-on="on">
            DnD Reference
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in dndHeights" :key="i">
            <v-list-item-name
              >{{ item.name }} {{ item.height }} cm
            </v-list-item-name>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-container width="200" class="mx-auto mt-5">
      <v-row class="text-center">
        <v-col class="mb-5 mx-auto" cols="8">
          <v-form>
            <v-layout row wrap>
              <!-- TODO: Instantiate Imperial Conversion -->

              <v-flex s2>
                <v-text-field
                  label="Character Height (Centimetres)"
                  prepend-icon="mdi-tape-measure"
                  v-model.number="realCm"
                  type="number"
                  suffix="cm"
                ></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>

              <v-flex s2>
                <v-text-field
                  label="Character Height (Metres)"
                  prepend-icon="mdi-tape-measure"
                  v-model.lazy="update"
                  type="number"
                  suffix="m"
                ></v-text-field>
              </v-flex>

              <!-- <v-flex s2>
              <v-text-field
                label="Character Height (Inches)"
                prepend-icon="mdi-tape-measure"
                v-model.number="realImp"
                type="number"
                suffix="cm"
                @change="parallelConversion(i)"
                v-on:update="scaleToMini"
              ></v-text-field>
            </v-flex> -->
            </v-layout>

            <v-spacer></v-spacer>

            <!-- Scale Selection -->
            <v-btn-toggle
              v-model="scaleType"
              tile
              color="deep-blue accent-3"
              group
            >
              <v-btn value="28">
                28mm
              </v-btn>

              <v-btn value="32">
                32mm
              </v-btn>
            </v-btn-toggle>

            <v-text-field
              label="Printed Mini Size"
              v-model.lazy="scaleToMini"
              prepend-icon="mdi-scale-balance"
              type="number"
              suffix="mm"
              readonly
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row> </v-container
  ></v-app>
</template>

<script>
export default {
  name: "ScaleCalculator",

  async mounted() {},

  data: () => ({
    masterMeasure: 0,
    realCm: 0,
    realM: 0,
    scaleType: 28,
    scaleHeight: 0,

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

  computed: {
    update: function(orig) {
      if (orig == "m") {
        return this.realCm / 100;
      } else {
        return this.realCm;
      }
    },

    scaleToMini: function() {
      //TODO: add mode scaletypes
      let equation = 1;
      switch (this.scaleType) {
        case 28:
          equation = 5.7;
          break;
        case 32:
          equation = 6;
          break;
      }
      console.log(this.scaleHeight + equation);
      return this.realCm / equation; //scale for 32mm
    },
  },

  methods: {
    parallelConversion(f) {
      if (f == "i") {
        this.realMetric = this.convertMetric(this.realImp);
      } else if (f == "m") {
        this.realImp = this.convertImp(this.realMetric);
      }
      this.scaleToMini();
    },

    convertImp(v) {
      // 1 ft = 0.3m
      this.realMetric = v * 0.3;
    },

    convertMetric(v) {
      //1m = 3.28ft
      this.realImperial = v * 3.28;
    },
  },
};
</script>
