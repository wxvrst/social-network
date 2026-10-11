<script setup lang="ts">

</script>

<template>
  <header class="h-12 w-full bg-neutral-800/40 border-b border-neutral-600/10 flex items-center justify-center mb-4">
    <ul class="h-full flex items-center justify-center gap-4 w-8/10 [&>li]:cursor-pointer">
      <li class="font-semibold hover:text-neutral-300 transition-color duration-100 text-nowrap px-6">
        <a href="#">
          my site logo
        </a>
      </li>
      <li class="cursor-text!">
        <input
          class="bg-neutral-800 rounded-lg px-4 py-1 outline-none hover:bg-neutral-600/40 focus:bg-neutral-600/40 transition-color duration-100"
          placeholder="Поиск" />
      </li>
      <li class="hover:text-teal-600 transition-color duration-200 p-3 ml-auto">
        notification
      </li>
      <li class="hover:bg-neutral-700/40 transition-color duration-200 p-3">
        avatar
      </li>
    </ul>
  </header>
</template>
