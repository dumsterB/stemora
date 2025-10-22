<script setup lang="ts">
import { ABOUT_WORKS_LIST } from '~/constants'

const isEven = (index: number) => index % 2 === 0
</script>

<template>
  <div class="container space-y-0">
    <h3 class="text-blue mb-[66px] text-center text-[32px] font-bold lg:mb-[120px] lg:text-[62px]">
      Couch & Upholstery Cleaning
    </h3>
    <div
      v-for="(item, index) in ABOUT_WORKS_LIST"
      :key="index"
      class="flex items-stretch gap-4 lg:gap-6"
      :class="['flex-row', isEven(index) ? 'lg:flex-row' : 'lg:flex-row-reverse']"
    >
      <!-- Line with dot (mobile - left) -->
      <div class="relative flex flex-col items-center lg:order-2">
        <!-- Top line -->
        <div v-if="index > 0" class="absolute bottom-1/2 h-1/2 w-1 bg-[#4D2C5E]/50 lg:w-2" />

        <!-- Dot -->
        <div
          class="relative z-10 my-auto size-[20px] rounded-full bg-[#4D2C5E] shadow-md ring-4 ring-white lg:size-[30px] lg:ring-[8px]"
        />

        <!-- Bottom line -->
        <div v-if="index < ABOUT_WORKS_LIST.length - 1" class="absolute top-1/2 h-1/2 w-1 bg-[#4D2C5E]/50 lg:w-2" />
      </div>

      <!-- Content card -->
      <div class="flex flex-1 items-center py-4 lg:order-1 lg:py-6">
        <div
          class="w-full rounded-xl bg-white p-4 shadow-lg transition-all hover:shadow-xl lg:rounded-2xl lg:p-6"
          :class="['ml-0', isEven(index) ? 'lg:mr-auto lg:ml-0' : 'lg:mr-0 lg:ml-auto']"
        >
          <h2 class="text-blue mb-2 text-left text-[24px] font-semibold lg:text-center lg:text-[34px]">
            {{ item.labelKey }}
          </h2>
          <p class="text-[12px] leading-[150%] font-normal text-gray-700 lg:text-[24px]">
            {{ item.descKey }}
          </p>
        </div>
      </div>

      <!-- Empty space for balance (desktop only) -->
      <div class="hidden flex-1 lg:order-3 lg:block"></div>
    </div>
  </div>
</template>
