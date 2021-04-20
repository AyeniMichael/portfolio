<template>
  <div id="works">
    <v-container pt-15>
      <v-row justify="center">
        <v-col cols="12">
          <div class="text-center display-1 font-weight-regular white--text">
            Here are my Projects
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" v-for="work in works" :key="work.id">
          <v-card>
            <v-img
              height="15rem"
              contain
              :src="work.image"
              gradient="to top, rgba(0,0,0,.14), rgba(0,0,0,.14)"
            >
            </v-img>
            <v-card-title class="display-1 font-weight-regular mb-3"
              >{{ work.name }}
            </v-card-title>
            <v-card-subtitle class="title font-weight-light">
              <div>
                <strong>STATUS: {{ work.status }}</strong>
              </div>
              <div>{{ work.description }}</div>
              <div class="mt-2"><strong>Technologies Used</strong></div>
              <div>{{ work.tools[0].name }}</div>
              <div>{{ work.tools[1].name }}</div>
              <div>{{ work.tools[2].name }}</div>
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                type="submit"
                :href="work.link"
                target="blank"
                color="rgba(255,0,0,1.0)"
                dark
              >
                VISIT
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";

export default {
  name: "Projects",
  data: () => ({
    works: [
      {
        id: uuid.v4(),
        name: "Vue Calendar App",
        image: "vuecalendar.jpg",
        status: "Completed",
        link: "https://vue-calendar-gamma.vercel.app/",
        description:
          "This is a calender app that let's you create, update and Delete an event on the calender",
        tools: [
          {
            name: "VueJs",
            icon: "mdi-",
            link: "",
          },
          {
            name: "Vuetify",
            icon: "mdi-",
            link: "",
          },
          {
            name: "Firebase",
            icon: "mdi",
          },
        ],
      },
      {
        id: uuid.v4(),
        name: "Event App",
        image: "eventsite.jpg",
        status: "Ongoing",
        description:
          "This is an event app that let's you create, update and Delete an event",
        tools: [
          {
            name: "VueJs",
            icon: "mdi-",
            link: "",
          },
          {
            name: "Vuetify",
            icon: "mdi-",
            link: "",
          },
          {
            name: "Firebase",
            icon: "mdi",
          },
        ],
      },
    ],
  }),
};
</script>

<style scoped>
#works {
  /* background: url(/landingbackground.jpg);
  background-size: cover; */
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
