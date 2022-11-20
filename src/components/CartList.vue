<template>
	<h1>Ваша корзина</h1>
	<div >
		<div class="cart__list">
		<cart-item v-for="product in products" 
		:product="product" 
		:key="product.id"/>
		<div>Итого</div>
		<div >
			<div>Сумма заказа {{product_total}}</div>
			<div>Количество</div>
		<div>Установка</div>
		</div>
		
	</div>
	
	</div>
	
</template>

<script>
import CartItem from './CartItem.vue';
	export default {
		components:{
	CartItem
},
		props:{
			products:{
				type:Array,
				required:true
			}
		},
		computed:{
			product_total(){
				return 6 
			}
		}
	}
</script>

<style  scoped>
.cart__list{
	display: grid;
	grid-template-columns: (2fr, 1fr);
	grid-column-gap: 55px;
}
</style>