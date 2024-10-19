<template>
	<div class="h-screen flex justify-center">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">
					Авторизация
				</h1>
			</div>
			<UserAuthForm />
		</div>
	</div>
</template>

<script>
import UserAuthForm from '../authorization/user-auth-form.vue'

export default {
	components: {
		UserAuthForm
	}
}
</script>