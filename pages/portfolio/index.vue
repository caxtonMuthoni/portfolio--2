<template>
  <v-app>
    <HeroSection title="My Portfolio." />
    <v-container>
      <v-row justify="center" class="my-5">
        <v-col md="5" cols="12">
          <h3 class="orange--text text--darken-4 my-5">
            My Portfolio
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
      <v-row>
        <v-col cols="12" md="10">
          <h3 class="ma-5 text--darkne-3 orange--text">
            Web Development
          </h3>
          <v-divider class="my-4" />
        </v-col>
        <v-col v-for="web in webs" :key="web.title" cols="12" md="6">
          <v-card class="pa-5 elevation-1">
            <v-row>
              <v-col cols="12" md="5">
                <v-img :src="web.image" />
              </v-col>
              <v-col cols="12" md="7">
                <v-card-title class="text--darken-3 indigo--text">
                  {{ web.title }}
                </v-card-title>
                <v-card-text> {{ web.description }}</v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn outlined color="orange darken-4" :href="web.link">
                    <v-icon left>
                      mdi-github
                    </v-icon>
                    view on github
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="10">
          <h3 class="ma-5 text--darkne-3 orange--text">
            Software Development
          </h3>
          <v-divider class="my-4" />
        </v-col>
        <v-col v-for="web in softwares" :key="web.title" cols="12" md="6">
          <v-card class="pa-5 elevation-1">
            <v-row>
              <v-col cols="12" md="5">
                <v-img :src="web.image" />
              </v-col>
              <v-col cols="12" md="7">
                <v-card-title class="text--darken-3 indigo--text">
                  {{ web.title }}
                </v-card-title>
                <v-card-text> {{ web.description }}</v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn outlined color="orange darken-4" :href="web.link">
                    <v-icon left>
                      mdi-github
                    </v-icon>
                    view on github
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="10">
          <h3 class="ma-5 text--darkne-3 orange--text">
            Mobile Development
          </h3>
          <v-divider class="my-4" />
        </v-col>
        <v-col v-for="web in mobiles" :key="web.title" cols="12" md="6">
          <v-card class="pa-5 elevation-1">
            <v-row>
              <v-col cols="12" md="5">
                <v-img :src="web.image" />
              </v-col>
              <v-col cols="12" md="7">
                <v-card-title class="text--darken-3 indigo--text">
                  {{ web.title }}
                </v-card-title>
                <v-card-text> {{ web.description }}</v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn outlined color="orange darken-4" :href="web.link">
                    <v-icon left>
                      mdi-github
                    </v-icon>
                    view in github
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
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
      title: 'Caxton Muthoni\'s projects and Achievements',
      webs: [
        {
          title: 'Intelligent Advisory System',
          description: 'A  online system that advises student on the best course depending on their performance',
          image: '/imgs/portfolio/course.jpeg',
          link: 'https://github.com/caxtonMuthoni/courseadvisory'
        },
        {
          title: 'Internships system',
          description: 'A  system that simplifies internship processing for companies and interns. It simplify serching for internships',
          image: '/imgs/portfolio/internship.png',
          link: ''
        }
      ],
      softwares: [
        {
          title: 'School LMS',
          description: 'An online platform that eases management and record keeping in a school',
          image: '/imgs/portfolio/school.jpeg',
          link: ''
        },
        {
          title: 'E Banking System',
          description: 'An online wallet that helps in making payments and ease transactions in East Africa  ',
          image: '/imgs/portfolio/webbank.jpeg',
          link: 'https://github.com/caxtonMuthoni/mobile-banking-admin'
        }
      ],
      mobiles: [
        {
          title: 'Mbanking App',
          description: 'An IOS & android application used in mobile banking.',
          image: '/imgs/portfolio/banking.jpeg',
          link: 'https://github.com/caxtonMuthoni/mbanking'
        }
      ]
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'portfolio',
          name: 'Caxton Muthoni G Projects',
          content: 'This is what Caxton Muthoni has done'
        }
      ]
    }
  }

}
</script>
