<template>
	<div class="h-screen flex justify-center items-center">
		<form class="w-full max-w-sm" @submit.prevent="onSubmit">
	  		<p>Форма авторизации</p>
	  		<FormField v-slot="{ componentField }" name="email">
				<FormItem>
		  			<FormLabel>Почта</FormLabel>
		  			<FormControl>
						<Input
			  				type="email"
			  				placeholder="example@example.com"
			  				v-bind="componentField"
						/>
		  			</FormControl>
		  			<FormDescription> Введите свой адрес электронной почты. </FormDescription>
		  			<FormMessage />
				</FormItem>
	  		</FormField>
	  		<FormField v-slot="{ componentField }" name="password">
				<FormItem>
		  			<FormLabel>Пароль</FormLabel>
		  			<FormControl>
						<Input
							type="password"
							placeholder="********"
							v-bind="componentField"
						/>
		  			</FormControl>
		  			<FormDescription> Введите свой пароль. </FormDescription>
		  			<FormMessage />
				</FormItem>
	  		</FormField>
	  		<Button class="w-full" type="submit"> Войти </Button>
		</form>
  	</div>
</template>

<script>
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default {
	components: {
		Button,
		FormControl,
		FormDescription,
		FormField,
		FormItem,
		FormLabel,
		FormMessage,
		Input,
  	},
  	data() {
		return {
   	   		formSchema: toTypedSchema(
				z.object({
		 	 		email: z.string().email({ message: 'Неверный адрес электронной почты' }),
		  			password: z.string().min(8, {message: 'Пароль должен содержать не менее 8 символов'}).max(50),
				})
	 	 	),
	  		form: useForm({
				validationSchema: toTypedSchema(
		  			z.object({
						email: z.string().email({ message: 'Неверный адрес электронной почты' }),
						password: z.string().min(8, {message: 'Пароль должен содержать не менее 8 символов'}).max(50),
		  			})
				),
	  		}),
		};
  	},
	created() {
		if (localStorage.getItem('isAuthenticated') === 'true') {
	  		this.$router.push('/')
		}
  	},
  	methods: {
		onSubmit() {
	  		this.form.handleSubmit(() => {
				localStorage.setItem('isAuthenticated', 'true');
				this.$router.push('/');
	  		})();
		}
  	}
};
</script>