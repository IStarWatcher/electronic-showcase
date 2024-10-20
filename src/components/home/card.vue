<template>
	<Card class="w-60">
		<CardHeader>
			<div class="relative w-full pt-[100%]">
				<img
					class="absolute top-0 left-0 w-full h-full object-contain"
					:src="image"
				>
			</div>
		</CardHeader>
		<CardContent>
			{{ product }}
		</CardContent>
		<CardFooter>
			<Button>
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
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
		image: {
			type: String,
			required: true
		},
		product: {
			type: String,
			required: true
		}
	}
}
</script>