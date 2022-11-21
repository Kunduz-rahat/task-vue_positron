<template>
    <div>
        <div class="cart__header">
            <div class="cart__info">
                <h1 class="cart__title">Ваша корзина</h1>
                <div class="cart__size">{{ cartSize }} товара</div>
            </div>
            <div>
                <button class="cart__del">Очистить корзину</button>
            </div>
        </div>

        <div v-if="!cartSize" role="alert">Ваша корзина пуста! Пожалуйста заполните ее.</div>
        <div v-for="product in cart" :key="product.id">
            <img :src="product.src" />
            <div>Вытяжное устройство {{ product.title }}</div>
            <div>{{ product.description }}</div>
            <div>{{ product.vendorcode }}</div>
            <div v-if="product.quantity * product.price > product.price">
                {{ product.price.toLocaleString() }} ₽/шт.
            </div>
            <div class="cart__btns">
                <button
                    @click="removeFromCart(product.id)"
                    :disabled="product.quantity === 1"
                    class="btn btn-outline-danger btn-small"
                >
                    -
                </button>
                <span class="mx-2">{{ product.quantity }}</span>
                <button
                    @click="addToCart(product.id)"
                    :disabled="product.quantity === product.stock"
                    class="btn btn-outline-success btn-small"
                >
                    +
                </button>
            </div>
            <div>
                <button @click="deleteFromCart(product.id)" class="btn btn-danger btn-small">x</button>
            </div>
            <div>{{ product.quantity * product.price }}</div>
        </div>

        <div>
            <h>Итого</h>
            <div>Сумма заказа {{ cartTotalAmount.toLocaleString() }} ₽</div>
            <div>Количествo шт</div>
            <div>Установка нет</div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['cart']),
        ...mapGetters(['cartSize', 'cartTotalAmount']),
    },
    methods: {
        addToCart(id) {
            this.$store.dispatch('addToCart', id)
        },
        removeFromCart(id) {
            this.$store.dispatch('removeFromCart', id)
        },
        deleteFromCart(id) {
            this.$store.dispatch('deleteFromCart', id)
        },
    },
}
</script>

<style scoped>
.cart__list {
    display: grid;
    grid-template-columns: (2fr, 1fr);
    grid-column-gap: 55px;
}
.cart__title {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    color: #1f2432;
}
.cart__btns {
    display: flex;
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
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 145%;
    color: #797b86;
}
.cart__del {
    font-family: 'Lato';
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
</style>
