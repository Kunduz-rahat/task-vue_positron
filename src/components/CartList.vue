<template>
  <div>
    <div class="cart__header">
      <div class="cart__info">
        <h1 class="cart__header_title">Ваша корзина</h1>
        <div class="cart__size">{{ cartSize }} товара</div>
      </div>
      <div>
        <button class="cart__del_all">Очистить корзину</button>
      </div>
    </div>

    <div v-if="!cartSize" role="alert" class="cart__empty">
      Ваша корзина пуста! Пожалуйста заполните ее.
    </div>

    <div v-for="product in cart" :key="product.id" class="cart__list">
        
      <div class="cart_item">
        <div>
          <img :src="product.src" class="cart__img" />
        </div>
        <div>
          <div class="cart__title">Вытяжное устройство {{ product.title }}</div>
          <div class="cart__desc">{{ product.description }}</div>
          <div class="cart__vendor_code">Артикул: {{ product.vendorcode }}</div>
        </div>
        <div class="cart__btns">
          <button
            @click="removeFromCart(product.id)"
            :disabled="product.quantity === 1"
            class="btn btn-outline-danger btn-small"
          >
            -
          </button>
          <span>{{ product.quantity }}</span>
          <button
            @click="addToCart(product.id)"
            :disabled="product.quantity === product.stock"
            class="btn btn-outline-success btn-small"
          >
            +
          </button>
          <div v-if="product.quantity * product.price > product.price">
            {{ product.price.toLocaleString() }} ₽/шт.
          </div>
        </div>
        <div>{{ product.quantity * product.price }} ₽</div>
        
      </div>
      <button class="cart__del_item" @click="deleteFromCart(product.id)">
          x
        </button>
   
      </div>
      <div class="cart__total_info">
        <h>Итого</h>
        <div>Сумма заказа {{ cartTotalAmount.toLocaleString() }} ₽</div>
        <div>Количествo шт</div>
        <div>Установка нет</div>
        <div>Стоимость товаров</div>
        <button>Оформить заказ</button>
        <button>Купить в 1 клик</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartSize", "cartTotalAmount"])
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    },
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", id);
    },
    deleteFromCart(id) {
      this.$store.dispatch("deleteFromCart", id);
    }
  }
};
</script>

<style scoped>
.cart__list {
  display: grid;
  grid-template-columns: (2fr, 1fr);
  grid-column-gap: 55px;
}
.cart__header_title {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  color: #1f2432;
}
.cart__btns {
}
.cart__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart__info {
  display: flex;
  align-items: center;
}
.cart__size {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 145%;
  color: #797b86;
}
.cart__del_all {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  text-decoration-line: underline;
  color: #797b86;
  border: none;
  background-color: white;
}
.cart__empty {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 120.52%;
  color: #1f2432;
}
.cart__img {
  width: 100px;
  height: 100px;
}
.cart__title {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 145%;
  color: #1f2432;
}
.cart__desc {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #2c3242;
}
.cart__vendor_code {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797b86;
}
.cart__del_item {
  width: 12px;
  height: 12px;
  border: none;
  background-color: white;
  position: absolute;
  right: 0;
 
}
.cart__total_info {
  background: #f6f8fa;
  border-radius: 5px;
}
.cart_item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 800px;
   
}
</style>
