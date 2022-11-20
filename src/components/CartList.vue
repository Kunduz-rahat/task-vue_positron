<template>
	<div>
		<cart-item v-for="product in products" 
		:product="product" 
		:key="product.id"/>
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
		}
	}
</script>

<style  scoped>

</style>