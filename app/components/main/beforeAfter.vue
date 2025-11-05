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
        <ImgComparisonSlider
          v-for="(image, index) in desktopRow1"
          :key="index"
          class="slider-example-split-line rounded-[20px]"
        >
          <img alt="Before" slot="first" :src="image.before" />
          <img alt="After" slot="second" :src="image.after" />
          <svg slot="handle" width="61" height="29" viewBox="0 0 61 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.43241 3.61384L2.89933 12.5391C2.24588 13.5931 2.24588 15.3179 2.89933 16.372L8.43241 25.2972"
              stroke="white"
              stroke-width="1.44556"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="15.6602" width="28.9112" height="28.9112" rx="14.4556" fill="white" />
            <circle cx="30.1158" cy="14.4556" r="8.43243" fill="#FE823F" />
            <path
              d="M51.7992 3.61384L57.3323 12.5391C57.9857 13.5931 57.9857 15.3179 57.3323 16.372L51.7992 25.2972"
              stroke="white"
              stroke-width="1.44556"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ImgComparisonSlider>
      </div>
      <div class="mb-10 grid grid-cols-2 gap-[60px]">
        <ImgComparisonSlider
          v-for="(image, index) in desktopRow2"
          :key="index"
          class="slider-example-split-line rounded-[20px]"
        >
          <img alt="Before" slot="first" :src="image.before" />
          <img alt="After" slot="second" :src="image.after" />
          <svg slot="handle" width="61" height="29" viewBox="0 0 61 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.43241 3.61384L2.89933 12.5391C2.24588 13.5931 2.24588 15.3179 2.89933 16.372L8.43241 25.2972"
              stroke="white"
              stroke-width="1.44556"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="15.6602" width="28.9112" height="28.9112" rx="14.4556" fill="white" />
            <circle cx="30.1158" cy="14.4556" r="8.43243" fill="#FE823F" />
            <path
              d="M51.7992 3.61384L57.3323 12.5391C57.9857 13.5931 57.9857 15.3179 57.3323 16.372L51.7992 25.2972"
              stroke="white"
              stroke-width="1.44556"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </ImgComparisonSlider>
      </div>
    </div>

    <!-- Mobile view -->
    <div class="mb-10 grid grid-cols-1 gap-8 lg:hidden">
      <ImgComparisonSlider
        v-for="(image, index) in mobileImages"
        :key="index"
        class="slider-example-split-line rounded-[20px]"
      >
        <img alt="Before" slot="first" class="object-contain" :src="image.before" />
        <img alt="After" slot="second" class="object-contain" :src="image.after" />
        <svg slot="handle" width="61" height="29" viewBox="0 0 61 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.43241 3.61384L2.89933 12.5391C2.24588 13.5931 2.24588 15.3179 2.89933 16.372L8.43241 25.2972"
            stroke="white"
            stroke-width="1.44556"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect x="15.6602" width="28.9112" height="28.9112" rx="14.4556" fill="white" />
          <circle cx="30.1158" cy="14.4556" r="8.43243" fill="#FE823F" />
          <path
            d="M51.7992 3.61384L57.3323 12.5391C57.9857 13.5931 57.9857 15.3179 57.3323 16.372L51.7992 25.2972"
            stroke="white"
            stroke-width="1.44556"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </ImgComparisonSlider>
    </div>
  </section>
</template>
