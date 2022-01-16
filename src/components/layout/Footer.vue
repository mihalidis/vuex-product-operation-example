<template>
  <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto">
        <strong>vuex example</strong>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Alış Tutarı : </strong>
        <span class="badge badge-danger">{{ getSaleInformation.purchaseAmount }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Satış Tutarı : </strong>
        <span class="badge badge-success">{{ getSaleInformation.salesAmount }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
        <strong>Bakiye : </strong>
        <span class="badge badge-primary">{{ getSaleInformation.balance }}</span>
    </span>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters(["getSaleInformation"])
  }
}
</script>

<style scoped>

</style>
