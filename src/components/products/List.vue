<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Ürün Listesi</h3>
          <hr>
          <table v-if="getProductList.length" class="table table-hover table-striped table-bordered">
            <thead>
            <th>id</th>
            <th>Ürün Adı</th>
            <th>Adet</th>
            <th>Fiyat</th>
            <th>Açıklama</th>
            </thead>
            <tbody>
            <tr v-for="(product, index) in getProductList" :key="index">
              <td class="align-middle text-center"><span class="badge badge-info bg-success"> {{ product.id }} </span></td>
              <td class="align-middle text-center"> {{ product.name }} </td>
              <td class="align-middle text-center"> {{ product.count }} </td>
              <td style="width: 120px;"> {{ product.price }}</td>
              <td class="align-middle"> {{ product.description }}</td>
            </tr>
            </tbody>
          </table>
          <div v-else class="alert alert-warning">
            <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
            <br>
            <small>Kayıt Eklemek için Ürün İşlemleri menüsünden yararlanabilirsiniz
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  name: "List",
  computed: {
    ...mapGetters(["getProductList"])
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions(["getProducts"])
  }
}
</script>

<style scoped>

</style>
