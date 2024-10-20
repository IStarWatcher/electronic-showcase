<template>
	<div>
		<div
			v-if="cartItems.length !== 0"
			class="p-10"
		>
			<p class="font-bold pb-5">Товары в корзине</p>
			<Table
				:columns="columns"
				:data="cartItems"
			/>
			<div class="flex items-center justify-between pt-5">
				<p class="font-bold">Всего товаров {{cartQuantity}} на сумму {{cartTotal.toFixed(2)}}</p>
				<Dialog>
					<DialogTrigger as-child>
						<Button>Оформить заказ</Button>
					</DialogTrigger>
					<DialogContent class="sm:max-w-md">
	  					<DialogHeader>
							<DialogTitle>Ваш заказ успешно оформлен</DialogTitle>
	  					</DialogHeader>
	  					<DialogFooter class="sm:justify-start">
	   	 					<DialogClose as-child>
		  						<Button
									type="button"
									variant="secondary"
									@click="placeOrder"
								>
									Закрыть
		  						</Button>
							</DialogClose>
	  					</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
		<div v-else class="h-screen flex justify-center items-center">
			<div class="">
				<p class="font-bold">Корзина пуста</p>
				<Button @click="returnHome">
					Вернуться к покупкам
				</Button>
			</div>
		</div>
	</div>
</template>

<script>
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import Table from '@/components/cart/table.vue';

import { columns } from '@/components/cart/columns';

import { mapGetters, mapActions } from 'vuex';

export default {
	components: {
		Dialog,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger,
		Table,
		Button
	},
	data() {
		return {
			columns: columns
		}
	},
	async created() {
		if (!localStorage.hasOwnProperty('isAuthenticated')) {
	  		this.$router.push('/authorization');
		}
	},
	computed: {
		...mapGetters(['cartItems', 'cartTotal', 'cartQuantity']),
  	},
  	methods: {
		...mapActions(['clearCart']),
		returnHome() {
			this.$router.push('/');
		},
		placeOrder() {
			this.$store.dispatch('clearCart');
		}
  	},
};
</script>