<script setup lang="ts">
import google from '~/assets/icons/google.svg'
import facebook from '~/assets/icons/facebook.svg'
import instagram from '~/assets/icons/instagram.svg'
import pinterest from '~/assets/icons/pinterest.svg'
import tiktok from '~/assets/icons/tiktok.svg'
const socialLinks = [
  { name: 'Google', href: 'https://www.google.com', img: google },
  { name: 'Facebook', href: 'https://www.facebook.com', img: facebook },
  { name: 'Instagram', href: 'https://www.instagram.com', img: instagram },
  { name: 'Pinterest', href: 'https://www.pinterest.com', img: pinterest },
  { name: 'TikTok', href: 'https://www.tiktok.com', img: tiktok }
]
</script>

<template>
  <div class="inline-flex items-center justify-center gap-3">
    <a
      v-for="social in socialLinks"
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
