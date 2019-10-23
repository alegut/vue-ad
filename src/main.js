import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyBBK7EBNdF3PZXxl_8sKh6QBodV01ZSkNs",
      authDomain: "vue-ad-study.firebaseapp.com",
      databaseURL: "https://vue-ad-study.firebaseio.com",
      projectId: "vue-ad-study",
      storageBucket: "vue-ad-study.appspot.com",
      messagingSenderId: "512133807594",
      appId: "1:512133807594:web:6204add9f759d547120693",
      measurementId: "G-9CEVESW9Z2"
    });
  },
  render: h => h(App)
}).$mount('#app')
