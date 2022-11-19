
<template>
<div class="container">
	<product-list :products="products"/>
</div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
export default{
	components:{
		ProductList
	},
	data(){
		return{
		products:[
{  id:1, 
	title:"BXC", 
	image:'@/assets/BXC.png',
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