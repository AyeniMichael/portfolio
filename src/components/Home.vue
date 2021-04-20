<template>
  <div id="home">
    <v-card dark flat>
      <v-img
        height="100vh"
        src="landingbackground.jpg"
        gradient="to top, rgba(0,0,0,.74), rgba(0,0,0,.74)"
      >
        <v-container class="fill-height">
          <v-row>
            <v-col cols="12" class="text-center" md="6">
              <div class="display-2 font-weight-regular">Hi there,</div>

              <div class="display-1 font-weight-regular">
                My name is Michael
              </div>

              <vue-typer
                class="typeString display-1 font-weight-light white"
                :text="['Conceptualize', 'Build', 'Deploy']"
                :shuffle="true"
                :type-delay="200"
                :pre-erase-delay="2000"
                caret-animation="blink"
                initial-action="typing"
                erase-style="backspace"
                :erase-delay="50"
              ></vue-typer>
            </v-col>
            <v-col cols="12" class="text-center" md="6">
              <div class="display-1 font-weight-light" md="font-weight-regular">
                About Me
              </div>

              <div class="headline font-weight-light">
                {{ aboutText }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data: () => ({
    aboutText: `My name is Ayeni Michael Abiodun and I am Frontend Web Developer. 
    I develop aesthetic websites using javascript(ES6, ES7 syntax), VueJs, Vuetify and Firebase. 
    You can click the contact link in the menu bar if you need my services or my expertise`,
  }),
};
</script>

<style scoped>
/* .home {
  background: url(/landingbackground.jpg);
  background-size: cover;
} */

/* .typeString {
  color: white;
} */
</style>
