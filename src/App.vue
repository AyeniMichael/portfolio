<template>
  <v-app>
    <AppNav />

    <v-main height="100vh" transition="slide-x-transition">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",

  components: { AppNav, Footer },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
