<script setup lang="ts">
const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Process', href: '/process' },
  { name: 'Contact', href: '/contact' }
]
</script>
<template>
  <footer class="container bg-white">
    <div class="flex flex-col justify-between pt-[60px] pb-[100px] max-sm:items-center max-sm:gap-[42px] lg:flex-row">
      <BaseSkeleton class="h-13 w-50" />

      <ul class="flex h-full flex-row gap-5 lg:flex-col">
        <li v-for="link in links" :key="link.name">
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
            100015, Republic of Uzbekistan, Tashkent, Mirabad district, st. Nukusskaya, 22
          </span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-[14px] font-medium">Phone number:</span>
          <span class="text-[12px] font-normal">(+99871) 231-79-09</span>
        </div>
      </div>
      <div class="flex flex-col gap-[34px] max-sm:items-center">
        <div class="flex flex-col gap-3">
          <span class="text-[18px] font-bold max-sm:text-center">Follow us on:</span>
          <BaseSocials />
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-[18px] font-bold">Email address:</span>
          <span>finfo@gmail.com</span>
        </div>
      </div>
    </div>
  </footer>
</template>
