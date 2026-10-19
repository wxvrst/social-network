<script setup lang="ts">
import PublicationCard from "@/components/ui/PublicationCard.vue";
import type { Publication as PublicationType, User } from "@/types/types";
import { Paperclip } from "@primeicons/vue";

import image from "@/assets/avatar.jpg";
import frog from "@/assets/frog.jpg";

const user: User = {
	name: "Gregor Zamza",
	description: "Frontend developer, Google INC.",
	username: "wxvrst",
	avatar: image,
	additional: [
		{
			label: "Phone number:",
			value: "+ 7 (999) 999-99-99",
		},
		{
			label: "Email:",
			value: "example@example.com",
		},
		{
			label: "Birthday:",
			value: "January 1, 2000",
		},
		{
			label: "Telegram:",
			value: "@example",
		},
		{
			label: "GitHub:",
			value: "https://github.com/example",
		},
	],
};

const publications: PublicationType[] = [
	{
		id: 1,
		author_id: "wxvrst",
		author: user,
		description: "description1",
		image: frog,
		date_added: new Date(),
	},
	{
		id: 2,
		author_id: "rererer",
		author: user,
		description: "description2",
		image: image,
		date_added: new Date(),
	},
];
const test = ref<boolean>(false);

const handleToggleTest = () => {
	test.value = !test.value;
};

/*
Сверху будет кнопка или область для создания публикаций
Ниже будет лента публикаиций
Справа в блоке будет фильтр: публикации подписок, рекоммендации и чтото ещё
*/
</script>

<template>
	<div class="flex gap-2 pb-3 border-b border-white/8">
		<textarea
			class="w-full border border-white/8 rounded-2xl focus:outline-0 px-2"
			placeholder="Enter your story"
			rows="4"
			maxlength="200"
		></textarea>
		<div class="flex flex-col gap-2">
			<button
				class="h-12 text-nowrap text-black bg-white px-8 py-2 rounded-4xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-102 active:scale-98"
				@click="handleToggleTest"
			>
				Create publication
			</button>
			<button
				class="h-12 text-nowrap flex items-center gap-2 text-black bg-white px-8 py-2 rounded-4xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-102 active:scale-98"
				@click="handleToggleTest"
			>
				<Paperclip />
				Attach files
			</button>
		</div>
	</div>
	<div
		v-if="publications.length"
		class="flex flex-col gap-2"
	>
		<PublicationCard
			v-for="publication in publications"
			:publication="publication"
			:key="publication.id"
		/>
	</div>
	<div v-else>empty publications</div>
</template>
