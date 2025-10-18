<script setup lang="ts">
import { SOCIAL_LINKS } from '~/constants'
</script>

<template>
  <div class="inline-flex items-center justify-center gap-3">
    <a
      v-for="social in SOCIAL_LINKS"
      :key="social.name"
      :href="social.href"
      target="_blank"
      rel="noopener noreferrer"
      class="transition hover:scale-110"
    >
      <img :src="social.img" :alt="social.name" class="size-[32px] lg:size-[38px]" />
    </a>
  </div>
</template>
