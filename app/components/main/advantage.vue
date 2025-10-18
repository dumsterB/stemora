<script setup lang="ts">
import { ADVANTAGES } from '~/constants'
</script>

<template>
  <section id="advantage" class="container mt-[55px]">
    <h2 class="text-blue mb-[54px] text-center text-[24px] leading-[110%] font-semibold lg:text-[42px]">
      Why Choose Stemora
    </h2>
    <div class="grid grid-cols-2 gap-3 lg:gap-5">
      <div
        v-for="adv in ADVANTAGES"
        :key="adv.title"
        :class="adv.class"
        class="flex flex-col items-center rounded-[20px] p-8 transition-all"
      >
        <div class="flex size-[104px] items-center justify-center lg:size-[200px]">
          <img class="lg:size-[150px]" :src="adv.img" alt="" />
        </div>

        <p class="text-center text-[16px] leading-[120%] font-semibold tracking-[5%] text-[#1F1F1F] lg:text-[24px]">
          {{ adv.title }}
        </p>
      </div>
    </div>
  </section>
</template>
