<script setup lang="ts">
import type { User } from "@/store/users";
import { Star, StarFill } from "@primeicons/vue";

defineProps<{
	user: User;
}>();
const handleClickAddToFavorite = () => {};
</script>

<template>
	<div class="bg-neutral-800/60 rounded-2xl p-3">
		<div class="w-full flex gap-2">
			<img
				:src="user.avatar"
				alt="avatar"
				class="aspect-square w-24 rounded-full overflow-hidden"
			/>
			<div class="flex flex-col gap-1 text-left">
				<router-link
					:to="`/${user.username}`"
					class="w-fit text-2xl underline decoration-transparent transition-colors duration-200 hover:decoration-white"
				>
					{{ user.name }}
				</router-link>
				<span class="text-white/40 text-sm"> {{ user.description }}</span>
			</div>
			<div class="ml-auto flex flex-col justify-center gap-2">
				<button
					class="flex justify-center items-center bg-neutral-600/40 p-4 rounded-4xl hover:bg-white hover:text-black transition-color duration-300"
					@click="handleClickAddToFavorite"
				>
					<Star />
				</button>
			</div>
		</div>
	</div>
</template>
