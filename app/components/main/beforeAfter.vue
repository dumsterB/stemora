<script setup lang="ts">
import { ImgComparisonSlider } from '@img-comparison-slider/vue'
import { BEFORE_AFTER_IMAGES } from '~/constants'

// Разделяем изображения для разных секций
const desktopRow1 = BEFORE_AFTER_IMAGES.slice(0, 2)
const desktopRow2 = BEFORE_AFTER_IMAGES.slice(2, 4)
const mobileImages = BEFORE_AFTER_IMAGES.slice(0, 3)
</script>

<template>
  <section id="before-after" class="container mt-[55px]">
    <h2 class="text-blue mb-[54px] text-center text-[24px] leading-[110%] font-semibold lg:text-[42px]">
      Before & After
    </h2>

    <!-- Desktop view -->
    <div class="hidden lg:block">
      <div class="mb-[70px] grid grid-cols-2 gap-[60px]">
        <ImgComparisonSlider v-for="(image, index) in desktopRow1" :key="index" class="rounded-[20px]">
          <img alt="Before" slot="first" :src="image.before" />
          <img alt="After" slot="second" :src="image.after" />
        </ImgComparisonSlider>
      </div>
      <div class="mb-10 grid grid-cols-2 gap-[60px]">
        <ImgComparisonSlider v-for="(image, index) in desktopRow2" :key="index" class="rounded-[20px]">
          <img alt="Before" slot="first" :src="image.before" />
          <img alt="After" slot="second" :src="image.after" />
        </ImgComparisonSlider>
      </div>
    </div>

    <!-- Mobile view -->
    <div class="mb-10 grid grid-cols-1 gap-8 lg:hidden">
      <ImgComparisonSlider v-for="(image, index) in mobileImages" :key="index" class="rounded-[20px]">
        <img alt="Before" slot="first" class="object-contain" :src="image.before" />
        <img alt="After" slot="second" class="object-contain" :src="image.after" />
      </ImgComparisonSlider>
    </div>
  </section>
</template>
