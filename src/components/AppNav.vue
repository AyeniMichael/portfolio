<template>
  <div>
    <v-app-bar app color="rgba(255,0,0,1.0)" flat dark outlined clipped-right>
      <v-toolbar-title>
        <a
          class="white--text font-weight-regular"
          @click="$vuetify.goTo(links[0].url)"
        >
          {{ appTitle }}</a
        ></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-card-subtitle
        v-for="link in links"
        :key="link.id"
        v-show="!mobile"
        text
        rounded
      >
        <a class="white--text" @click="$vuetify.goTo(link.url)">
          <v-icon class="mr-1">{{ link.icon }}</v-icon
          >{{ link.label }}</a
        >
      </v-card-subtitle>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-show="mobile"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- SIDE NAVIGATION -->
    <v-navigation-drawer
      :app="mobile"
      color="rgba(255,0,0,0.9)"
      v-model="drawer"
      v-show="mobile"
      dark
      clipped
      right
    >
      <v-row justify="end" class="pa-5">
        <v-icon @click="drawer = false">mdi-close</v-icon>
      </v-row>

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
        label: "HOME",
        url: "#home",
        icon: "mdi-home",
      },
      {
        id: uuid.v4(),
        label: "WORKS",
        url: "#works",
        icon: "mdi-wallet-travel",
      },
      {
        id: uuid.v4(),
        label: "CONTACT",
        url: "#contact",
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
