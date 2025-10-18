<script setup lang="ts">
import { REVIEWS } from '~/constants'
</script>

<template>
  <section id="customer-review" class="mt-[55px]">
    <h2 class="text-blue mb-[54px] text-center text-[24px] leading-[110%] font-semibold lg:text-[42px]">
      Customer Reviews
    </h2>

    <BaseCarousel class="hidden lg:block" :slides="REVIEWS" :slides-per-view="3" :space-between="32" loop>
      <template #slide="{ slide }">
        <div class="flex h-[316px] flex-col gap-6 rounded-[20px] bg-white p-6">
          <div class="flex gap-5">
            <div class="size-[82px] rounded-full bg-black" />
            <div class="flex flex-col gap-3">
              <span class="text-[24px] font-semibold">
                {{ slide.name }}
              </span>
              <BaseRating :rate="slide.rate" />
            </div>
          </div>
          <p class="text-[18px] font-normal">{{ slide.text }}</p>
        </div>
      </template>
    </BaseCarousel>

    <div class="scrollbar-hide flex gap-[18px] overflow-y-scroll lg:hidden">
      <div
        v-for="(slide, index) in REVIEWS"
        :key="index"
        class="flex min-h-[241px] min-w-[310px] flex-col gap-6 rounded-[20px] bg-white p-4 first:ml-4 last:mr-4"
      >
        <div class="flex gap-5">
          <div class="size-[54px] rounded-full bg-black" />
          <div class="flex flex-col gap-3">
            <span class="text-[16px] font-semibold">
              {{ slide.name }}
            </span>
            <BaseRating :rate="slide.rate" />
          </div>
        </div>
        <p class="text-[12px] font-normal">{{ slide.text }}</p>
      </div>
    </div>
  </section>
</template>
