<script setup lang="ts">
interface Link {
  href: string,
  icon?: string,
  label: string,
}

const links: Link[] = [
  {
    href: '/',
    icon: '',
    label: 'Main'
  },
  {
    href: '/friends',
    label: 'Friends'
  },
  {
    href: '/chat',
    label: 'Chat'
  },
  {
    href: '/settings',
    label: 'Settings'
  },
]
</script>

<template>
  <aside class="w-1/10">
    <nav>
      <ol>
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.href" class="block text-xl tracking-widest  py-2 rounded hover:bg-neutral-700/40 transition-color duration-200 text-left px-2">
            
            {{ link.label }}
          </a>
        </li>
      </ol>
    </nav>
  </aside>
</template>
