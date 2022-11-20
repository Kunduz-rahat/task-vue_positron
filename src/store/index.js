/* eslint-disable no-unused-vars */

import { createStore } from "vuex";
import myApi from "@/myApi";
function updateLocalStorage(cart){
	localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
	state:{
		cart:[],
		products: null,
	},
	getters:{
cartSize: (state) => {
            return state.cart.length;
        },
        cartTotalAmount: (state) => {
            return state.cart.reduce((total, product) => {
                return total + (product.price * product.quantity);
            }, 0);
        },
	},
	mutations:{
addToCart: (state, productId) => {
           
            let product = state.products.find((product) => product.id === productId);
            let cartProduct = state.cart.find((product) => product.id === productId);
            if (cartProduct) {
                cartProduct.quantity++;
            } else {
                state.cart.push({
                    ...product,
                    stock: product.quantity,
                    quantity: 1,
                });
            }
           
            product.quantity--;
        },
removeFromCart: (state, productId) => {
			let product = state.products.find((product) => product.id === productId);
			let cartProduct = state.cart.find((product) => product.id === productId);
			cartProduct.quantity--;
			product.quantity++;
 },
deleteFromCart: (state, productId) => {
			let product = state.products.find((product) => product.id === productId);
					let cartProductIndex = state.cart.findIndex((product) => product.id === productId);
					product.quantity = state.cart[cartProductIndex].stock;
					state.cart.splice(cartProductIndex, 1);
 },
 setUpProducts: (state, productsPayload) => {
	state.products = productsPayload;
},
	},
	actions:{
		fetchProducts: ({ commit }) => {myApi.getProducts().then((products) => {
			commit("setUpProducts", products);
		
			});
 },
 addToCart: ({ commit }, productId) => {
			myApi.products("add", productId).then((productId) => {
			commit("addToCart", productId);
		
			});
 },
removeFromCart: ({ commit }, productId) => {
			myApi.products("remove", productId).then((productId) => {
 commit("removeFromCart", productId);
commit("showToast", "removed from cart");
			});
},
deleteFromCart: ({ commit }, productId) => {
			myApi.products("delete", productId).then((productId) => {
				commit("deleteFromCart", productId);
				
			});

	}
	}
})