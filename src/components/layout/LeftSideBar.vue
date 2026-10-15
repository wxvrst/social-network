<script setup lang="ts">
import Home from '@primeicons/vue/home';
import Users from '@primeicons/vue/users';
import Comment from '@primeicons/vue/comment';
import User from '@primeicons/vue/user'
import File from '@primeicons/vue/file';
import Phone from '@primeicons/vue/phone';
import type { Link } from '@/types/types';

const links: Link[] = [
  {
    href: '/profile',
    icon: User,
    label: 'My profile'
  },
  {
    href: '/',
    icon: Home,
    label: 'Main'
  },
  {
    href: '/friends',
    icon: Users,
    label: 'Friends'
  },

  {
    href: '/chat',
    icon: Comment,
    label: 'Chat'
  },
  {
    href: '/calls',
    icon: Phone,
    label: 'Calls'
  },
  {
    href: '/files',
    icon: File,
    label: 'My files'
  },
]
</script>

<template>
  <aside>
    <nav>
      <ol>
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.href"
            class="text-lg flex items-center gap-2 group tracking-widest py-2 group rounded hover:bg-neutral-700/40 transition-color duration-200 text-left px-2">
            <component :is="link.icon" v-if="link.icon" :size="24"
              class="group-hover:text-teal-600 transition-color duration-200" :class="link.label === 'Settings' &&
                'group-hover:animate-[spin_2s_cubic-bezier(0.7,0,0.3,1)_infinite_alternate]'" />

            {{ link.label }}
          </a>
        </li>
      </ol>
    </nav>
  </aside>
</template>
