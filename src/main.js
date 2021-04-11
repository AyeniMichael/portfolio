import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueTyperPlugin from "vue-typer";
import VueKinesis from "vue-kinesis";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTyperPlugin);
Vue.use(VueKinesis);
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCwxgY4eNTXA7qEjIcNVj6x0xU0zbv5-Sw",
  authDomain: "portfolio-1011a.firebaseapp.com",
  projectId: "portfolio-1011a",
  storageBucket: "portfolio-1011a.appspot.com",
  messagingSenderId: "444245189591",
  appId: "1:444245189591:web:3a64ff0d4fbc4fb2dae192",
});

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
