import Vue from 'vue'
import {Vuelidate} from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import messagePlugin from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)

Vue.filter('date', dateFilter)

const firebaseConfig = {
  apiKey: "AIzaSyB687D18wz-K_Z6IsFSDWFhUqHlb0Y7kCo",
  authDomain: "vue-crm-ba4b8.firebaseapp.com",
  projectId: "vue-crm-ba4b8",
  storageBucket: "vue-crm-ba4b8.appspot.com",
  messagingSenderId: "985072176672",
  appId: "1:985072176672:web:ce03284d206744da093645",
  measurementId: "G-238BZKWTT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let appVue

const auth = getAuth();
onAuthStateChanged(auth, () => {
  if (!appVue) {
    appVue = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
});

