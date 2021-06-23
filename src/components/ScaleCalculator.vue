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
    </v-row>
  </v-container>
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
