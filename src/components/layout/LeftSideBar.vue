<script setup lang="ts">
import { Home, Users, Comment, File, Phone, Bookmark, QuestionCircle } from "@primeicons/vue";
import type { Link } from "@/types/types";

const route = useRoute();
const links: Link[] = [
	{
		href: "/feed",
		icon: Home,
		label: "Feed",
	},
	{
		href: "/chat",
		icon: Comment,
		label: "Chat",
	},
	{
		href: "/friends",
		icon: Users,
		label: "Friends",
	},
	{
		href: "/calls",
		icon: Phone,
		label: "Calls",
	},
	{
		href: "/saved",
		icon: Bookmark,
		label: "Saved",
	},
	{
		href: "/files",
		icon: File,
		label: "My files",
	},
	{
		href: "/support",
		icon: QuestionCircle,
		label: "Support",
	},
];
</script>

<template>
	<aside
		class="bg-neutral-800/30 flex justify-center p-3 rounded-2xl border border-white/8"
	>
		<nav class="w-full">
			<ol class="flex flex-col gap-1">
				<li
					v-for="(link, index) in links"
					:key="index"
				>
					<router-link
						:to="link.href"
						class="text-lg flex items-center justify-between gap-2 tracking-widest px-4 py-2 rounded-4xl hover:bg-white hover:text-black transition-color duration-300 text-left"
						:class="route.path == link.href && 'bg-blue-600'"
					>
						{{ link.label }}
						<component
							:is="link.icon"
							v-if="link.icon"
							:size="24"
						/>
					</router-link>
				</li>
			</ol>
		</nav>
	</aside>
</template>
