<template>
	<div
		class="grid justify-center gap-10"
		:style="`grid-template-columns: repeat(auto-fill, minmax(220px, 220px))`"
	>
		<Card
			v-for="product in listProducts"
			:key="product.id"
			:product="product"
		/>
	</div>
</template>

<script>
import Card from '@/components/home/card.vue';

export default {
	components: {
		Card
	},
	props: {
		listProducts: {
			type: Array,
			required: true
		}
	}
}
</script>