<template>
  <div id="contact">
    <v-container pt-15>
      <v-row justify="center">
        <v-col cols="12">
          <div class="text-center display-1 font-weight-regular white--text">
            Send me a message
          </div>
        </v-col>
      </v-row>
      <v-form @submit.prevent="addContactDetails">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="6" sm="8">
              <v-text-field
                dark
                v-model="fullname"
                label="Full Name"
                placeholder="Kindly enter your full name here"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="6" sm="8">
              <v-text-field
                dark
                v-model="email"
                label="Email"
                placeholder="Kindly enter your email name here"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="6" sm="8">
              <v-textarea
                dark
                v-model="message"
                label="Your Message"
                placeholder="Kindly enter your message name here"
                outlined
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="6" sm="8">
              <v-btn
                type="submit"
                class="grey lighten-2"
                @click.stop="dialog = true"
                >Submit</v-btn
              >

              <!-- <v-dialog v-model="dialog" max-width="290">
                <v-card>
                  <v-card-title class="headline">
                    Use Google's location service?
                  </v-card-title>

                  <v-card-text>
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are
                    running.
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="dialog = false">
                      Disagree
                    </v-btn>

                    <v-btn color="green darken-1" text @click="dialog = false">
                      Agree
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog> -->
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import { db } from "@/main.js";
export default {
  name: "Contact",
  data: () => ({
    // dialog: false,
    fullname: "",
    email: "",
    message: "",
  }),
  methods: {
    async addContactDetails() {
      if (this.fullname && this.email && this.message) {
        await db.collection("contactInfo").add({
          fullname: this.fullname,
          email: this.email,
          message: this.message,
        });

        this.fullname = "";
        this.email = "";
        this.message = "";

        alert("Your Message was succesfully submitted");
      } else {
        alert("Fullname, email and messsage are required");
      }
    },
  },
};
</script>

<style scoped>
#contact {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
