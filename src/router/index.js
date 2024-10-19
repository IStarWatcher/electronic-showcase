import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../App.vue'
import Authorization from '../components/pages/authorization.vue'

const routes = [
    /* { path: '/', component: HomeView }, */
    { path: '/authorization', component: Authorization}
]


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
