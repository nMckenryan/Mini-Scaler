<template>
  <v-container width="200" class="mx-auto mt-5">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Mini Scaler
        </h1>

        <p class="subheading font-weight-regular">
          Get your 3D Printed Minis just the right side!
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-form>
          <!-- TODO: Put next to each other -->
          <v-text-field
            label="Mini Height (Metric)"
            prepend-icon="mdi-account-circle"
          ></v-text-field>
          <v-text-field
            label="Mini Height (Imperial)"
            prepend-icon="mdi-account-circle"
          ></v-text-field>

          <!-- Scale Selection -->
          <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
            <v-btn value="28mm">
              28mm
            </v-btn>

            <v-btn value="32mm">
              32mm
            </v-btn>
          </v-btn-toggle>

          <v-text-field label="Real World Size"></v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    imperial: 0,
    metric: 0,
  }),

  methods: {
    convertImp() {},

    convertMetric() {},

    scaleToMini() {},
  },
};
</script>
