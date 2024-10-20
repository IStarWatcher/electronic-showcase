<template>
	<div class="w-full">
		<Header v-if="shouldShowHeader"/>
		<RouterView />
	</div>
</template>

<script>
import Header from '@/components/header.vue'

export default {
	components: {
		Header
	},
	computed: {
		shouldShowHeader() {
			return this.$route.path !== '/authorization';
		}
	}
}
</script>