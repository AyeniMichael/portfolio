<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="6">
          <div class="text-center display-2 font-weight-regular">My Works</div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" v-for="work in works" :key="work.id">
          <kinesis-container
            ><kinesis-element :strength="10">
              <v-card>
                <v-img
                  height="15rem"
                  :src="work.image"
                  gradient="to top, rgba(0,0,0,.24), rgba(0,0,0,.24)"
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
                    color="rgba(255,0,0,1.0)"
                    dark
                  >
                    VISIT
                  </v-btn>
                </v-card-actions>
              </v-card>
            </kinesis-element></kinesis-container
          >
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

<style lang="scss" scoped></style>
