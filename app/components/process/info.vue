<script setup lang="ts">
import sofa3before from '~/assets/images/before-after/sofa3-before.png'
import sofa3after from '~/assets/images/before-after/sofa3-after.png'
import { ImgComparisonSlider } from '@img-comparison-slider/vue'
</script>
<template>
  <section id="info" class="container my-[80px] space-y-[150px]">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="space-y-6">
        <p class="text-blue text-[20px] leading-[130%] font-normal lg:text-[32px]">NYC STEAMERS</p>
        <p class="text-blue text-[32px] leading-[130%] font-bold lg:text-[52px]">
          Best Couch Cleaning In New York City
        </p>
      </div>
      <p class="text-[14px] font-medium text-[#434343] lg:text-[20px]">
        Our Services include deep cleaning of sofas, chairs, love seats, sectionals, and more. We use powerful steam
        cleaning technology and eco-friendly cleaning products to effectively remove dirt, grime, and stains from the
        fabric of your furniture. In addition to our couch cleaning service, we also offer additional cleaning services
        such as carpet cleaning, rug cleaning, and mattress cleaning.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-[60px]">
      <ImgComparisonSlider class="slider-example-split-line rounded-[20px]">
        <img alt="Before" slot="first" :src="sofa3before" />
        <img alt="After" slot="second" :src="sofa3after" />

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
      <div class="rounded-[20px] px-[25px] py-[30px] shadow-lg lg:px-[64px] lg:py-[48px]">
        <p class="text-blue mb-4 text-[28px] leading-[130%] font-bold lg:mb-8 lg:text-[42px]">
          Revive Your Couch, Refresh Your Home
        </p>
        <p class="mb-8 text-[12px] leading-[150%] font-medium lg:mb-[52px] lg:text-[24px]">
          Experience the luxury of steam cleaning as we revive your couch and refresh your home. Elevate comfort, renew
          your living space, and embrace a revitalized home like never before.
        </p>
        <BaseButton class="max-sm:w-full" @click="navigateTo('/book-now')">Book now</BaseButton>
      </div>
    </div>
  </section>
</template>
