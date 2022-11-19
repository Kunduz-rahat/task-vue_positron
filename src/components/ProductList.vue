<template>
	<div>
		<h1>Просмотренные товары</h1>
	
		<product-item v-for="product in products" 
		:product="product" 
		:key="product.id"/>
	
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

</style>