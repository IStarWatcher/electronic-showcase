<template>
	<div class="flex">
		<div class="border-r border-black p-5 w-[300px]">
			<SideBar @get-data-with-filter="getDataWithFilter" />
		</div>
		<div class="px-10 flex-1">
			<CardTitle class="py-5">
				Все категории
			</CardTitle>
			<Cards :listProducts="listProducts"/>
		</div>
	</div>
</template>

<script>
import Cards from '@/components/home/cards.vue';
import SideBar from '@/components/home/sidebar.vue';

import {
	CardTitle
} from '@/components/ui/card';

import axios from '@/utils/axios';

export default {
	components: {
		SideBar,
		Cards,
		CardTitle
	},
	data() {
		return {
			listProducts: []
		}
	},
	async created() {
		if (!localStorage.hasOwnProperty('isAuthenticated')) {
	  		this.$router.push('/authorization');
		} else {
			await this.getData();
		}
	},
	methods: {
		async getData() {
			axios.get()
				.then((response) => {
					this.listProducts = response.data.map(item => {
						return {
							id: item.id,
							name: item.title,
							price: item.price,
							image: item.image
						}
					})
				})
		},
		async getDataWithFilter(category, minPrice, maxPrice) {
			if (category !== null) {
				axios.get(`/category/${category}`)
					.then((response) => {
						this.listProducts = response.data.map((item) => {
							return {
								id: item.id,
								name: item.title,
								price: item.price,
								image: item.image
							}
						})
					})
			}

			if (minPrice !== null) {
				this.listProducts = this.listProducts.filter(item => minPrice <= item.price);
			}

			if (maxPrice !== null) {
				this.listProducts = this.listProducts.filter(item => maxPrice >= item.price);
			}
		}
	}
}
</script>