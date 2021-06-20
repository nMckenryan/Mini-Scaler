<template>
  <v-container width="200" class="mx-auto mt-5">
    <v-row class="text-center">
      <v-col class="mb-5 mx-auto" cols="8">
        <h1 class="display-2 font-weight-bold mb-3">
          Mini Scaler
        </h1>
        <p class="subheading font-weight-regular">
          Get your 3D Printed Minis just the right side!
        </p>

        <v-form>
          <v-layout row wrap>
            <!-- <v-flex s2>
              <v-text-field
                label="Character Height (Metres)"
                prepend-icon="mdi-tape-measure"
                v-model="realMetric"
                single-line
                type="number"
              ></v-text-field>
            </v-flex> -->
            <v-flex s2>
              <v-text-field
                label="Character Height (Centimetres)"
                prepend-icon="mdi-tape-measure"
                v-model="realMetric"
                clearable
                type="number"
                suffix="cm"
                v-on:change="scaleToMini"
              ></v-text-field>
            </v-flex>
            <v-spacer></v-spacer>
            <!-- <v-flex s2>
              <v-text-field
                label="Character Height (Feet)"
                prepend-icon="mdi-tape-measure"
                v-model="realImperial"
                single-line
                type="number"
              ></v-text-field>
            </v-flex>
            <v-flex s2>
              <v-text-field
                label="Character Height (Inches)"
                prepend-icon="mdi-tape-measure"
                v-model="realImperial"
                single-line
                type="number"
              ></v-text-field>
            </v-flex> -->
          </v-layout>

          <v-spacer></v-spacer>

          <!-- Scale Selection -->
          <v-btn-toggle
            v-model="scaleType"
            tile
            color="deep-purple accent-3"
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
            v-model="scaleHeight"
            prepend-icon="mdi-scale-balance"
            clearable
            hide-details
            type="number"
            suffix="mm"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Scale Calculator",

  async mounted() {},

  data: () => ({
    realImp: 0,
    realMetric: 0,
    scaleType: 28,
    scaleHeight: 0,
  }),

  methods: {
    convertImp() {
      // 1 ft = 0.3m
      return this.realMetric * 0.3;
    },

    convertMetric() {
      //1m = 3.28ft
      return this.realImperial * 3.28;
    },

    scaleToMini() {
      this.scaleHeight = this.realMetric / 5.7; //scale for 32mm
    },
  },
};
</script>
