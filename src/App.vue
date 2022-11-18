
<template>
<div>
	<div v-for="product in products" v-bind:key="product.id">
		<h1>{{product.title}}</h1>
		<img :src="product.image"/>
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
</style>