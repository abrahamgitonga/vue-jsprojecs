// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import store from './store'


Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA0ie8X0BUhPb9EUWRwATwX93Dl0WlM7LI",
  authDomain: "vuextwcapp.firebaseapp.com",
  projectId: "vuextwcapp",
  storageBucket: "vuextwcapp.appspot.com",
  messagingSenderId: "585701396760",
  appId: "1:585701396760:web:eab5feb661e4666d0dce6d",
  measurementId: "G-PF49982YEG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase =firebase;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
