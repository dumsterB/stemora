<script setup lang="ts" generic="T">
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'

interface CarouselProps<T> {
  slides: T[]
  slidesPerView?: number
  spaceBetween?: number
  loop?: boolean
  breakpoints?: any
}

const props = withDefaults(defineProps<CarouselProps<T>>(), {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  breakpoints: undefined
})

const swiperInstance = ref<SwiperType | null>(null)
const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}
</script>

<template>
  <ClientOnly>
    <div class="relative container">
      <button
        @click="swiperInstance?.slidePrev()"
        class="swiper-prev-btn absolute top-[calc(50%-20px)] left-[-36px] z-2 flex h-10 w-10 transform cursor-pointer items-center justify-center rounded-full bg-white shadow-sm transition duration-300 ease-in-out hover:scale-110"
      >
        &lt;
      </button>
      <button
        @click="swiperInstance?.slideNext()"
        class="swiper-next-btn absolute top-[calc(50%-20px)] right-[-36px] z-2 flex h-10 w-10 transform cursor-pointer items-center justify-center rounded-full bg-white shadow-sm transition duration-300 ease-in-out hover:scale-110"
      >
        &gt;
      </button>
      <Swiper
        class="swiper-basic"
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :loop="loop"
        :breakpoints="breakpoints"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="`slide-${index}`" class="swiper-slide">
          <slot name="slide" :slide="slide" :index="index" />
        </SwiperSlide>
      </Swiper>
    </div>
  </ClientOnly>
</template>
