<template>
  <v-app light class="pa-0">
    <div class="hero">
      <div class="image-overay">
        <v-container>
          <v-row justify="center" class="content-container">
            <v-col sm="12" lg="7" class="text-left ma-auto pa-5">
              <p
                class="orange--text text--darken-4 text-subtitle-2 text-uppercase"
              >
                Get All Tech solutions
              </p>
              <h1 class="my-name indigo--text text--darken-4">
                MUTHONI G. CAXTON
              </h1>
              <p class="occupation indigo--text text--darken-4">
                I’m an innovative software engineer with 7+ years of experience
                managing all aspects of the development process for small to
                medium-sized companies
              </p>
              <v-btn
                rounded
                depressed
                route
                to="/portfolio"
                class="text-capitalize orange darken-4 white--text mt-2"
              >
                View my previous work
              </v-btn>
              <div class="stretch-big" />
            </v-col>
            <v-col sm="12" lg="5" class="text-center ma-aut">
              <v-responsive>
                <v-lazy
                  v-model="isActive"
                  :options="{
                    threshold: 0.5,
                  }"
                  min-height="150"
                  transition="fade-transition"
                >
                  <v-img src="/imgs/home.png" class="img-home" />
                </v-lazy>
              </v-responsive>
              <div class="mt-5" />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div class="services">
      <v-container class="my-5 ">
        <v-row justify="center" class="mb-5 row-contents">
          <v-col cols="12" md="10" class="text-center mb-5">
            <h3 class="grey--text text--darken-2 text-md-h5 mb-5">
              <b class="indigo--text text--darken-3">Cagi</b><b class="orange--text text--darken-3">Moto's</b> High quality
              services.
            </h3>
            <v-divider class="my-5" />
          </v-col>
          <v-col cols="11" sm="12" md="4" class="pa-2">
            <v-hover
              v-slot="{ hover }"
              open-delay="100"
              close-delay="100"
            >
              <v-card
                class="pa-5 text-center elevation-0 card-service"
                :class="{
                  'transition-fast-in-fast-out blue lighten-2 white--text': hover,
                }"
              >
                <v-avatar size="62" rounded="50" color="orange lighten-4">
                  <v-icon x-large class="orange--text text--darken-4">
                    mdi-battlenet
                  </v-icon>
                </v-avatar>
                <h3 class="orange--text text--darken-4 mt-2 font-weight-light">
                  Web Design
                </h3>
                <v-card-text class="myfont2 subtitle-1">
                  I specialize in designing custom, responsive websites, company
                  logos, and business cards at absolutely affordable prices to
                  enhance your company online presence.
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="11" sm="12" md="4" class="pa-2">
            <v-hover
              v-slot="{ hover }"
              open-delay="100"
              close-delay="100"
            >
              <v-card
                class="pa-5 text-center elevation-0 card-service"
                :class="{
                  'transition-fast-in-fast-out blue lighten-2 white--text': hover,
                }"
              >
                <v-avatar size="62" rounded="50" color="orange lighten-4">
                  <v-icon x-large class="orange--text text--darken-4">
                    mdi-artstation
                  </v-icon>
                </v-avatar>
                <h3 class="orange--text text--darken-4 mt-2 font-weight-light">
                  Software Development
                </h3>
                <v-card-text class="myfont2 subtitle-1">
                  I focus in producing brilliant websites that give your
                  organisation a responsive online presence. Using the latest
                  technologies, I create a new brand for your business.
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>

          <v-col cols="12" md="4" class="pa-2">
            <v-hover
              v-slot="{ hover }"
              open-delay="100"
              close-delay="100"
            >
              <v-card
                class="pa-5 text-center elevation-0 card-service"
                :class="{
                  'transition-fast-in-fast-out blue lighten-2 white--text': hover,
                }"
              >
                <v-avatar size="62" rounded="50" color="orange lighten-4">
                  <v-icon
                    x-large
                    class="orange--text text--darken-4 font-weight-light"
                  >
                    mdi-cellphone-message
                  </v-icon>
                </v-avatar>
                <h3 class="orange--text text--darken-4 mt-2 font-weight-light">
                  Mobile Application
                </h3>
                <v-card-text class="myfont2 subtitle-1">
                  I will connect your business to the large community of mobile
                  users by providing it with awesome mordern applications. My apps
                  are of high quality with an ease of use by the customers.
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
              7+ years of Experience
            </h2>
            <v-divider class="mb-4" />
            <p class="text-body-1">
              I’m an innovative software engineer with 7+ years of experience
              managing all aspects of the development process for small to
              medium-sized companies
            </p>
            <p class="text-body-1">
              I am a geek. I love computers. I love everything about them. I
              spend eight to ten hours a day in front of a computer screen as I
              am coding, debugging, or discussing coding practices and methods
              with other programmers.
            </p>
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
      title: 'Caxton G. Muthoni|Software developer',
      web: 98,
      software: 96,
      realtime: 90,
      mobileapp: 99,
      isActive: false
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { charset: 'wfewf' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            ' I’m an innovative software engineer with 7+ years of experience managing all aspects of the development process for small to medium-sized companies'
        },
        {
          name: 'google-site-verification',
          content: 'YSkrq7cuBs2kFj7hPwp897439El7SDuib85NvSYYpwE'
        },
        { hid: 'og:image', property: 'og:image', content: '/imgs/home.png' }
      ]
    }
  }
}
</script>

<style scoped>

.my-name {
  font-family: "Rubik", Arial, sans-serif;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  font-size: 52px;
}
.occupation {
  font-family: "Lato", Arial, sans-serif;
  font-weight: 300;
  text-rendering: optimizeLegibility;
  font-size: 32px;
  line-height: 45px;
}
.hero {
  background-image: url("/imgs/wave.svg");
  background-size: cover;
  height: auto;
  background-repeat: no-repeat;
  background-position: fixed;
}
.image-overay {
  background: rgba(255, 138, 4, 0.58);
  height: 100%;
}
.content-container {
  margin-top: 80px;
}
.img-home {
  border-radius: 50px;
}

.services{
  background: #f4f4f4;
}

.card-service{
  background: #fff;
  box-shadow: 0 2px 2px rgb(206, 206, 206) !important;
}

.about {
  background-image: url("/imgs/about.svg");
  background-size: cover;
  height: 50vh;
  background-position: center;
}
.section {
  background-image: url("/imgs/section.jpg");
  background-size: cover;
  height: 60vh;
}
.inner-row {
  height: 100%;
}
.card-border {
  border: 1px solid rgba(155, 155, 155, 0.651);
}
@media screen and (min-width: 760px) {
  .stretch-big {
    height: 150px;
  }
  .row-contents {
    width: 90%;
    margin-left: 5%;
  }
}
@media screen and (max-width: 760px) {
  .content-container {
    margin-top: 35px;
  }
  .my-name {
    font-size: 30px;
  }
.services{
  background: rgb(221, 221, 221);
}
  .occupation {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>
