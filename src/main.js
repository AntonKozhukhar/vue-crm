import Vue from 'vue'
import {Vuelidate} from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from './utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyBJvjFkxiFgu-IlYHk-eGPtb4DGRgSFPII',
  authDomain: 'vue-crm-c24c2.firebaseapp.com',
  projectId: 'vue-crm-c24c2',
  storageBucket: 'vue-crm-c24c2.appspot.com',
  messagingSenderId: '783660721256',
  appId: '1:783660721256:web:6ff02cd5e3c2b297df87dd',
  measurementId: 'G-EP85VZ9G70',
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
})



