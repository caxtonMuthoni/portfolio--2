<template>
  <v-app>
    <HeroSection title="What Services will you get ???" />
    <v-container>
      <v-row justify="center" class="my-5">
        <v-col md="10" cols="12">
          <h2 class="indigo--text text--darken-3 ma-5">
            High Quality Services
          </h2>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="/imgs/about.svg" />
        </v-col>
        <v-col md="5" cols="12">
          <h3 class="orange--text text--darken-4 my-5">
            Quality Services
          </h3>
          <v-divider class="my-5" />
          <p class="my-5 text-body-1">
            My goal is to create a product that will provide the maximum value for the client’s investment.
            To accomplish this, I develop a consultant mindset that lets me delve
            into the business context and closely manage my time, my clients’ needs, and budget. Through innovative
            tech solutions your business is elevated to a world class level.
          </p>
          <p class="my-5 text-body-1">
            Elevate your business now with <b class="indigo--text text--darken-3">Cagi</b><b class="orange--text text--darken-3">Moto</b>.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <div class="services">
      <v-container>
        <v-row>
          <v-col md="10" cols="12">
            <h2 class="indigo--text text--darken-3 ma-5">
              Services Provided
            </h2>
            <v-divider class="my-4" />
          </v-col>
          <v-col v-for="service in services" :key="service.icon" cols="12" md="6">
            <div class="indigo--text text--darken-3 text-body-2 mx-5">
              <h3 class="d-flex flex-row">
                <v-icon left class="indigo--text text--darken-3">
                  {{ service.icon }}
                </v-icon> <span class="my-auto">{{ service.title }}</span>
              </h3>
            </div>
            <p class="ma-5 text-body-1">
              {{ service.description }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <Hestate class="hestate" />
  </v-app>
</template>
<script>
import HeroSection from '~/components/Hero.vue'
import Hestate from '~/components/Hestate.vue'
export default {
  components: {
    HeroSection,
    Hestate
  },
  data () {
    return {
      title: 'Services and technologies offered by Caxton Muthoni',
      services: [
        {
          title: 'Web Development',
          description: 'I specialize in designing custom, responsive websites, company logos, and business cards at absolutely affordable prices to enhance your company online presence.',
          icon: 'mdi-battlenet'
        },
        {
          title: 'Software Development',
          description: 'We focus in producing brilliant websites that give your organisation a responsive online presence. Using the latest technologies, we give you a new brand online',
          icon: 'mdi-artstation'
        },
        {
          title: 'Mobile Application Development',
          description: 'We connect your business to the large community of mobile users by providing it with awesome mordern applications. Our app are of high quality with an ease of use by the customers.',
          icon: 'mdi-cellphone-message'
        },
        {
          title: 'Realtime Application Development',
          description: 'Get unique real-time reporting applications  that functions within a time frame that the user senses as immediate or current.',
          icon: 'mdi-clock'
        }
      ]
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
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
  .services{
    background: #f4f4f4;
  }
  .hestate{
    margin: 0 !important;
  }
</style>
