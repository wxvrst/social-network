<script setup lang="ts">
import Cog from '@primeicons/vue/cog';
import Bell from '@primeicons/vue/bell';
import AngleDown from '@primeicons/vue/angle-down';
import QuestionCircle from '@primeicons/vue/question-circle';
import type { Link } from '@/types/types';

const links: Link[] = [
  {
    href: '/notifications',
    icon: Bell,
    label: 'Notifications'
  },
  {
    href: '/settings',
    icon: Cog,
    label: 'Settings'
  },
  {
    href: '/qanda',
    icon: QuestionCircle,
    label: 'Q&A'
  },
]

const test = ref<boolean>(false);

const handleToggleTest = () => {
  test.value = !test.value;
}
</script>

<template>
  <header class="h-12 w-full bg-neutral-800/40 border-b border-neutral-600/10 flex items-center justify-center mb-4">
    <ul class="h-full flex items-center justify-center gap-4 w-8/10 [&>li]:cursor-pointer">
      <li class="font-semibold hover:text-neutral-300 transition-color duration-100 text-nowrap px-2">
        <a href="#">
          my site logo
        </a>
      </li>

      <li class="cursor-text!">
        <input
          class="bg-neutral-800 rounded-lg px-4 py-1 outline-none hover:bg-neutral-600/40 focus:bg-neutral-600/40 transition-color duration-100"
          placeholder="Search" />
      </li>

      <li class="ml-auto relative">
        <button class="hover:text-teal-600 hover:bg-neutral-700/40 transition-color duration-200 p-3"
          @click="handleToggleTest">
          avatar
          <AngleDown class="inline-block transition-transform duration-200" :class="test && 'rotate-180'" />
        </button>

        <div class="absolute bg-neutral-800 right-0 transition-all duration-200 ease-in-out"
          :class="test ? 'opacity-100 translate-y-0' : '-translate-y-8 opacity-0 pointer-events-none'">
          <ol class="bg-neutral-900 p-2 flex flex-col gap-2">
            <li v-for="(link, index) in links" :key="index">
              <a :href="link.href"
                class="text-lg flex items-center gap-2 group tracking-widest py-2 group rounded hover:bg-neutral-800/60 transition-color duration-200 text-left px-2">
                <component :is="link.icon" v-if="link.icon" :size="24"
                  class="group-hover:text-teal-600 transition-color duration-200" :class="link.label === 'Settings' &&
                    'group-hover:animate-[spin_2s_cubic-bezier(0.7,0,0.3,1)_infinite_alternate]'" />

                {{ link.label }}
              </a>
            </li>
          </ol>
        </div>

      </li>
    </ul>
  </header>
</template>
