<template>
	<div class="product__item">
		
		<img :src="product.src"  class="product__item_img"/>
		<h2 class="product__title">{{product.title}}</h2>
		<p class="product__subtitle">{{product.desk}}</p>
		<div class="product_price">
				<p class="product__price_r">6 848 ₽ – 56 584 ₽</p>
		<p class="product__price_e">77.60 € – 643.86 €</p>
		<button class="button">Подробнее</button>
	
		</div>
		
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
width: 100%;
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
.product__title{
	font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 120.52%;
color: #1F2432;
}
.product__subtitle{
	font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 145%;
color: #1F2432;
width: 255px;
}
.product__price{
	margin-top: 40px;
}
.product__price_r{
	font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 130%;
letter-spacing: 0.005em;
color: #1F2432;
}

.product__price_e{
	font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 145%;
color: #797B86;
}

</style>