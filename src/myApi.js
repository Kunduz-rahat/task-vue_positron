
import products from "./data/products";
export default {
	getProducts: () => {
		// eslint-disable-next-line no-unused-vars
		return new Promise((resolve, reject) => {
			setTimeout(() => {
					resolve(products);
			}, 500);
 });
	},
	products: (action, productId) => {
		// eslint-disable-next-line no-unused-vars
		return new Promise((resolve, reject) => {
			setTimeout(() => {
					resolve(productId);
 }, 100);
		});
	}
}