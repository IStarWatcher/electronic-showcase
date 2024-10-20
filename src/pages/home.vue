<template>
	<div class="flex">
		<div class="border-r border-black p-5 w-[300px]">
			<SideBar @get-data-with-filter="getDataWithFilter" />
		</div>
		<div class="px-10 flex-1">
			<p class="font-bold py-5">Все категории</p>
			<Cards :listProducts="listProducts"/>
		</div>
	</div>
</template>

<script>
import Cards from '@/components/home/cards.vue';
import SideBar from '@/components/home/sidebar.vue';

import axios from '@/utils/axios';

export default {
	components: {
		SideBar,
		Cards
	},
	data() {
		return {
			listProducts: []
		}
	},
	async created() {
		await this.getData();
	},
	methods: {
		async getData() {
			axios.get()
				.then((response) => {
					this.listProducts = response.data.map(item => {
						return {
							id: item.id,
							title: item.title,
							price: item.title,
							category: item.category,
							image: item.image
						}
					})
				})
		},
		async getDataWithFilter(category, minPrice, maxPrice) {
			axios.get(`/category/${category}`)
				.then((response) => {
					this.listProducts = response.data.map((item) => {
						return {
							id: item.id,
							title: item.title,
							price: item.title,
							category: item.category,
							image: item.image
						}
					})
				})

			if (minPrice !== null) {
				this.listProducts = this.listProducts.filter(item => minPrice >= item.price);
			}

			if (maxPrice !== null) {
				this.listProducts = this.listProducts.filter(item => maxPrice <= item.price);
			}
		}
	}
}
</script>