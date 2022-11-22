<template>
    <div>
        <div class="product__header">
            <h1 class="subtitle">Просмотренные товары</h1>
            <div class="page">
                <div class="page_nav">
                    <img src="./../assets/Right.png" />
                </div>
                <p class="page__number"><span class="page__active">1</span> / 6</p>
                <div class="page_nav">
                    <img src="./../assets/Left.png" />
                </div>
            </div>
        </div>

        <div class="product__list">
            <product-item v-for="product in products" :product="product" :key="product.id" />
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue'

export default {
    components: {
        ProductItem,
    },
    computed: {
        products() {
            return this.$store.state.products
        },
    },
    created() {
        this.$store.dispatch('fetchProducts')
    },
}
</script>

<style scoped>
.product__list {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
}
.subtitle {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 120.52%;
    color: #1f2432;
}
.page {
    display: flex;
    align-items: center;
}
.page_nav {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #90a2b5;
    transform: rotate(-180deg);
    display: flex;
    align-items: center;
    justify-content: center;
}
.page__active {
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #212121;
}
.page__number {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 145%;
    color: #797b86;
    margin: 0 15px;
}
.product__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
