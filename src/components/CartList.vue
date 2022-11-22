<template>
  <div>
    <div class="cart__nav">
      <p class="cart__nav_title">Главная</p>
      <div>
        <img
          src="../assets/Vector.png"
          height="8"
          width="5"
          class="cart__nav_img"
        />
      </div>

      <p class="cart__nav_title_active">Корзина</p>
    </div>

    <div class="cart__header">
      <div class="cart__info">
        <h1 class="cart__header_title">Ваша корзина</h1>
        <p class="cart__size">{{ cartTotalQuantity }} товара</p>
      </div>
      <div>
        <button class="cart__del_all">Очистить корзину</button>
      </div>
    </div>
    <div v-if="!cartSize" role="alert" class="cart__empty">
      Ваша корзина пуста! Пожалуйста заполните ее.
    </div>
    <div class="cart__list">
      <div>
        <div class="cart_item" v-for="product in cart" :key="product.id">
          <div>
            <img :src="product.src" class="cart__img" />
          </div>
          <div width="265px">
            <p class="cart__title">Вытяжное устройство {{ product.title }}</p>
            <p class="cart__desc">{{ product.description }}</p>
            <p class="cart__vendor_code">Артикул: {{ product.vendorcode }}</p>
          </div>
          <div class="cart__btns">
            <button
              class="cart__btn"
              @click="removeFromCart(product.id)"
              :disabled="product.quantity === 1"
            >
              -
            </button>
            <button class="cart__btn">{{ product.quantity }}</button>
            <button
              class="cart__btn"
              @click="addToCart(product.id)"
              :disabled="product.quantity === product.stock"
            >
              +
            </button>
            <div
              class="cart__price"
              v-if="product.quantity * product.price > product.price"
            >
              {{ product.price.toLocaleString() }} ₽/шт.
            </div>
          </div>

          <div class="cart_total_price">
            {{ cartTotalAmount.toLocaleString() }} ₽
          </div>

          <button class="cart__del_item" @click="deleteFromCart(product.id)">
            ⛌
          </button>
        </div>
        <div class="cart__setting" v-if="cartSize">
          <input type="checkbox" v-model="active" />
          <img src="../assets/Input.png" class="cart__setting_img" />
          <div>
            <h6 class="cart__setting_title">Установка</h6>
            <p class="cart__vendor_code">
              Отметьте, если Вам необходима консультация профессионала по
              монтажу выбранных товаров.
            </p>
          </div>
        </div>
      </div>
      <div class="cart__total_info" v-if="cartSize">
        <h3 class="cart__total_title">Итого</h3>
        <div class="cart__info_sub">
          <p class="cart__subtitle">Сумма заказа</p>
          <p class="cart__total_amount">
            {{ cartTotalAmount.toLocaleString() }} ₽
          </p>
        </div>
        <div class="cart__info_sub">
          <p class="cart__subtitle">Количествo</p>
          <p class="cart__total_amount">{{ cartTotalQuantity }} шт</p>
        </div>
        <div class="cart__info_sub">
          <p class="cart__subtitle">Установка</p>
          <p class="cart__total_amount" v-if="active">Нет</p>
        </div>
        <hr />
        <div class="cart__info_sub">
          <h4 class="cart__info_amount_title">Стоимость товаров</h4>
          <p class="cart__info_total_amount">
            {{ cartTotalAmount.toLocaleString() }} ₽
          </p>
        </div>

        <button class="cart__btn_order">Оформить заказ</button>
        <button class="cart__btn_buy">Купить в 1 клик</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      active: []
    };
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartSize", "cartTotalAmount", "cartTotalQuantity"])
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
  display: flex;
  align-items: center;
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
  width: 800px;
}
.cart__info {
  display: flex;
  align-items: center;
  line-height: 0%;
}
.cart__size {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 0%;
  color: #797b86;
  margin-left: 22px;
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
  line-height: 80%;
  color: #1f2432;
}
.cart__desc {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 80%;
  color: #2c3242;
}
.cart__vendor_code {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #797b86;
  line-height: 80%;
}
.cart__del_item {
  width: 12px;
  height: 12px;
  border: none;
  background-color: white;
  position: absolute;
  right: 0;
  top: 0;
}
.cart__total_info {
  background: #f6f8fa;
  border-radius: 5px;
  margin-left: 55px;
  height: 458px;
  width: 425px;
  padding: 30px 35px;
}
.cart_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 800px;
}
.cart__total_title {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120.52%;
  color: #1f2432;
}
.cart__subtitle {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  color: #1f2432;
}
.cart__total_amount {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #1f2432;
}
.cart__info_sub {
  display: flex;
  justify-content: space-between;
}
.cart__btn_order {
  background: #0069b4;
  border-radius: 4px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  color: #ffffff;
  border: none;
  display: inline;
  width: 100%;
  margin-bottom: 12px;
  padding: 13px 0;
}
.cart__btn_buy {
  background: white;
  border-radius: 4px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  color: #0069b4;
  border: #0069b4;
  display: inline;
  width: 100%;
  margin-bottom: 12px;
  padding: 13px 0;
}
.cart__nav {
  display: flex;
  align-items: center;
}
.cart__nav_img {
  margin: 10px;
}
.cart__nav_title {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #33374e;
}
.cart__nav_title_active {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797b86;
}
.cart__setting_img {
  margin: 0 20px;
}
.cart__setting {
  display: flex;
  align-items: center;
  background: #f6f8fa;
  border-radius: 5px;
  padding: 0 25px;
}
.cart__btn {
  width: 34px;
  height: 34px;
  margin-left: 5px;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #1f2432;
}
.cart__setting_title {
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 145%;
  color: #1f2432;
  line-height: 0%;
}
.cart__price {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 145%;
  text-align: center;
  color: #1f2432;
  margin-top: 13px;
}
.cart_total_price {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 145%;
  text-align: right;
  color: #1f2432;
}
.cart__info_total_amount {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 130%;
  text-align: right;
  letter-spacing: 0.005em;
  color: #1f2432;
}
.cart__info_amount_title {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  color: #1f2432;
}
</style>
