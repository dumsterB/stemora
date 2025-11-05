<script setup lang="ts">
import missionIMG from '~/assets/images/mission.png'
</script>

<template>
  <section id="ourMission">
    <div class="container my-[104px] grid grid-cols-1 gap-[33px] lg:grid-cols-2 lg:gap-[80px]">
      <img :src="missionIMG" alt="" />
      <div class="space-y-6 lg:space-y-[42px]">
        <div class="space-y-4 lg:space-y-6">
          <p class="text-blue text-[28px] leading-[130%] font-bold lg:text-[42px]">Our Mission</p>
          <p class="text-[14px] leading-[130%] font-medium text-[#434343] lg:text-[20px]">
            Our mission is to deliver reliable and effective upholstery and fabric cleaning services across New York
            City. We focus on:
          </p>
        </div>
        <div class="text-basis flex flex-col gap-3.5 text-[16px] leading-[130%] font-semibold lg:gap-8 lg:text-[22px]">
          <div class="flex items-center gap-5">
            <div class="bg-basis size-[20px] min-w-[20px] rounded-full" />
            <p>Deep steam cleaning that goes beyond surface results.</p>
          </div>
          <div class="flex items-center gap-5">
            <div class="bg-basis size-[20px] min-w-[20px] rounded-full" />
            <p>Eco-friendly, family- and pet-safe products.</p>
          </div>
          <div class="flex items-center gap-5">
            <div class="bg-basis size-[20px] min-w-[20px] rounded-full" />
            <p>Honest pricing and transparent service.</p>
          </div>
          <div class="flex items-center gap-5">
            <div class="bg-basis size-[20px] min-w-[20px] rounded-full" />
            <p>Building long-term trust through consistent quality and professionalism.</p>
          </div>
        </div>
        <p class="text-[14px] leading-[130%] font-medium text-[#434343] lg:text-[20px]">
          At Stemora, we believe that clean furniture means a healthier lifestyle, improved air quality, and
          longer-lasting comfort.
        </p>
      </div>
    </div>
  </section>
</template>
