<script setup lang="ts">
import { ImgComparisonSlider } from '@img-comparison-slider/vue'
import sofa1before from '~/assets/images/before-after/sofa1-before.png'
import sofa1after from '~/assets/images/before-after/sofa1-after.png'
import sofa2before from '~/assets/images/before-after/sofa2-before.png'
import sofa2after from '~/assets/images/before-after/sofa2-after.png'
import sofa3before from '~/assets/images/before-after/sofa3-before.png'
import sofa3after from '~/assets/images/before-after/sofa3-after.png'
import sofa4before from '~/assets/images/before-after/sofa4-before.png'
import sofa4after from '~/assets/images/before-after/sofa4-after.png'

const images1 = [
  {
    before: sofa1before,
    after: sofa1after
  },
  {
    before: sofa2before,
    after: sofa2after
  }
]
const images2 = [
  {
    before: sofa3before,
    after: sofa3after
  },
  {
    before: sofa4before,
    after: sofa4after
  }
]
const images3 = [
  {
    before: sofa4before,
    after: sofa4after
  }
]
</script>

<template>
  <section id="before-after" class="container">
    <div class="mt-[55px]">
      <h2 class="text-blue mb-[54px] text-center text-[24px] leading-[110%] font-semibold lg:text-[42px]">
        Before & After
      </h2>

      <div class="mb-8 grid grid-cols-1 gap-8 lg:mb-[70px] lg:grid-cols-2 lg:gap-[60px]">
        <ImgComparisonSlider v-for="(image, index) in images1" :key="index" class="rounded-[20px]">
          <img alt="" slot="first" class="object-contain" :src="image.before" />
          <img alt="" slot="second" class="object-contain" :src="image.after" />
        </ImgComparisonSlider>
      </div>
      <div class="mb-10 hidden grid-cols-2 gap-[60px] lg:grid">
        <ImgComparisonSlider v-for="(image, index) in images2" :key="index" class="mb-10 rounded-[20px]">
          <img alt="" slot="first" style="width: 100%" :src="image.before" />
          <img slot="second" style="width: 100%" :src="image.after" />
        </ImgComparisonSlider>
      </div>
      <div class="mb-10 grid grid-cols-1 gap-[60px] lg:hidden">
        <ImgComparisonSlider v-for="(image, index) in images3" :key="index" class="mb-10 rounded-[20px]">
          <img alt="" slot="first" style="width: 100%" :src="image.before" />
          <img alt="" slot="second" style="width: 100%" :src="image.after" />
        </ImgComparisonSlider>
      </div>
    </div>
  </section>
</template>
