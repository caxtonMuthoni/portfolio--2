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
              <v-text-field v-model="email" rounded label="Email" type="Email" />
              <v-text-field v-model="password" rounded label="Password" type="password" />
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
        console.log('User created successfully !!!')
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
      this.$fireAuth.signInWithEmailAndPassword(this.email, this.password).then((user) => {
        console.log(user)
        this.$router.push({ path: '/admin' })
      }).catch((error) => {
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
