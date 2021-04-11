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
              <kinesis-container
                ><kinesis-element :strength="15" type="depth"
                  ><div class="display-2 font-weight-regular">
                    Hi there,
                  </div></kinesis-element
                >
                <kinesis-element :strength="20" type="depth">
                  <div class="display-1 font-weight-regular">
                    My name is Michael
                  </div>
                </kinesis-element>
                <kinesis-element :strength="25" type="depth">
                  <vue-typer
                    class="typeString display-1 font-weight-light white"
                    :text="['I conceptualize', 'I build', 'I deploy']"
                    :shuffle="true"
                    :type-delay="200"
                    :pre-erase-delay="2000"
                    caret-animation="blink"
                    erase-style="backspace"
                    :erase-delay="50"
                  ></vue-typer></kinesis-element
              ></kinesis-container>
            </v-col>
            <v-col cols="12" class="text-center" md="6">
              <kinesis-container
                ><kinesis-element :strength="15" type="depth_inv">
                  <div class="display-1 font-weight-light">About Me</div>
                </kinesis-element>
                <kinesis-element :strength="15" type="depth_inv">
                  <div class="headline font-weight-light">
                    {{ aboutText }}
                  </div></kinesis-element
                ></kinesis-container
              >
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
