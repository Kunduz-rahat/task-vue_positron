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
        <div class="cart__size">{{ cartSize }} товара</div>
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
            <h6 class="cart__title">Вытяжное устройство {{ product.title }}</h6>
            <p class="cart__desc">{{ product.description }}</p>
            <p class="cart__vendor_code">Артикул: {{ product.vendorcode }}</p>
          </div>
          <div class="cart__btns">
            <button
              @click="removeFromCart(product.id)"
              :disabled="product.quantity === 1"
            >
              -
            </button>
            <span>{{ product.quantity }}</span>
            <button
              @click="addToCart(product.id)"
              :disabled="product.quantity === product.stock"
            >
              +
            </button>

            <div v-if="product.quantity * product.price > product.price">
              {{ product.price.toLocaleString() }} ₽/шт.
            </div>
          </div>
          <div>{{ product.quantity * product.price }} ₽</div>
          <button class="cart__del_item" @click="deleteFromCart(product.id)">
            ⛌
          </button>
        </div>
        <div class="cart__setting" v-if="cartSize">
          <input type="checkbox" v-model="active" />
          <img src="../assets/Input.png" class="cart__setting_img" />
          <div>
            <h6>Установка</h6>
            <p>
              Отметьте, если Вам необходима консультация профессионала по
              монтажу выбранных товаров.
            </p>
          </div>
          <input type="checkbox" id="checkbox" v-model="checked" />
          <label for="checkbox">{{ checked }}</label>
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
          <p class="cart__total_amount">4 шт</p>
        </div>
        <div class="cart__info_sub">
          <p class="cart__subtitle">Установка</p>
          <p class="cart__total_amount" v-if="active">Да</p>
        </div>
        <hr />
        <div class="cart__info_sub">
          <h4 class="cart__">Стоимость товаров</h4>
          <p>{{ cartTotalAmount.toLocaleString() }} ₽</p>
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
</style>
