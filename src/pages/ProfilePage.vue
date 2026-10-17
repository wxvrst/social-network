<script setup lang="ts">
import { Comment, Phone, Plus } from "@primeicons/vue";
import image from "@/assets/avatar.jpg";
/*
Будет 2 варианта: профиль текущего пользователя и профиль любого другого
У каждого будет своя информация, т.е поля:
  Имя, аватарка, обложка, статус, необязательные поля(др и тд), друзья и подписки, посты
На странице текущего пользователя будет:
  Кнопка редактирования
На старнице других: кнопка добавить в друзья и "Написать"
*/
</script>

<template>
	<div class="bg-neutral-800/60 rounded-2xl p-4">
		<div class="w-full flex gap-4">
			<img
				:src="image"
				alt="avatar"
				class="aspect-square w-24 rounded-full overflow-hidden"
			/>
			<div class="flex flex-col gap-2 text-left">
				<span class="text-2xl">John Johnson</span>
				<span class="text-white/40 text-sm"> Frontend developer, Google INC.</span>
			</div>
			<div class="ml-auto flex flex-col gap-2">
				<button
					class="text-center flex justify-center items-center gap-2 bg-blue-600 px-4 py-2 rounded-4xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-102 active:scale-98"
				>
					<Plus size="18"/> Add to friends
				</button>
				<div class="flex gap-2">
					<button
						class="w-1/2 flex justify-center items-center bg-neutral-600/40 px-6 py-3 rounded-4xl hover:bg-white hover:text-black transition-color duration-300"
					>
						<Comment />
					</button>
					<button
						class="w-1/2 flex justify-center items-center bg-neutral-600/40 px-6 py-3 rounded-4xl hover:bg-white hover:text-black transition-color duration-300"
					>
						<Phone />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
