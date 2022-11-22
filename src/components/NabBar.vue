<template>
  <div class="header">
    <div class="header__info">
      <div>
        <img src="../assets/Cart.png" />
      </div>
      <div class="header__info_cart">
        <p class="header__title">Ваша корзина</p>
        <p class="header__amount">{{ cartSize }} товара</p>
        <p class="header__sum"> {{ cartTotalAmount.toLocaleString() }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartSize", "cartTotalAmount"])
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
}
.header__info {
  display: flex;
  align-items: center;
}
.header__title {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
   color: #1f2432;
	line-height: 10%;
}
.header__amount {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #797b86;
  line-height: 10%;
}
.header__sum {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #1f2432;
  line-height: 10%;
}
.header__info_cart{
	margin-left: 13px;
}
</style>
