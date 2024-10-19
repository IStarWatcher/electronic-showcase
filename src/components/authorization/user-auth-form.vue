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
            isLoading: false
        }
    },
    methods: {
        onSubmit() {
	        event.preventDefault()
	        isLoading.value = true

	        setTimeout(() => {
		        isLoading.value = false
	        }, 3000)
        }
    }
}
</script>

<template>
	<div :class="{'grid gap-6': $attrs.class}">
		<form @submit="onSubmit">
			<div class="grid gap-2">
				<div class="grid gap-1">
					<Label for="email">
						Почта
					</Label>
					<Input
						placeholder="name@example.com"
						type="email"
					/>
                    <Label for="password">
						Пароль
					</Label>
                    <Input
                    
						type="password"
					/>
				</div>
				<Button :disabled="isLoading">
					Войти
				</Button>
			</div>
		</form>
	</div>
</template>