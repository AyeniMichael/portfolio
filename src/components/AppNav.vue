<template>
  <div>
    <v-app-bar color="rgba(255,0,0,1.0)" flat dark app>
      <v-btn dense text rounded :to="{ name: 'HomePage' }"
        ><v-toolbar-title>{{ appTitle }}</v-toolbar-title></v-btn
      >
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.id"
        class="d-none d-sm-flex"
        text
        rounded
        :to="{ name: link.url }"
      >
        {{ link.label }}
      </v-btn>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- SIDE NAVIGATION -->
    <v-navigation-drawer
      color="rgba(255,0,0,0.8)"
      v-model="drawer"
      absolute
      dark
      temporary
      right
    >
      <v-list nav dense>
        <v-list-item
          v-for="link in links"
          :key="link.id"
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-btn text :to="{ name: link.url }"
            ><v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon> </v-list-item-icon
            >{{ link.label }}</v-btn
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  name: "AppNav",
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
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.appTitle {
  text-decoration: none;
}
</style>
