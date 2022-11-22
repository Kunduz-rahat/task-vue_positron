<template>
  <div class="container">
    <nab-bar />
    <cart-list :products="products" />
    <product-list :products="products" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import CartList from "./components/CartList.vue";

import products from "./data/products";
import NabBar from "./components/NabBar.vue";
export default {
  components: {
    ProductList,
    CartList,
    NabBar
  },
  data() {
    return {
      products: products
    };
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1440px;
  padding: 0 80px;
}
</style>
