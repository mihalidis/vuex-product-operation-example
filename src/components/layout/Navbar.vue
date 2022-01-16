<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
    <router-link active-class="active" class="navbar-brand" to="/">Ürün Listesi</router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link exact active-class="active" class="nav-link" :to="{name: 'Add'}">Ürün İşlemleri</router-link>
        </li>
        <li class="nav-item">
          <router-link exact active-class="active" class="nav-link" :to="{name: 'Remove'}">Ürün Çıkışı</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
