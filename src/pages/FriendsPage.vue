<script setup lang="ts">
import type { User } from "@/types/types";
import image from "@/assets/avatar.jpg";
import frog from "@/assets/frog.jpg";
import FriendCard from "@/components/ui/FriendCard.vue";

const users: User[] = [
	{
		name: "Gregor Zamza",
		description: "Frontend developer, Google INC.",
		username: "amorache",
		avatar: image,
	},
	{
		name: "Zamza Gregor",
		description: "Backend developer, Google INC.",
		username: "wxvrst",
		avatar: frog,
	},
  {
		name: "Victoria Secret",
		description: "Designer, Google INC.",
		username: "martyr",
		avatar: frog,
	},
];
</script>

<template>
	<FriendCard
		v-for="user in users"
		:key="user.username"
		:user="user"
	/>
</template>
