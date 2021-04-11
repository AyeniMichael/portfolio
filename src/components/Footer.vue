<template>
  <div>
    <v-footer color="rgba(255,0,0,1.0)" dense padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="item in footerIcons"
          :key="item.id"
          color="white"
          text
          rounded
          class="my-2"
          :href="item.link"
        >
          <kinesis-container
            ><kinesis-element>
              <v-icon> {{ item.icon }} </v-icon></kinesis-element
            ></kinesis-container
          >
        </v-btn>
        <v-col
          class="py-4 text-center white--text"
          color="rgba(255,0,0,0.6)"
          dense
          dark
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Ayeni Michael</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  name: "Footer",
  data: () => ({
    footerIcons: [
      {
        id: uuid.v4(),
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/ayeni-michael-1913a3167/",
      },
      {
        id: uuid.v4(),
        icon: "mdi-github",
        link: "https://github.com/AyeniMichael",
      },
      {
        id: uuid.v4(),
        icon: "mdi-codepen",
        link: "https://codepen.io/AyeniMichael",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
