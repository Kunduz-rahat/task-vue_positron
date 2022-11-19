
<template>
<div class="container">
	<product-list :products="products"/>
</div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import products from './data/products';
export default{
	components:{
		ProductList
	},
	data(){
		return{
		products:products
		}
		
	},
	methods:{
		
	}
}
</script>

<style>
body{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.container{
	max-width: 1440px;
	padding: 0 80px;
}
</style>