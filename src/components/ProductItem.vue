<template>
	<div class="product__item">
		
		<img :src="product.src"  class="product__item_img"/>
		<h2>{{product.title}}</h2>
		<p>{{product.desk}}</p>
		<p>6 848 ₽ – 56 584 ₽</p>
		<p>77.60 € – 643.86 €</p>
		<button class="button">Подробнее</button>
	
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
.button{
	background: #0069B4;
border-radius: 4px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 50px;
gap: 10px;
font-weight: 600;
font-size: 16px;
line-height: 145%;
text-align: center;
color: #FFFFFF;
border: none;
}
.product__item{
	background: #F6F8FA;
border-radius: 5px;
padding: 25px;

}
.product__item_img{
	max-width: 245px;
	min-width: 245px;
}
</style>