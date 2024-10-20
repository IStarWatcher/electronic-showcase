<template>
	<Card class="w-60">
		<CardHeader>
			<div class="relative w-full pt-[100%]">
				<img
					class="absolute top-0 left-0 w-full h-full object-contain"
					:src="product.image"
				>
			</div>
		</CardHeader>
		<CardContent class="truncate">
			{{ product.name }}
		</CardContent>
		<CardFooter>
			<Button @click="addToCart">
				В корзину
			</Button>
		</CardFooter>
	</Card>
</template>

<script>
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mapActions } from 'vuex';

export default {
	components: {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
		Button
	},
	props: {
		product: {
			type: Object,
			required: true
		}
	},
	methods: {
		...mapActions(['addToCart']),
		addToCart() {
			this.$store.dispatch('addToCart', {
				name: this.product.name,
				quantity: 1,
				price: this.product.price,
				image: this.product.image
	  		});
		}
  	},
}
</script>