<template>
	<div >
		
		<img :src="product.src"  />
				<p>{{product.desk}}</p>
				<p>{{product.description}}</p>
				<p>{{product.vendorcode}}</p>
				<p>{{product.price.toLocaleString()}} ₽</p>
	
				
	
		
		
	</div>
</template>

<script>
	export default {
		props:{
			product:{
				type:Object,
				required:true
			}
		}
	}
</script>

<style scoped>

</style>