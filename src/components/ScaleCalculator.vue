<template>
  <v-container width="200" class="mx-auto mt-5">
    <v-row class="text-center">
      <v-col class="mb-5 mx-auto" cols="8">
        <!-- TOGGLE IMPERIAL/METRIC
        <v-switch v-model="isImp" inset :label="label"></v-switch> -->

        <v-form>
          <v-layout row wrap>
            <!-- CENTIMETRES -->
            <v-flex s2>
              <v-text-field
                label="Character Height (Centimetres)"
                prepend-icon="mdi-tape-measure"
                v-model.lazy="realCm"
                type="number"
                suffix="cm"
              ></v-text-field>
            </v-flex>
            <v-spacer></v-spacer>

            <!-- METRES -->
            <v-flex s2>
              <v-text-field
                label="Character Height (Metres)"
                prepend-icon="mdi-tape-measure"
                v-model.lazy="realM"
                type="number"
                suffix="m"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <!-- <v-layout row wrap v-else>
            <v-flex s2>
              <v-text-field
                label="Character Height (Inches)"
                prepend-icon="mdi-tape-measure"
                v-model.lazy="realI"
                type="number"
                suffix="inch"
              ></v-text-field>
            </v-flex>

            <v-spacer></v-spacer>

            <v-flex s2>
              <v-text-field
                label="Character Height (Feet)"
                prepend-icon="mdi-tape-measure"
                v-model.lazy="realF"
                type="number"
                suffix="ft"
              ></v-text-field>
            </v-flex>
          </v-layout> -->

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
  props: ["hPreset"],
  name: "ScaleCalculator",

  async mounted() {},

  data: () => ({
    masterMeasure: 0,
    realCm: 0,
    realM: 0,

    // realI: 0,
    // realF: 0,
    // isImp: false,

    scaleType: 28,
    scaleHeight: 0,
  }),

  watch: {
    hPreset: function() {
      //Handles Top menu preset changes.
      // if (this.isImp == false) {
      this.realCm = this.hPreset;
      // } else {
      //   this.realI = this.convertInch(this.hPreset);
      // }
    },

    realCm: function() {
      this.realM = this.realCm / 100;
      // this.realI = this.convertInch(this.realCm);
    },

    realM: function() {
      this.realCm = this.realM * 100;
    },

    // realI: function() {
    //   this.convertInch(this.realI);
    // },

    // realF: function() {
    //   this.convertFt(this.realF);
    // },
  },

  computed: {
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
        case 54:
          equation = 12;
          break;
      }
      console.log(this.scaleHeight + equation);
      return this.realCm / equation; //scale for 32mm
    },

    // label: function() {
    //   const l = this.isImp == true ? "Imperial" : "Metric";
    //   return l;
    // },
  },

  methods: {
    // convertInch(v) {
    //   // 1 inch  = 2.54cm
    //   this.realCm = v / 0.3937;
    // },
    // convertMetric(v) {
    //   //1m = 3.28ft
    //   this.realI = v * 3.28;
    // },
  },
};
</script>
