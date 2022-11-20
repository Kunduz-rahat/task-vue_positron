<template>
	<div class="cart_item" >
		<div>
			<img :src="product.src"  />
		</div>
	<div>
		<div>{{product.desk}}</div>
				<div>{{product.description}}</div>
				<div>{{product.vendorcode}}</div>
	</div>
				<div>
					<button> - </button>
					<div> 1 </div>
					<button> + </button>
				</div>
				<div>{{product.price.toLocaleString()}} ₽</div>
	
				
	
		
		
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
.cart_item{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>