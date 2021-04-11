<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="6">
          <div class="text-center display-1 font-weight-regular">
            Send me a message
          </div>
        </v-col>
      </v-row>
      <v-form @submit.prevent="addContactDetails">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="6" sm="8">
              <kinesis-container
                ><kinesis-element
                  ><v-text-field
                    v-model="fullname"
                    label="First Name"
                    placeholder="Kindly enter your first name here"
                    outlined
                  ></v-text-field></kinesis-element
              ></kinesis-container>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="6" sm="8">
              <kinesis-container
                ><kinesis-element
                  ><v-text-field
                    v-model="email"
                    label="Email"
                    placeholder="Kindly enter your email name here"
                    outlined
                  ></v-text-field></kinesis-element
              ></kinesis-container>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="6" sm="8">
              <kinesis-container
                ><kinesis-element>
                  <v-textarea
                    v-model="message"
                    label="Your Message"
                    placeholder="Kindly enter your message name here"
                    outlined
                  ></v-textarea></kinesis-element
              ></kinesis-container>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="6" sm="8">
              <v-btn type="submit" class="grey lighten-2">Submit</v-btn>
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

<style scoped></style>
