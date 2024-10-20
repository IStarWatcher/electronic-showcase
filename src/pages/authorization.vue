<template>
	<!-- <div class="h-screen flex justify-center">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">
					Авторизация
				</h1>
			</div>
			<UserAuthForm />
		</div>
	</div> -->
	<div class="h-screen flex justify-center items-center">
		<form class="w-full max-w-sm" @submit.prevent="onSubmit">
			<Card>
				<CardHeader>
					<CardTitle class="text-2xl">
						Авторизация
					</CardTitle>
				</CardHeader>
				<CardContent class="grid gap-4">
					<div class="grid gap-2">
						<Label for="email">Почта</Label>
						<Input
							id="email"
							type="email"
							placeholder="m@example.com"
							:rules="[() => !$v.form.email.$invalid || 'Введите корректный email']"
							required
						/>
					</div>
					<div class="grid gap-2">
						<Label for="password">Пароль</Label>
						<Input id="password" type="password" required />
					</div>
				</CardContent>
				<CardFooter>
					<Button class="w-full" type="submit">
						Войти
					</Button>
				</CardFooter>
			</Card>
		</form>
	</div>
</template>

<script>
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

/* import { required, email } from 'vuelidate/lib/validators' */

export default {
	components: {
		Button,
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
		Input,
		Label
	},
	data() {
		return {
			form: {
				email: null,
				password: null
			}
		}
	},
	/* validation: {
		form: {
			email: {
				required,
				email
			},
			password: {
				required
			}
		}
	}, */
	methods: {
		onSubmit() {
			console.log(1);
		}
	}
}
</script>