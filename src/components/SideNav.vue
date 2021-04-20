<template>
  <div>
    <v-list dense>
      <v-list-item
        v-for="link in links"
        :key="link.id"
        @click="hideDrawer"
        active-class="deep-purple--text text--accent-4"
      >
      <v-icon></v-icon>
        <v-btn text :href="link.url"
          ><v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon> </v-list-item-icon
          >{{ link.label }}</v-btn
        >
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  data: () => ({
    links: [
      {
        id: uuid.v4(),
        label: "Home",
        url: "#home",
        icon: "mdi-home",
      },
      {
        id: uuid.v4(),
        label: "Works",
        url: "#works",
        icon: "mdi-wallet-travel",
      },
      {
        id: uuid.v4(),
        label: "Contact",
        url: "#contact",
        icon: "mdi-cellphone-iphone",
      },
    ],
  }),
  props: {
    hideDrawer: Function,
  },
};
</script>

<style lang="scss" scoped></style>
