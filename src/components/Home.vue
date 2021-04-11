<template>
  <div>
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
                :text="['I conceptualize', 'I build', 'I deploy']"
                :shuffle="true"
                :type-delay="200"
                :pre-erase-delay="2000"
                caret-animation="blink"
                erase-style="backspace"
                :erase-delay="50"
              ></vue-typer>
            </v-col>
            <v-col cols="12" class="text-center" md="6">
              <div class="display-1 font-weight-light">About Me</div>

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
    aboutText: `I am the main man, I am the tech guy, I'm the guy you call when you want to get something done. 
    I'm into web development using primarily Vue.js among other languages and tools.
    You can hit me up through the contact link if you need my services`,
  }),
};
</script>

<style scoped>
.home {
  background: url(/landingbackground.jpg);
  background-size: cover;
}

/* .typeString {
  color: white;
} */
</style>
