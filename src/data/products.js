const images=require.context('./images', true, /\.png$/)

const products=[
	{  id:1, 
		title:"BXC", 
		quantity: 100,
		src:images('./BXC.png'),
		desk:"Вытяжное устройство для механической системы вентиляции", 
		price:12644, 
		vendorcode:"G2H1065", 
		description:"12-72/168м³/ч/ гидрорегулируемый расходы/ от датчика присутствия"},
	{  id:2, 
		quantity: 100,
		title:"G2H", 
		src:images('./G2H.png'),
		desk:"Многофункциональное вытяжное устройство для естественной и гибридной вентиляции", 
		price:12644, 
		vendorcode:"G2H1065", 
		description:"12-72/168м³/ч/ гидрорегулируемый расходы/ от датчика присутствия"},
	{  id:3, 
		quantity: 100,
		title:"GHN", 
		src:images('./GHN.png'),
		desk:"Вытяжное устройство с датчиком присутствия", 
		price:12644, 
		vendorcode:"G2H1065", 
		description:"12-72/168м³/ч/ гидрорегулируемый расходы/ от датчика присутствия"},
	{  id:4, 
		quantity: 100,
		title:"TDA",
		src:images('./TDA.png'),
		desk:"Вытяжное устройство с датчиком присутствия", 
		price:12644, 
		vendorcode:"G2H1065", 
		description:"12-72/168м³/ч/ гидрорегулируемый расходы/ от датчика присутствия"}
	]

	export default products