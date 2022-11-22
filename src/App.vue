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
@font-face {
    font-family: 'Lato';
    src: url('./fonts/Lato-Light.eot');
    src: url('./fonts/Lato-Light.eot?#iefix') format('embedded-opentype'),
        url('./fonts/Lato-Light.woff2') format('woff2'),
        url('./fonts/Lato-Light.woff') format('woff'),
        url('./fonts/Lato-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('./fonts/Lato-Medium.eot');
    src: url('./fonts/Lato-Medium.eot?#iefix') format('embedded-opentype'),
        url('./fonts/Lato-Medium.woff2') format('woff2'),
        url('./fonts/Lato-Medium.woff') format('woff'),
        url('./fonts/Lato-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('./fonts/Lato-Regular.eot');
    src: url('./fonts/Lato-Regular.eot?#iefix') format('embedded-opentype'),
        url('./fonts/Lato-Regular.woff2') format('woff2'),
        url('./fonts/Lato-Regular.woff') format('woff'),
        url('./fonts/Lato-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('./fonts/Lato-Thin.eot');
    src: url('./fonts/Lato-Thin.eot?#iefix') format('embedded-opentype'),
        url('./fonts/Lato-Thin.woff2') format('woff2'),
        url('./fonts/Lato-Thin.woff') format('woff'),
        url('./fonts/Lato-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lato';
    src: url('./fonts/Lato-Semibold.eot');
    src: url('./fonts/Lato-Semibold.eot?#iefix') format('embedded-opentype'),
        url('./fonts/Lato-Semibold.woff2') format('woff2'),
        url('./fonts/Lato-Semibold.woff') format('woff'),
        url('./fonts/Lato-Semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}



</style>
