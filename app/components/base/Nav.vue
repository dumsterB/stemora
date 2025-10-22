<script setup lang="ts">
import { NAV_LINKS } from '~/constants'
import logo from '~/assets/images/logo-dark.png'
</script>

<template>
  <nav class="flex h-19 items-center bg-white">
    <div class="container flex flex-row items-center justify-between">
      <img :src="logo" class="w-50" alt="" />

      <ul class="hidden h-full items-center gap-15 lg:flex">
        <li v-for="link in NAV_LINKS" :key="link.name">
          <NuxtLink
            :to="link.href"
            active-class="text-secondary"
            class="font-pop hover:text-secondary text-lg font-medium text-[#9E9E9E]"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <BaseSocials class="!hidden lg:!flex" />
      <BaseButton>Book now</BaseButton>
    </div>
  </nav>
</template>
