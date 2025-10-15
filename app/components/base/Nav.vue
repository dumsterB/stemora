<script setup lang="ts">
const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Process', href: '/process' },
  { name: 'Contact', href: '/contact' },
  { name: 'Book now', href: '/book' }
]
</script>

<template>
  <nav class="flex h-19 items-center bg-white">
    <div class="container flex flex-row items-center justify-between">
      <BaseSkeleton class="h-13 w-50" />
      <ul class="hidden h-full items-center gap-15 lg:flex">
        <li v-for="link in links" :key="link.name">
          <NuxtLink
            :to="link.href"
            active-class="text-secondary"
            class="font-pop hover:text-secondary text-lg font-medium text-[#9E9E9E]"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <BaseButton>Book now</BaseButton>
    </div>
  </nav>
</template>
