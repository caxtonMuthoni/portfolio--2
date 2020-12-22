<template>
  <v-app>
    <HeroSection title="Get In Touch Now !!!" />
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-card>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817476633492!2d36.360172913836685!3d0.03726126439856333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178763cf8e9b9e5f%3A0xde2aee966ad0042c!2sNyahururu%20Police%20Station%2C%20C77%2C%20Nyahururu!5e0!3m2!1sen!2ske!4v1598686596230!5m2!1sen!2ske"
              width="100%"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" md="8">
          <h2 class="my-3 orange--text text--darken-4">
            Get In Touch
          </h2>
          <v-divider class="my-2" />
          <form class="py-5 my-5">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="name"
                  outlined
                  :error-messages="nameErrors"
                  :counter="10"
                  label="Name"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  outlined
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                />
              </v-col>
            </v-row>
            <v-text-field
              v-model="subject"
              :error-messages="subjectErrors"
              :counter="20"
              outlined=""
              label="Subject"
              required
              @input="$v.subject.$touch()"
              @blur="$v.subject.$touch()"
            />
            <v-textarea
              v-model="message"
              label="Message"
              rows="5"
              outlined
              :error-messages="messageErrors"
              :counter="500"
              @input="$v.message.$touch()"
              @blur="$v.message.$touch()"
            />

            <div class="text-right my-5">
              <v-btn class="mr-2" color="red" outlined @click="clear">
                <v-icon left>
                  mdi-cancel
                </v-icon>
                clear
              </v-btn>
              <v-btn class="" outlined color="indigo darken-4" @click="submit">
                <v-icon left>
                  mdi-send
                </v-icon>
                send
              </v-btn>
            </div>
          </form>
        </v-col>
        <v-col cols="12" md="4" class="ma-auto">
          <div class="ma-5">
            <h3 class="indigo--text text--darken-3">
              <v-icon class="indigo--text text--darken-3">
                mdi-home
              </v-icon> <span>Nyahururu Kenya</span>
            </h3>
            <p class="text-caption grey--text">
              Our main headquaters
            </p>
          </div>
          <v-divider />
          <div class="ma-5">
            <h3 class="indigo--text text--darken-3">
              <v-icon class="indigo--text text--darken-3">
                mdi-phone
              </v-icon> <span>+254 743 751 575</span>
            </h3>
            <p class="text-caption grey--text">
              Call Any time you need help.
            </p>
          </div>
          <v-divider />
          <div class="ma-5">
            <h3 class="indigo--text text--darken-3">
              <v-icon class="indigo--text text--darken-3">
                mdi-email
              </v-icon> <span>githinjicaxton323@gmail.com</span>
            </h3>
            <p class="text-caption grey--text">
              Send any query here at any time.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import HeroSection from '~/components/Hero.vue'
export default {
  components: {
    HeroSection
  },
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    subject: { required, maxLength: maxLength(50) },
    message: { required, maxLength: maxLength(500) },
    email: { required, email }
  },
  data: () => ({
    title: 'Get in touch with Caxton',
    name: '',
    email: '',
    subject: '',
    message: ''
  }),
  head () {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
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
  },
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) { return errors }
      !this.$v.name.maxLength && errors.push('Name must be at most 50 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    subjectErrors () {
      const errors = []
      if (!this.$v.subject.$dirty) { return errors }
      !this.$v.subject.maxLength && errors.push('Subject must be at most 20 characters long')
      !this.$v.subject.required && errors.push('Subject is required.')
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) { return errors }
      !this.$v.message.maxLength && errors.push('Message must be at most 500 characters long')
      !this.$v.message.required && errors.push('Message is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) { return errors }
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
      if (this.$v.$error) { return }
      this.$nuxt.$loading.start()
      // to form submit after this
      this.$fireStore.collection('messages').add({
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      }).then(() => {
        this.$nuxt.$loading.finish()
        this.clear()
        this.$swal({
          title: 'Sent',
          text: 'Thanks for contacting us. We will get to you soon.',
          icon: 'success'
        })
      }).catch((error) => {
        this.$nuxt.$loading.finish()
        this.$swal({
          title: 'Failed',
          text: error,
          icon: 'error'
        })
      })
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    }
  }

}
</script>
