<template>
  <v-app>
    <HeroSection title="Who is CagiMoto ??" />
    <v-container>
      <v-row justify="center" class="my-5">
        <v-col md="5" cols="12">
          <h3 class="orange--text text--darken-4 my-5">
            About Me
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
        <v-col cols="12" md="6">
          <v-img src="/imgs/about.svg" />
        </v-col>
      </v-row>
      <v-row justify="center" class="my-5">
        <v-col cols="12" md="10">
          <h3 class="orange--text text--darken-4 mb-2">
            Technologies
          </h3>
          <p class="my-5 text-caption indigo--text text-darken-3">
            I have over 5 years of experince in the following technologies.
          </p>
          <v-divider class="mb-5" />
        </v-col>
        <v-col v-for="tech in technologies" :key="tech.name" cols="6" sm="6" md="3">
          <v-hover v-slot:default="{hover}">
            <v-card class="text-center pa-5 elevation-0 tech-card " :class="{'hovered':hover}">
              <v-avatar size="100">
                <v-img :src="tech.icon" />
              </v-avatar>
              <h4 class="text--darken-4 orange--text mt-5">
                {{ tech.name }}
              </h4>
              <p class="my-3 text-body-1">
                {{ tech.use }}
              </p>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <Hestate />
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
      technologies: [
        {
          icon: '/imgs/flutter.png',
          name: 'Flutter',
          use: 'Android and IOS'
        },
        {
          icon: '/imgs/vue.png',
          name: 'Vue',
          use: 'Frontend development'
        },
        {
          icon: '/imgs/laravel.png',
          name: 'Laravel',
          use: 'Backend development'
        },
        {
          icon: '/imgs/django.png',
          name: 'Django',
          use: 'Backend development'
        },
        {
          icon: '/imgs/python.jpeg',
          name: 'Python',
          use: 'Backend development'
        },
        {
          icon: '/imgs/php.png',
          name: 'PHP',
          use: 'Backend development'
        },
        {
          icon: '/imgs/html.jpeg',
          name: 'HTML/CSS/JS',
          use: 'Frontend development'
        },
        {
          icon: '/imgs/graphql.png',
          name: 'Graphql',
          use: 'API development'
        }
      ]
    }
  }
}
</script>

<style scoped>

.tech-card{
  border: 1px solid rgba(173, 173, 173, 0.562);
}
.hovered{
  border-left: 3px solid #E65100;
  border-top:  5px solid #E65100;
}
.inner-row{
  height: 100%;
}
.myfont{
  font-family: 'Cormorant Garamond', serif !important;
}
</style>
