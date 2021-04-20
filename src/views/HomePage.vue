<template>
  <div>
    <Home />
    <Projects />
    <Contact />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "HomePage",
  components: { Home, Projects, Contact },
};
</script>

<style scoped></style>
