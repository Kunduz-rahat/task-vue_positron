
<template>
<div class="container">
	<h1>Просмотренные товары</h1>
	<div v-for="product in products" v-bind:key="product.id">
		<img :src="product.image"/>
		<h2>{{product.title}}</h2>
		<p>{{product.desk}}</p>
		<p>6 848 ₽ – 56 584 ₽</p>
		<p>77.60 € – 643.86 €</p>
		<button class="button">Подробнее</button>
		
	</div>
</div>
</template>

<script>
export default{
	data(){
		return{
		products:[
{  id:1, 
	title:"BXC", 
	image:'./../assets/BXC.png',
	desk:"Вытяжное устройство для механической системы вентиляции", 
	price:12644, 
	vendorcode:"G2H1065", 
	description:"12-72/168м³/ч/ гидрорегулируемый расходы/ от датчика присутствия"},
{  id:2, 
	title:"G2H", 
	image:'./../assets/G2H.png',
	desk:"Многофункциональное вытяжное устройство для естественной и гибридной вентиляции", 
	price:12644, 
	vendorcode:"G2H1065", 
	description:"12-72/168м³/ч/ гидрорегулируемый расходы/ от датчика присутствия"},
{  id:3, 
	title:"GHN", 
	image:'./../assets/GHN.png',
	desk:"Вытяжное устройство с датчиком присутствия", 
	price:12644, 
	vendorcode:"G2H1065", 
	description:"12-72/168м³/ч/ гидрорегулируемый расходы/ от датчика присутствия"},
{  id:4, 
	title:"TDA",
	image:'./../assets/TDA.png', 
	desk:"Вытяжное устройство с датчиком присутствия", 
	price:12644, 
	vendorcode:"G2H1065", 
	description:"12-72/168м³/ч/ гидрорегулируемый расходы/ от датчика присутствия"}
]
		}
		
	},
	methods:{
		
	}
}
</script>

<style>
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
.container{
	max-width: 1440px;
}
</style>