<template>
	<div class="border rounded-md">
		<Table>
			<TableHeader>
		  		<TableRow>
					<TableHead v-for="(column, index) in columns" :key="index">
			  			{{ column.name }}
					</TableHead>
		  		</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow v-for="(row, rowIndex) in data" :key="rowIndex">
			  		<TableCell v-for="(column, colIndex) in columns" :key="colIndex">
						<p v-if="column.value === 'number'">{{ rowIndex + 1 }}</p>
						<div
							v-else-if="column.value === 'name'"
							class="flex items-center"
						>
							<img
								class="w-5"
								:src="row.image"
							>
							<p>{{ row.name }}</p>
						</div>
						<div v-else-if="column.value === 'quantity'">
							<NumberField
								v-model="row.quantity"
								class="w-[100px]"
								id="quantity"
								:default-value="row.quantity"
								:min="-1"
							>
								<NumberFieldContent>
									<NumberFieldDecrement @click="decrement(row)"/>
									<NumberFieldInput />
									<NumberFieldIncrement @click="increment(row)"/>
								</NumberFieldContent>
							</NumberField>
						</div>
						<p v-else>{{ row[column.value].toFixed(2) }}</p>
			  		</TableCell>
				</TableRow>
			</TableBody>
	  	</Table>
	</div>
</template>

<script>
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	NumberField,
	NumberFieldContent,
	NumberFieldDecrement,
	NumberFieldIncrement,
	NumberFieldInput,
} from '@/components/ui/number-field';

import { mapActions } from 'vuex';

export default {
	components: {
	  	Table,
	  	TableBody,
	  	TableCell,
	  	TableHead,
	  	TableHeader,
	  	TableRow,
		NumberField,
		NumberFieldContent,
		NumberFieldDecrement,
		NumberFieldIncrement,
		NumberFieldInput
	},
	props: {
	  	columns: {
			type: Array,
			required: true,
	  	},
	  	data: {
			type: Array,
			required: true,
	  	},
	},
	methods: {
		...mapActions(['removeFromCart']),
		decrement(product) {
			if (product.quantity == 0) {
				this.$store.dispatch('removeFromCart', product.name);
			}
		},
		...mapActions(['addToCart']),
		increment(product) {
			this.$store.dispatch('addToCart', {
				name: product.name,
				quantity: 1,
				price: product.price,
				image: product.image
	  		});
		}
	}
}
</script>