<script setup lang="ts">
import { Home, Users, Comment, File, Phone } from "@primeicons/vue";
import type { Link } from "@/types/types";

const route = useRoute();
const links: Link[] = [
	{
		href: "/feed",
		icon: Home,
		label: "Feed",
	},
	{
		href: "/friends",
		icon: Users,
		label: "Friends",
	},
	{
		href: "/chat",
		icon: Comment,
		label: "Chat",
	},
	{
		href: "/calls",
		icon: Phone,
		label: "Calls",
	},
	{
		href: "/files",
		icon: File,
		label: "My files",
	},
];
</script>

<template>
	<aside
		class="bg-neutral-800/30 flex justify-center p-3 rounded-2xl outline -outline-offset-1 outline-white/8"
	>
		<nav class="w-full">
			<ol class="flex flex-col gap-1">
				<li class="mb-2">
					<button
						class="w-full text-center bg-blue-600 px-4 py-2 rounded-4xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-102 active:scale-98"
					>
						Create publication
					</button>
				</li>
				<li
					v-for="(link, index) in links"
					:key="index"
				>
					<router-link
						:to="link.href"
						class="text-lg flex items-center justify-between gap-2 tracking-widest px-4 py-2 rounded-4xl hover:bg-white hover:text-black transition-color duration-300 text-left"
						:class="route.path == link.href && 'text-blue-600'"
					>
						{{ link.label }}
						<component
							:is="link.icon"
							v-if="link.icon"
							:size="24"
							:class="
								link.label === 'Settings' &&
								'group-hover:animate-[spin_2s_cubic-bezier(0.7,0,0.3,1)_infinite_alternate]'
							"
						/>
					</router-link>
				</li>
			</ol>
		</nav>
	</aside>
</template>
