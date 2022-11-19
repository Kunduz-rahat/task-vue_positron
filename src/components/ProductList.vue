<template>
	<div >
		<h1>Просмотренные товары</h1>
	<div class="product__list">
		<product-item v-for="product in products" 
		:product="product" 
		:key="product.id"/>
	</div>
		
	
	</div>
</template>

<script>
import ProductItem from './ProductItem.vue';

	export default {
		components:{
	ProductItem
},
		props:{
			products:{
				type:Array,
				required:true
			}
		}
	}
</script>

<style  scoped>
.product__list{
	
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-column: 20px;
}
</style>