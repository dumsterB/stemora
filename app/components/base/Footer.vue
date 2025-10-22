<script setup lang="ts">
import { FOOTER_LINKS, CONTACT_INFO } from '~/constants'

import logo from '~/assets/images/logo-dark.png'
</script>
<template>
  <footer class="bg-white">
    <div
      class="container flex flex-col justify-between pt-[60px] pb-[100px] max-sm:items-center max-sm:gap-[42px] lg:flex-row"
    >
      <img :src="logo" class="w-50" alt="" />

      <ul class="flex h-full flex-row gap-5 lg:flex-col">
        <li v-for="link in FOOTER_LINKS" :key="link.name">
          <NuxtLink :to="link.href" active-class="!font-bold" class="text-[16px] font-medium lg:text-lg">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex flex-col gap-5 max-sm:items-center">
        <p class="text-[18px] font-bold">Contact information</p>
        <div class="flex max-w-[360px] flex-col gap-2 max-sm:items-center">
          <span class="text-[14px] font-medium">Legal entity address:</span>
          <span class="text-[12px] font-normal max-sm:text-center">
            {{ CONTACT_INFO.address }}
          </span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-[14px] font-medium">Phone number:</span>
          <span class="text-[12px] font-normal">{{ CONTACT_INFO.phone }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-[34px] max-sm:items-center">
        <div class="flex flex-col gap-3">
          <span class="text-[18px] font-bold max-sm:text-center">Follow us on:</span>
          <BaseSocials />
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-[18px] font-bold">Email address:</span>
          <span>{{ CONTACT_INFO.email }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
