<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view />
      
    </transition>

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
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .3s ease-out;
}
.fade-leave-active{
  transition: opacity .3s ease-out;
  opacity: 1;
}
</style>
