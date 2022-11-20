<template>
    <div class="container"> 
        <h1 class="my-2">Ваша корзина </h1>
		<p >{{cartSize}}  товара</p>
        <div v-if="!cartSize" class="alert alert-secondary my-5" role="alert"> 
           Ваша корзина пуста! Пожалуйста заполните ее.
        </div>
       
        
          
            <div v-for="(product) in cart" :key="product.id">
					<img :src="product.src" />
              <div>Вытяжное устройство {{product.title}}</div>
 <div>{{product.description}}</div>			  
 <div>{{product.vendorcode}}</div>
              <div v-if="product.quantity* product.price > product.price"> {{product.price.toLocaleString()}}  ₽/шт.</div>
              <div>
                  <button 
                      @click="removeFromCart(product.id)"
                      :disabled="product.quantity === 1"
                      class="btn btn-outline-danger btn-small">
                      -
                  </button>
                  <span class="mx-2">{{product.quantity}}</span>
                  <button 
                      @click="addToCart(product.id)" 
                      :disabled="product.quantity === product.stock"
                      class="btn btn-outline-success btn-small">
                      +
                  </button>
              </div>
              <div>
					<button 
                  @click="deleteFromCart(product.id)"
                  class="btn btn-danger btn-small">
                  Delete
              </button>
				</div>
              <div> {{product.quantity* product.price}}</div>
            </div>
            
            <div class="table-footer"> 
					<h>Итого</h>
                <div >Сумма заказа {{cartTotalAmount.toLocaleString()}}  ₽</div> 
              <div>Количествo  шт</div>
              <div>Установка нет</div>
            </div>
          
        
    </div>    
</template>
 
<script>
    import {mapState, mapGetters} from 'vuex'
    export default{
        data() {
            return{
            
            };
        },
        computed: {
            ...mapState([
                "cart"
            ]),
            ...mapGetters([
                "cartSize",
                "cartTotalAmount"
            ])
        },
        methods: {
            addToCart(id) {
                this.$store.dispatch("addToCart", id);
            },
            removeFromCart(id) {
                this.$store.dispatch("removeFromCart", id);
            },
            deleteFromCart(id) {
                this.$store.dispatch("deleteFromCart", id);
            }
        }
    } 
</script> 

<style  scoped>
.cart__list{
	display: grid;
	grid-template-columns: (2fr, 1fr);
	grid-column-gap: 55px;
}
</style>