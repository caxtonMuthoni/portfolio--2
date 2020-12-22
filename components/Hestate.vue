<template>
  <div>
    <div class="section pa-5">
      <v-row class="ma-auto inner-row text-center pa-5" justify="center" align="center">
        <v-col cols="11" sm="12" lg="8" class="ma-auto">
          <p class="orange--text text--darken-4 text-subtitle-2 text-md-h4 font-weight-light myfont">
            Don't Hesitate to contact me.  I'm available for you. Lets grow your business via technology.
          </p>
        </v-col>
        <v-col cols="11" sm="12" lg="3" class="ma-auto">
          <v-btn
            rounded
            depressed
            large
            route
            to="/contact"
            class="orange darken-4 white--text text-capitalize"
          >
            Get in Touch Now
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
  .section{
  background-image: url('/imgs/section.jpg');
  background-size: cover;
  height: 40vh;
}
.myfont{
  font-family: 'Cormorant Garamond', serif !important;
}
</style>
