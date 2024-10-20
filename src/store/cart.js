import { createStore } from 'vuex'

export default createStore({
	state: {
		cart: [],
  	},
  	mutations: {
		ADD_TO_CART(state, product) {
	  		const existingProduct = state.cart.find(item => item.name === product.name);
	  		if (existingProduct) {
				existingProduct.quantity += product.quantity;
				existingProduct.total += product.price;
				existingProduct.total.toFixed(2);
	  		} else {
				state.cart.push({ ...product, total: product.price });
	  		}

		},
		REMOVE_FROM_CART(state, productName) {
	  		state.cart = state.cart.filter(item => item.name !== productName);
		},
		CLEAR_CART(state) {
	  		state.cart = [];
		},
  	},
  	actions: {
		addToCart({ commit }, product) {
	  		commit('ADD_TO_CART', product);
		},
		removeFromCart({ commit }, productName) {
	  		commit('REMOVE_FROM_CART', productName);
		},
		clearCart({ commit }) {
	  		commit('CLEAR_CART');
		},
  	},
  	getters: {
		cartItems: state => state.cart,
		cartTotal: state => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
		cartQuantity: state => state.cart.reduce((total, item) => total + item.quantity, 0),
  	},
});