<template>
  <v-container width="200" class="mx-auto mt-5">
    <v-row class="text-center">
      <v-col class="mb-5 mx-auto" cols="6">
        <v-form>
          <v-layout row wrap>
            <!-- CENTIMETRES -->
            <v-flex s2>
              <v-text-field
                label="Character Height (Centimetres)"
                prepend-icon="mdi-tape-measure"
                :value="realCm"
                type="number"
                suffix="cm"
                @input="updateCm"
              ></v-text-field>

              <!-- Inches -->
              <v-text-field
                label="Character Height (Inches)"
                prepend-icon="mdi-tape-measure"
                :value="realI"
                type="number"
                suffix="in"
                @input="updateIn"
              ></v-text-field>
            </v-flex>

            <v-spacer></v-spacer>

            <!-- METRES -->
            <v-flex s2>
              <v-text-field
                label="Character Height (Metres)"
                prepend-icon="mdi-tape-measure"
                :value="realM"
                type="number"
                suffix="m"
                @input="updateM"
              ></v-text-field>

              <v-spacer></v-spacer>

              <!-- Feet -->
              <v-text-field
                label="Character Height (Ft)"
                prepend-icon="mdi-tape-measure"
                :value="realFt"
                type="number"
                suffix="ft"
                @input="updateFt"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-spacer></v-spacer>

          <!-- Scale Selection -->
          <v-btn-toggle
            v-model="scaleType"
            tile
            color="green accent-4"
            group
            mandatory
          >
            <v-btn value="15">
              15mm
            </v-btn>

            <v-btn value="28">
              28mm
            </v-btn>

            <v-btn value="32">
              32mm
            </v-btn>

            <v-btn value="54">
              54mm
            </v-btn>
          </v-btn-toggle>

          <v-text-field
            label="Printed Mini Size"
            v-model.lazy="scaleToMini"
            prepend-icon="mdi-scale-balance"
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
  props: ["hPreset"],
  name: "ScaleCalculator",

  data: () => ({
    realCm: 0,
    realI: 0,
    realFt: 0,
    realM: 0,
    scaleType: "28",
    scaleHeight: 0,
  }),

  watch: {
    hPreset: function() {
      //Handles Top menu preset changes.
      this.updateCm(this.hPreset);
    },
  },

  computed: {
    scaleToMini: function() {
      let equation = 1;
      switch (this.scaleType) {
        case "15":
          equation = 12.2;
          break;
        case "28":
          equation = 6.5;
          break;
        case "32":
          equation = 5.7;
          break;
        case "54":
          equation = 3.39;
          break;
      }
      return (this.realCm / equation).toFixed(2);
    },
  },

  methods: {
    // TODO: Test and verify conversions are correct
    updateCm(value) {
      this.realI = value * 0.39;
      this.realFt = value * 0.032;
      this.realCm = value;
      this.realM = value * 0.01;
    },

    //TODO: Sort out ft/inch display
    updateIn(value) {
      this.realI = value;
      this.realFt = value * 12;
      this.realCm = value * 2.54;
      this.realM = value * 0.0254;
    },

    updateM(value) {
      this.realI = value * 39.37;
      this.realFt = value * 3.28;
      this.realCm = value * 100;
      this.realM = value;
    },

    updateFt(value) {
      this.realI = value * 12;
      this.realFt = value;
      this.realCm = value * 30.48;
      this.realM = value * 0.3;
    },
  },
};
</script>
