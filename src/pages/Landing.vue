<template>
  <div>
    <Navbar />
    <Drawer />
    <Banner />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Drawer from "@/components/Drawer.vue";
import Banner from "@/components/Banner.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Landing",
  props: {
    msg: String,
  },
  components: {
    Navbar,
    Drawer,
    Banner,
    Main,
    Footer
  },
};
</script>

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
