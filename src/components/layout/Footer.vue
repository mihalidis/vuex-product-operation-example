<template>
  <nav class="navbar fixed-bottom" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto">
        <strong>vuex example</strong>
    </span>
    <div class="footer-text-wrapper">
      <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Alış Tutarı : </strong>
        <span class="badge badge-danger">{{ getSaleInformation.purchaseAmount | currency }}</span>
    </span>
      <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Satış Tutarı : </strong>
        <span class="badge badge-success">{{ getSaleInformation.salesAmount | currency }}</span>
    </span>
      <span class="navbar-text navbar-nav my-2 my-lg-0">
        <strong>Bakiye : </strong>
        <span class="badge badge-primary">{{ getSaleInformation.balance | currency }}</span>
    </span>
    </div>

  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters(["getSaleInformation"]),
  },
  mounted() {
    this.getSaleInfo();
  },
  methods: {
    ...mapActions(["getSaleInfo"])
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0 20px;
  .footer-text-wrapper {
    display: flex;
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-right: 10px;

    .badge-danger {
      color: #DD4A48;
    }

    .badge-success {
      color: #24A19C;
    }

    .badge-primary {
      color: #548CFF;
    }
  }
}
</style>
