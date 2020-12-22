<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      left
      light
    >
      <v-container class="text-center">
        <v-toolbar-title><b class="indigo--text text--darken-3">Cagi</b><b class="orange--text text--darken-3">Moto</b> </v-toolbar-title>
      </v-container>
      <v-divider />
      <v-list dense>
        <v-list-item
          v-for="(item, index) in links"
          :key="index"
          router
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.link }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item class="mt-5">
          <v-container>
            <v-btn route to="/contact" class="text-capitalize orange darken-4 white--text">
              Get free consultation
            </v-btn>
          </v-container>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      inverted-scroll
      fixed
      color="white"
      class="elevation-0 app-bar"
    >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer= !drawer" />
      <v-toolbar-title><b class="indigo--text text--darken-3">Cagi</b><b class="orange--text text--darken-3">Moto</b> </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          router
          :to="link.to"
          text
          class="text-capitalize"
          depressed
        >
          {{ link.link }}
        </v-btn>
        <v-container>
          <v-btn route to="/contact" class="text-capitalize orange darken-4 white--text">
            Get free consultation
          </v-btn>
        </v-container>
      </v-toolbar-items>
    </v-app-bar>
    <v-main
      light
    >
      <nuxt />
    </v-main>
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="(icon, index) in icons"
            :key="index"
            class="mx-4 white--text"
            icon
            :href="icon.link"
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0 text-body-1">
          My goal is to create a product that will provide the maximum value for the client’s investment.
          To accomplish this, I develop a consultant mindset that lets me delve
          into the business context and closely manage my time, my clients’ needs, and budget.
        </v-card-text>

        <v-divider />

        <v-card-text class="white--text">
          &copy; {{ new Date().getFullYear() }} --
          <strong>
            <b class="indigo--text text--darken-3">Cagi</b>
            <b class="orange--text text--darken-3">Moto </b>
            Made with <v-icon>mdi-heart</v-icon> by Caxton Muthoni
          </strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      class="md-5 mr-3 elevation-21"
      dark
      fab
      bottom
      inverted-scroll
      ripple
      right
      color="orange darken-3"
      fixed
      @click="top"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        {
          icon: 'mdi-facebook',
          link: 'https://www.facebook.com/caxton.mathitu/'
        },
        {
          icon: 'mdi-twitter',
          link: 'https://twitter.com/caxton_muthoni'
        },
        {
          icon: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/caxton-githinji-7b2444175/'
        },
        {
          icon: 'mdi-whatsapp',
          link: 'https://api.whatsapp.com/send?phone=+254743751575'
        }
      ],
      links: [
        {
          link: 'Home',
          to: '/',
          icon: 'mdi-home'

        },
        {
          link: 'About',
          to: '/about',
          icon: 'mdi-atlassian'

        },
        {
          link: 'Services',
          to: '/services',
          icon: 'mdi-alarm-bell'

        },
        {
          link: 'Portfolio',
          to: '/portfolio',
          icon: 'mdi-badge-account-horizontal'

        },
        {
          link: 'Contact',
          to: '/contact',
          icon: 'mdi-phone'

        }
      ],
      drawer: false,
      fab: false
    }
  },
  methods: {
    top () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },
    onScroll (e) {
      if (typeof window === 'undefined') { return }
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 200
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
<style scoped>
.v-btn--active{
  color: orangered;
}
.v-btn--active::before{
  background-color: transparent;
}

.v-list-item--active{
   color: orangered;
}
.app-bar{
     display: block;
     border-bottom: 1px solid #d4d4d4 !important;
   }
</style>
<style>
   html{
     font-family: 'Lato', sans-serif  !important;
     font-weight: 300 !important;
     text-rendering: optimizeLegibility;
   }

</style>
