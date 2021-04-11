<template>
  <div>
    <v-list dense>
      <v-list-item
        v-for="link in links"
        :key="link.id"
        @click="hideDrawer"
        active-class="deep-purple--text text--accent-4"
      >
        <v-btn text :to="{ name: link.url }"
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
  }),
  props: {
    hideDrawer: Function,
  },
};
</script>

<style lang="scss" scoped></style>
