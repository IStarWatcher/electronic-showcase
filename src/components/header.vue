<template>
	<header class="flex justify-between items-center p-5 border-b border-black">
		<img
			class="rounded-full max-w-12"
			src="https://avatars.githubusercontent.com/u/124599?v=4"
			alt="Логотип"
			@click="movingHome"
		>
		<Button @click="movingCart">
			Корзина
		</Button>
	</header>
</template>

<script>
import { Button } from '@/components/ui/button'

export default {
	name: 'Header',
	components: {
		Button
	},
	methods: {
		movingHome() {
			this.$router.push('/');
		},
		movingCart() {
			this.$router.push('/cart');
		}
	}
}
</script>