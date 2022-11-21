<template>
  <div class="container">
    <CartList :products="products" />
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import CartList from "./components/CartList.vue";

import products from "./data/products";
export default {
  components: {
    ProductList,
    CartList,
  },
  data() {
    return {
      products: products,
    };
  },
  methods: {},
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
