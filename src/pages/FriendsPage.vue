<script setup lang="ts">
import type { User } from "@/store/users";
import image from "@/assets/avatar.jpg";
import frog from "@/assets/frog.jpg";
import FriendCard from "@/components/ui/FriendCard.vue";

const users: User[] = [
	{
		id: 1,
		name: "Gregor Zamza",
		description: "Frontend developer, Google INC.",
		username: "amorache",
		avatar: image,
	},
	{
		id: 2,
		name: "Zamza Gregor",
		description: "Backend developer, Google INC.",
		username: "wxvrst",
		avatar: frog,
	},
	{
		id: 3,
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
