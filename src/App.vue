<template>
  <v-app>
    <!-- <v-container> -->
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
      <v-list-item v-for="link of links" :key="link.title" :to="link.url">
        <v-list-item-icon>
          <v-icon color="primary">mdi-{{link.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <div>
      <v-app-bar dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Ad Application</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="link in links" :key="link.title" :to="link.url">
          <v-icon left >mdi-{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>       
      </v-toolbar-items>
    </v-app-bar>
    </div>
    <v-content>
        <router-view></router-view>
    </v-content>
    <!-- </v-container> -->
    <template v-if="error">
        <v-snackbar
          :multi-line="true"
          :timeout="5000"
          color="error"
          @input="closeError"
          :value="true"
        >
          {{error}}
          <v-btn dark text @click="closeError">Close</v-btn>
        </v-snackbar>
    </template>

  </v-app>

</template>

<script>
export default {
  name: 'App', 
  data:() => ({
    drawer: false,
    links: [
      {title: 'Login', icon: 'lock', url: '/login'},
      {title: 'Registration', icon: 'face', url: '/registration'},
      {title: 'Orders', icon: 'bookmark-outline', url: '/orders'},
      {title: 'New Ad', icon: 'page-next-outline', url: '/new'},
      {title: 'My ads', icon: 'format-list-checkbox', url: '/list'},
    ]
  }),
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch('clearError')
    }
  }
  
};
</script>

<style lang="scss">
  .pointer {
    cursor: pointer;
  }
</style>