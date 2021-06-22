<template>
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
                v-model.number="realMetric"
                type="number"
                suffix="cm"
                @change="scaleToMini"
              ></v-text-field>
            </v-flex>
            <v-spacer></v-spacer>

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
            v-model="scaleHeight"
            prepend-icon="mdi-scale-balance"
            type="number"
            suffix="mm"
            readonly
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ScaleCalculator",

  async mounted() {},

  data: () => ({
    masterMeasure: 0,
    realImp: 0,
    realMetric: 0,
    scaleType: 28,
    scaleHeight: 0,
  }),

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

    scaleToMini() {
      //TODO: add mode scaletypes
      let equation = 1;
      switch (this.scaleType) {
        case "28":
          equation = 5.7;
          break;
        case "32":
          equation = 6;
          break;
      }
      console.log(this.scaleHeight + equation);
      this.scaleHeight = this.realMetric / equation; //scale for 32mm
    },
  },
};
</script>
