<script setup lang="ts">
import sofa from '~/assets/icons/sofa.png'
import plastic from '~/assets/icons/plastic.png'
import dry from '~/assets/icons/dry.png'
import appointment from '~/assets/icons/appointment.png'
const advantageList = [
  {
    img: sofa,
    title: 'Deep sofa cleaning',
    class: 'bg-[#FAF1F2] hover:ring ring-[#FF4E64]'
  },
  {
    img: plastic,
    title: 'Eco-Friendly Steam',
    class: 'bg-[#FAF4F1] hover:ring ring-[#FF4E64] '
  },
  {
    img: dry,
    title: 'Fast dry Time',
    class: 'bg-[#F8F6FB] hover:ring ring-[#FF4E64] '
  },
  {
    img: appointment,
    title: 'Easy scheduling',
    class: 'bg-[#EDF1F5] hover:ring ring-[#FF4E64] '
  }
]
</script>

<template>
  <section id="advantage" class="container mt-[55px]">
    <h2 class="text-blue mb-[54px] text-center text-[42px] leading-[110%] font-semibold">Why Choose Stemora</h2>
    <div class="flex gap-5">
      <div
        v-for="adv in advantageList"
        :key="adv.title"
        :class="adv.class"
        class="flex size-[345px] flex-col items-center rounded-[20px] p-8 transition-all"
      >
        <div class="flex size-[200px] items-center justify-center">
          <img class="size-[150px]" :src="adv.img" alt="" />
        </div>

        <p class="text-center text-[24px] leading-[120%] font-semibold tracking-[5%] text-[#1F1F1F]">{{ adv.title }}</p>
      </div>
    </div>
  </section>
</template>
