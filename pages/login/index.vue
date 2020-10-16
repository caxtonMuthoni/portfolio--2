<template>
  <v-app>
    <HeroSection title="Admin Sign In" />
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="7">
          <v-card class="pa-5">
            <v-card-title class="orange--text text--darken-4 text-uppercase my-3">
              Sign In
            </v-card-title>
            <v-divider class="my-2" />
            <v-form class="ma-5">
              <v-text-field v-model="email" prepend-icon="mdi-email" label="Email" type="Email" />
              <v-text-field v-model="password" prepend-icon="mdi-lock" label="Password" type="password" />
              <v-card-actions>
                <v-spacer />
                <v-btn dark class="rounded" color="indigo darken-3 right" @click=" signIn">
                  Sign in
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import HeroSection from '~/components/Hero.vue'
export default {
  components: {
    HeroSection
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted () {
    // this.createUser()
  },
  methods: {
    createUser () {
      this.$fireAuth.createUserWithEmailAndPassword(
        'githinjicaxton323@gmail.com', 'cagimu865admin'
      ).then(() => {
        // console.log('User created successfully !!!')
      }).catch((error) => {
        this.$swal(
          {
            icon: 'error',
            title: 'Sorry !!',
            subtitle: error.message
          }
        )
      })
    },
    signIn () {
      this.$nuxt.$loading.start()
      this.$fireAuth.signInWithEmailAndPassword(this.email, this.password).then((user) => {
        this.$nuxt.$loading.finish()
        this.$router.push({ path: '/admin' })
      }).catch((error) => {
        this.$nuxt.$loading.finish()
        this.$swal(
          {
            icon: 'error',
            title: 'Sorry !!',
            text: error.message
          }
        )
      })
    }
  }
}
</script>
