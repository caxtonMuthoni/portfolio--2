<template>
  <div class="hero-section mt-5">
    <v-row class="mt-5">
      <v-col cols="12" md="6" class="ma-auto">
        <div class="my-auto ma-5">
          <span class="caption text-uppercase indigo--text text--darken-3 mb-0">Cagimoto</span>
          <h1 class="indigo--text text--darken-3 mb-5">
            {{ title }}
          </h1>
          <v-divider class="my-5" />
        </div>
      </v-col>
      <v-col cols="12" md="6" style="height:30vh" />
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
    .hero-section{
    background-image: url('/imgs/section.jpg');
    background-position: center;
    background-size: cover;
    height: 30vh;
    width: 100%;
    }
</style>
