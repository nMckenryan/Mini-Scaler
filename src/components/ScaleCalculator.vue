<template>
  <v-container width="200" class="mx-auto mt-5">
    <v-row class="text-center">
      <v-col class="mb-5 mx-auto" cols="8">
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
            </v-flex>

            <v-spacer></v-spacer>

            <!-- Inches -->
            <v-flex s2>
              <v-text-field
                label="Character Height (Inches)"
                prepend-icon="mdi-tape-measure"
                :value="realI"
                type="number"
                suffix="in"
                @input="updateIn"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout>
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
            </v-flex>
            <v-spacer></v-spacer>
            <!-- Feet -->
            <v-flex s2>
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
            color="deep-blue accent-3"
            group
          >
            <v-btn value="28">
              28mm
            </v-btn>

            <v-btn value="32">
              32mm
            </v-btn>

            <v-btn value="32">
              54mm
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
        case "28":
          equation = 5.7;
          break;
        case "32":
          equation = 6;
          break;
        case "54":
          equation = 12;
          break;
      }
      return (this.realCm / equation).toFixed(2);
    },
  },

  methods: {
    //TODO: Optimise this code with reusable methods.
    // TODO: Test and verify conversions are correct (JEST)
    updateCm(value) {
      this.realI = value * 0.393701;
      this.realFt = this.roundFeet(value); //value * 0.03280841666667;
      this.realCm = value;
      this.realM = value * 0.01;
    },

    updateIn(value) {
      this.realI = value;
      this.realFt = value * 2.54;
      this.realCm = value * 0.393701;
      this.realM = value * 0.0254;
    },

    updateM(value) {
      this.realI = value * 0.393701;
      this.realFt = value * 0.03280841666667;
      this.realCm = value * 100;
      this.realM = value;
    },

    updateFt(value) {
      this.realI = value * 0.393701;
      this.realFt = value;
      this.realCm = value * 100;
      this.realM = value * 0.3048;
    },

    roundFeet(value) {
      var realFeet = (value * 0.3937) / 12;
      var feet = Math.floor(value);
      var inches = Math.round((realFeet - feet) * 12);
      return feet + "&prime;" + inches + "&Prime;";
    },
  },
};
</script>
