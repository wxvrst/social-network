<script setup lang="ts">
import { Cog, Bell, User } from "@primeicons/vue";
import image from "@/assets/avatar.jpg";
import logo from "@/assets/logo.vue";
import type { Link } from "@/types/types";

const links: Link[] = [
	{
		href: "/notifications",
		icon: Bell,
	},
	{
		href: "/settings",
		icon: Cog,
	},
	{
		href: "/2",
		image: image,
		icon: User,
	},
];
</script>

<template>
	<header
		class="bg-neutral-800/30 flex items-center justify-center mb-1 p-3 rounded-2xl outline -outline-offset-1 outline-white/8"
	>
		<ul class="h-full w-full flex items-center justify-between gap-4">
			<li
				class="font-semibold hover:text-blue-600 transition-color duration-400 text-nowrap px-2"
			>
				<router-link
					to="/"
					class="flex tracking-widest text-4xl font-normal"
				>
					<logo class="size-9" />
					reue
				</router-link>
			</li>

			<li class="flex gap-3">
				<router-link
					v-for="(link, index) in links"
					:key="index"
					:to="link.href"
					class="bg-white text-black aspect-square w-12 rounded-full overflow-hidden flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300"
				>
					<img
						v-if="link.image"
						:src="link.image"
						alt="avatar"
					/>
					<component
						v-else="link.icon"
						:is="link.icon"
					/>
				</router-link>
			</li>
		</ul>
	</header>
</template>
