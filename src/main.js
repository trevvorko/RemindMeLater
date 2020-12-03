import Vue from 'vue'
import VuejsDialog from 'vuejs-dialog';
//import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'; // only needed in custom components
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
Vue.use(VuejsDialog);

import App from './App.vue'
import router from './router'
import firebase from "firebase/app"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYpwiSN3dIHJHjK3AKB1TVNcv-Ox2nM6c",
  authDomain: "remindmelater-21a9a.firebaseapp.com",
  databaseURL: "https://remindmelater-21a9a.firebaseio.com",
  projectId: "remindmelater-21a9a",
  storageBucket: "remindmelater-21a9a.appspot.com",
  messagingSenderId: "31526676206",
  appId: "1:31526676206:web:4dabf6998b3093097ef5ff",
  measurementId: "G-PH3G2DMG3V"
};
firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

