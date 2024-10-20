import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home.vue';
import Authorization from '@/pages/authorization.vue';
import Cart from '@/pages/cart.vue'

const routes = [
	{ path: '/', component: Home},
	{ path: '/authorization', component: Authorization},
	{ path: '/cart', component: Cart}
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
