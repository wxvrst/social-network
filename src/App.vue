<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import LeftSideBar from "@/components/layout/LeftSideBar.vue";
import RightSideBar from "@/components/layout/RightSideBar.vue";
</script>
<template>
	<Header />
	<div class="flex w-full overflow-hidden">
		<LeftSideBar class="w-2xs h-fit" />
		<main class="min-w-0 w-4xl px-1">
			<section
				class="bg-neutral-800/30 rounded-2xl p-3 border border-white/8 flex flex-col gap-2"
			>
				<router-view />
			</section>
		</main>
		<RightSideBar class="w-sm h-fit" />
	</div>
</template>
