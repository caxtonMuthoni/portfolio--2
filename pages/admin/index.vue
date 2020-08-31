<template>
  <v-app>
    <HeroSection title="Administration" />
    <v-container>
      <v-btn bottom fixed fab color="red" @click="logoutUser">
        <v-icon class="white--text">
          mdi-power-standby
        </v-icon>
      </v-btn>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="messages"
        :single-select="singleSelect"
        item-key="id"
        show-select
        class="elevation-1 ma-5"
      >
        <template v-slot:top>
          <v-switch v-model="singleSelect" label="Single select" class="pa-3" />
        </template>
        <template v-slot:item.actions="{ item }">
          <a class="link-item orange--text text--darken-4" :href="'mailto:' + item.email">
            Mail
            <v-icon
              small
              class="mr-2 orange--text text--darken-4"
            >
              mdi-send
            </v-icon></a>
        </template>
      </v-data-table>
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
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name'
        },
        { text: 'Email', value: 'email' },
        { text: 'subject', value: 'subject' },
        { text: 'message', value: 'message' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      messages: []
    }
  },
  mounted () {
    this.checkAuth()
  },
  methods: {
    checkAuth () {
      this.$fireAuth.onAuthStateChanged((user) => {
        if (user) {
          this.fetchMessages()
        } else {
          this.$router.push({ path: '/' })
        }
      })
    },
    fetchMessages () {
      let msgs = []
      this.$fireStore.collection('messages').onSnapshot((data) => {
        msgs = data.docs
        this.$nuxt.$loading.finish()
        this.setUpMessages(msgs)
      })
    },
    setUpMessages (docs) {
      docs.forEach((doc) => {
        this.messages.push(doc.data())
      })
    },
    logoutUser () {
      this.$fireAuth.signOut()
    }
  }
}
</script>
<style scoped>
.link-item{
    text-decoration: none !important;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
}

</style>
