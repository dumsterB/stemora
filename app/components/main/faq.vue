<script setup lang="ts">
import { FAQ_ITEMS } from '~/constants'
import chatChecked from '~/assets/icons/chat-check.svg'
</script>

<template>
  <section id="faq" class="mt-[55px]">
    <div class="mb-[54px] space-y-4">
      <h2 class="text-blue text-center text-[24px] leading-[110%] font-semibold lg:text-[42px]">
        Frequently Asked Questions
      </h2>

      <p class="text-center text-[12px] font-medium lg:text-[20px]">
        Crypto ipsum bitcoin ethereum dogecoin litecoin. Cardano polymath klaytn harmony XRP chiliz maker.
      </p>
    </div>

    <BaseCarousel class="hidden lg:block" :slides="FAQ_ITEMS" :slides-per-view="3" :space-between="32">
      <template #slide="{ slide }">
        <div class="flex h-[316px] flex-col gap-6 rounded-[20px] bg-white p-6">
          <div class="flex flex-col gap-5">
            <div class="flex size-[82px] items-center justify-center rounded-[20px] bg-[#F5F5F5]">
              <img alt="" :src="chatChecked" />
            </div>

            <p class="text-[24px] font-semibold">Customer Reviews</p>
          </div>
          <p class="text-[18px] font-normal">{{ slide.text }}</p>
        </div>
      </template>
    </BaseCarousel>

    <div class="scrollbar-hide flex gap-[18px] overflow-y-scroll lg:hidden">
      <div
        v-for="(slide, index) in FAQ_ITEMS"
        :key="index"
        class="flex min-h-[241px] min-w-[310px] flex-col gap-6 rounded-[20px] bg-white p-4 first:ml-4 last:mr-4"
      >
        <div class="flex flex-col gap-5">
          <div class="flex size-[54px] items-center justify-center rounded-[8px] bg-[#F5F5F5]">
            <img alt="check" :src="chatChecked" class="size-[28px]" />
          </div>

          <p class="text-[16px] font-semibold">Customer Reviews</p>
        </div>
        <p class="text-[12px] font-normal">{{ slide.text }}</p>
      </div>
    </div>
  </section>
</template>
