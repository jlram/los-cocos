<template>
  <div>
    <Navbar />
    <Drawer />
    <Banner />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Drawer from "@/components/Drawer.vue";
import Banner from "@/components/Banner.vue";
export default {
  name: "Landing",
  props: {
    msg: String,
  },
  components: {
    Navbar,
    Drawer,
    Banner,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
