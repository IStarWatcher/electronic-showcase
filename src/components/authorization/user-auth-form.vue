<script>
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default {
    components: {
        Button,
        Input,
        Label
    },
    data() {
        return {
            isLoading: false,
			form: {
				email: null,
				password: null
			}
        }
    },
    methods: {
        onSubmit() {
			this.isLoading = true;
			setTimeout(()=> {
				this.isLoading = false;
			}, 3000)
	        console.log(this.form.email);	
        }
    }
}
</script>

<template>
	<div :class="{'grid gap-6': $attrs.class}">
		<form @submit.prevent="onSubmit">
			<div class="grid gap-2">
				<div class="grid gap-1">
					<Label for="email">
						Почта
					</Label>
					<Input
						v-model="form.email"
						id="email"
						placeholder="name@example.com"
						type="email"
						:disabled="isLoading"
					/>
                    <Label for="password">
						Пароль
					</Label>
                    <Input
                    	v-model="form.password"
						id="password"
						type="password"
						:disabled="isLoading"
					/>
				</div>
				<Button :disabled="isLoading">
					Войти
				</Button>
			</div>
		</form>
	</div>
</template>