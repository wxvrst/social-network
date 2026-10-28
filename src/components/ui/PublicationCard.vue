<script setup lang="ts">
import type { Publication } from "@/store/publications";
import { EllipsisH, User } from "@primeicons/vue";

const props = defineProps<{
	publication: Publication;
}>();

const test = ref<boolean>(false);
const router = useRouter();
const handleToggleTest = () => {
	test.value = !test.value;
};

const handleToAccount = () => {
	router.push(`/${props.publication.author_id}`);
};
</script>

<template>
	<div class="border-b border-white/10 flex flex-col p-3">
		<div class="relative flex gap-2 self-start w-full">
			<img
				v-if="publication.author.avatar"
				:src="publication.author.avatar"
				alt="avatar"
				class="bg-white text-black aspect-square w-12 rounded-full overflow-hidden hover:brightness-80 transition duration-200 cursor-pointer"
				@click="handleToAccount()"
			/>
			<User
				v-else
				class="bg-white text-black aspect-square w-12 h-12 rounded-full overflow-hidden hover:brightness-80 transition duration-200 cursor-pointer"
				@click="handleToAccount()"
			/>
			<span
				class="h-fit underline decoration-transparent transition-colors duration-200 hover:decoration-white cursor-pointer"
				@click="handleToAccount()"
			>
				{{ publication.author.name }}
			</span>
			<span
				class="h-fit text-white/40 hover:text-white/80 transition-colors duration-200 cursor-pointer"
				@click="handleToAccount()"
			>
				@{{ publication.author.username }}
			</span>
			<span>{{ publication.date_added }}</span>
			<button
				class="flex w-8 h-8 ml-auto items-center justify-center hover:bg-white/10 rounded-full transition-colors duration-200"
				@click="handleToggleTest"
			>
				<EllipsisH />
			</button>
			<div
				class="absolute bg-neutral-800 right-0 top-8 transition-all duration-200 ease-in-out"
				:class="
					test ?
						'opacity-100 translate-y-0'
					:	'-translate-y-8 opacity-0 pointer-events-none'
				"
			>
				test
			</div>
		</div>
		<div class="-mt-2 ml-14 text-left">
			<span class="">
				{{ publication.description }}
			</span>
			<img
				:src="publication.image"
				alt="image"
				class="w-lg rounded-2xl border-white/10"
			/>
		</div>
	</div>
</template>
