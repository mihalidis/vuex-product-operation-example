<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>
