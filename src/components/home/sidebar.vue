<template>
	<div>
		<CardTitle>
			Фильтр
		</CardTitle>
		<p>Категория</p>
		<Select v-model="selectedCategory">
			<SelectTrigger class="w-full" id="category-select" name="category">
      			<SelectValue placeholder="Выберете категорию" />
    		</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem
						v-for="(item, index) in allCaterories"
						:key="item.id"
						:value="item.value"
						:name="item.value"
						@click.native="choosingCategory(item.value)"
					>
						{{ item.value }}
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
		<p>Цена</p>
		<div class="flex justify-between">
			<Input
				v-model="minPrice"
				class="w-[120px]"
				type="number"
				placeholder="Мин. цена"
			/>
			<Input
				v-model="maxPrice"
				class="w-[120px]"
				type="number"
				placeholder="Макс. цена"
			/>
		</div>
		<p v-if="isError">Минимальная цена должна быть меньше максимальной</p>
		<Button
			class="w-full my-5"
			variant="outline"
			@click="reset"
		>
			Сброс
		</Button>
		<Button
			class="w-full"
			@click="apply"	
		>
			Применить
		</Button>
	</div>
</template>

<script>
import {
	CardTitle
} from '@/components/ui/card';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'

import axios from '@/utils/axios';

export default {
	components: {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger,
		SelectValue,
		CardTitle,
		Input,
		Button
	},
	data() {
		return {
			allCaterories: null,
			selectedCategory: null,
			minPrice: null,
			maxPrice: null
		}
	},
	async created() {
		await this.getAllCategories()
	},
	computed: {
		isError() {
			if (this.maxPrice === null) {
				return false
			}
			return this.maxPrice < this.minPrice;
		}
	},
	methods: {
		async getAllCategories() {
			axios.get('/categories')
				.then((response) => {
					this.allCaterories = response.data.map((item, index) => {
						return {
							id: index,
							value: item
						}
					});
				})
		},
		reset() {
			this.selectedCategory = null;
			this.minPrice = null;
			this.maxPrice = null;
		},
		apply() {
			this.$emit('get-data-with-filter', this.selectedCategory, this.minPrice, this.maxPrice);
		}
	}
}
</script>