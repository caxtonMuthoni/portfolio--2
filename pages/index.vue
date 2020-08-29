<template>
  <v-app light class="pa-0">
    <div class="hero">
      <v-container>
        <v-row justify="center">
          <v-col sm="12" md="5" class="text-left ma-auto pa-5">
            <p class="orange--text text--darken-4 text-subtitle-2 text-uppercase">
              Get All Tech solutions
            </p>
            <p class="indigo--text text--darken-4 text-md-h4 text-sm-h6 myfont">
              MUTHONI G. CAXTON <br>
              Software Engineer
            </p>
            <p class="text-subtitle-2 text-left myfont2">
              My goal is to create a product that will provide the maximum value for the client’s investment.
              To accomplish this, I develop a consultant mindset that lets me delve
              into the business context and closely manage my time, my clients’ needs, and budget.
            </p>
            <v-btn rounded depressed route to="/contact" class="text-capitalize orange darken-4 white--text mt-5">
              Get free consultation
            </v-btn>
          </v-col>
          <v-col sm="12" md="7" class="text-center ma-auto mt-5">
            <v-responsive>
              <v-img src="/imgs/home.svg" />
            </v-responsive>
            <div class="mt-5" />
          </v-col>
          <v-col cols="12" md="10" class="ma-5 pa-5 hidden-sm-and-down">
            <v-banner two-line>
              <v-avatar
                slot="icon"
                color="deep-purple accent-4"
                size="40"
              >
                <v-icon
                  icon="mdi-lock"
                  color="white"
                >
                  mdi-artstation
                </v-icon>
              </v-avatar>

              <v-row>
                <v-col cols="12" md="8">
                  <h3 class="myfont indigo--text text--darken-3">
                    Move your Business to the cloud
                  </h3>
                  <p class="text-subtitle-1">
                    Let your business run 24/7 by moving it to the cloud. Elevate your business
                    rapidly by making it available to every customer online
                  </p>
                </v-col>
                <v-col cols="12" md="4" class="ma-auto">
                  <template>
                    <v-btn
                      route
                      to="/contact"
                      dark
                      rounded
                      depressed
                      color="indigo accent-4 text-capitalize"
                    >
                      <v-icon left>
                        mdi-rocket
                      </v-icon>
                      Elevate my business now.
                    </v-btn>
                  </template>
                </v-col>
              </v-row>
            </v-banner>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="my-5">
      <v-row justify="center" class="mb-5">
        <v-col cols="12" md="10" class="text-center mb-5">
          <h3 class="grey--text text--darken-2 text-md-h5 mb-5">
            <b class="indigo--text text--darken-3">Cagi</b><b class="orange--text text--darken-3">Moto's</b> High quality services.
          </h3>
          <v-divider class="my-5" />
        </v-col>
        <v-col cols="11" sm="12" md="3" class="pa-2">
          <v-hover v-slot:default="{hover}" open-delay="100" close-delay="100">
            <v-card class="pa-5 text-center elevation-0 card-border" :class="{'transition-fast-in-fast-out blue lighten-2 white--text': hover}">
              <v-avatar size="62" rounded="50" color="orange lighten-4">
                <v-icon x-large class="orange--text text--darken-4">
                  mdi-battlenet
                </v-icon>
              </v-avatar>
              <h3 class="orange--text text--darken-4 mt-2 font-weight-light">
                Web Design
              </h3>
              <v-card-text class="myfont2 subtitle-1">
                I specialize in designing custom, responsive websites, company logos,
                and business cards at absolutely affordable
                prices to enhance your company online presence.
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="11" sm="12" md="3" class="pa-2">
          <v-hover v-slot:default="{hover}" open-delay="100" close-delay="100">
            <v-card class="pa-5 text-center elevation-0 card-border" :class="{'transition-fast-in-fast-out blue lighten-2 white--text': hover}">
              <v-avatar size="62" rounded="50" color="orange lighten-4">
                <v-icon x-large class="orange--text text--darken-4">
                  mdi-artstation
                </v-icon>
              </v-avatar>
              <h3 class="orange--text text--darken-4 mt-2 font-weight-light">
                Software Development
              </h3>
              <v-card-text class="myfont2 subtitle-1">
                We focus in producing brilliant websites that give your organisation a
                responsive online presence.
                Using the latest technologies, we give you a new brand online
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="11" md="3" class="pa-2">
          <v-hover v-slot:default="{hover}" open-delay="100" close-delay="100">
            <v-card class="pa-5 text-center elevation-0 card-border" :class="{'transition-fast-in-fast-out blue lighten-2 white--text': hover}">
              <v-avatar size="62" rounded="50" color="orange lighten-4">
                <v-icon x-large class="orange--text text--darken-4 font-weight-light">
                  mdi-cellphone-message
                </v-icon>
              </v-avatar>
              <h3
                class="orange--text text--darken-4 mt-2 font-weight-light"
              >
                Mobile Application
              </h3>
              <v-card-text class="myfont2 subtitle-1">
                We connect your business to the large community of mobile users by providing it with
                awesome mordern applications. Our app are of high quality with an ease of use by the
                customers.
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center" class="my-5">
        <v-col cols="12" md="9" class="text-center mb-2">
          <h3 class="grey--text text--darken-2 text-md-h5 mb-5">
            Why work with <b class="indigo--text text--darken-3">Cagi</b><b class="orange--text text--darken-3">Moto</b> ???
          </h3>
          <v-divider />
        </v-col>
        <v-col cols="12" md="6" class="pa-5">
          <div class="about" />
        </v-col>
        <v-col cols="12" md="5" class="ma-auto pa-5">
          <div>
            <h2 class="orange--text text--darken-4 pa-2 text-body-1 text-md-h5">
              Over 5 years of Experience
            </h2>
            <v-divider class="mb-4" />
            <h3 class="subtitle2 deep-purple--text text--darken-4 mb-2 text-subtitle-2 text-md-h6 font-weight-light">
              <v-icon class="deep-purple--text text--darken-4 mr-3">
                mdi-battlenet
              </v-icon>
              Web Design {{ web }} %
            </h3>
            <v-progress-linear
              v-model="web"
              class="my-2"
              rounded
              striped
              color="orange lighten-2"
              height="12"
            />
            <br>
            <h3 class="subtitle2 blue--text text--darken-4 mb-2 text-subtitle-2 text-md-h6 font-weight-light">
              <v-icon class="blue--text text--darken-4 mr-3">
                mdi-artstation
              </v-icon>
              Software Development {{ software }} %
            </h3>
            <v-progress-linear
              v-model="software"
              color="blue lighten-2"
              rounded
              class="my-2"
              striped
              height="12"
            />
            <br>
            <h3 class="subtitle2 indigo--text text--darken-4 mb-2 text-subtitle-2 text-md-h6 font-weight-light">
              <v-icon class="indigo--text text--darken-4 mr-3">
                mdi-cellphone-message
              </v-icon>
              Mobile Application  {{ mobileapp }} %
            </h3>
            <v-progress-linear
              v-model="mobileapp"
              rounded
              striped
              class="my-2"
              color="indigo lighten-2"
              height="12"
            />
            <br>
            <h3 class="subtitle2 green--text text--darken-1 mb-2 text-subtitle-2 text-md-h6 font-weight-light">
              <v-icon class="green--text text--darken-1 mr-3">
                mdi-clock
              </v-icon>
              Real Time Applications {{ realtime }} %
            </h3>
            <v-progress-linear
              v-model="realtime"
              rounded
              striped
              class="my-2"
              color="green lighten-2"
              height="12"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <Hestate />
  </v-app>
</template>

<script>
import Hestate from '~/components/Hestate.vue'
export default {
  components: {
    Hestate
  },
  data () {
    return {
      web: 98,
      software: 96,
      realtime: 90,
      mobileapp: 99
    }
  }
}
</script>

<style scoped>
   .hero{
     background-image: url('/imgs/white.jpg');
     background-size: cover;
     height: 100vh;
   }
.about{
  background-image: url('/imgs/about.svg');
  background-size: cover;
  height: 50vh;
}
.section{
  background-image: url('/imgs/section.jpg');
  background-size: cover;
  height: 60vh;
}
.inner-row{
  height: 100%;
}
.myfont{
  font-family: 'Cormorant Garamond', serif !important;
}
.myfont2{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.card-border{
  border: 1px solid rgba(155, 155, 155, 0.651);
}
</style>
