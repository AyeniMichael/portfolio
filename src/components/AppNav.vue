<template>
  <div>
    <v-app-bar
      app
      color="rgba(255,0,0,1.0)"
      flat
      dark
      outlined
      clipped-right
      :shrink-on-scroll="!mobile"
      elevate-on-scroll
    >
      <v-btn dense text rounded :to="{ name: 'HomePage' }"
        ><v-toolbar-title>{{ appTitle }}</v-toolbar-title></v-btn
      >
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.id"
        v-show="!mobile"
        text
        rounded
        :to="{ name: link.url }"
      >
        {{ link.label }}
      </v-btn>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-show="mobile"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- SIDE NAVIGATION -->
    <v-navigation-drawer
      :app="mobile"
      color="rgba(255,0,0,0.5)"
      v-model="drawer"
      v-show="mobile"
      dark
      clipped
      right
    >
      <SideNav :hideDrawer="hideDrawer" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import SideNav from "@/components/SideNav.vue";
export default {
  name: "AppNav",
  components: { SideNav },
  data: () => ({
    appTitle: "AYENI MICHAEL",
    links: [
      {
        id: uuid.v4(),
        label: "Home",
        url: "HomePage",
        icon: "mdi-home",
      },
      {
        id: uuid.v4(),
        label: "Works",
        url: "Works",
        icon: "mdi-wallet-travel",
      },
      {
        id: uuid.v4(),
        label: "Contact",
        url: "ContactPage",
        icon: "mdi-cellphone-iphone",
      },
    ],
    drawer: false,
  }),
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  watch: {
    mobile(newValue) {
      if (newValue) {
        this.drawer = false;
      }
    },
  },
  methods: {
    hideDrawer() {
      if (this.mobile) {
        this.drawer = false;
      }
    },
  },
};
</script>

<style scoped>
.appTitle {
  text-decoration: none;
}
</style>
