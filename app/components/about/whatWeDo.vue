<script setup lang="ts">
import whatWeDo from '~/assets/images/waht-we-do.png'
</script>

<template>
  <section id="what-we-do">
    <div class="container my-[104px] flex grid-cols-1 flex-col-reverse gap-[33px] lg:grid lg:grid-cols-2 lg:gap-[80px]">
      <div class="space-y-6 lg:space-y-[42px]">
        <div class="space-y-4 lg:space-y-6">
          <p class="text-blue text-[28px] leading-[130%] font-bold lg:text-[42px]">What We Do</p>
          <p class="text-[14px] leading-[130%] font-medium text-[#434343] lg:text-[20px]">
            We specialize in a wide range of cleaning services designed to restore freshness and extend the life of your
            furniture
          </p>
        </div>
        <div class="flex flex-col gap-3.5 text-[16px] leading-[130%] text-[#434343] lg:gap-8 lg:text-[22px]">
          <div class="flex items-center gap-5">
            <div class="bg-basis size-[12px] min-w-[12px] rounded-full lg:size-[20px] lg:min-w-[20px]" />
            <p><span class="text-basis font-semibold">Couch Cleaning</span> – removing dirt, stains, and odors</p>
          </div>
          <div class="flex items-center gap-5">
            <div class="bg-basis size-[12px] min-w-[12px] rounded-full lg:size-[20px] lg:min-w-[20px]" />
            <p>
              <span class="text-basis font-semibold">Carpet Cleaning</span> – deep steam cleaning for healthier floors.
            </p>
          </div>
          <div class="flex items-center gap-5">
            <div class="bg-basis size-[12px] min-w-[12px] rounded-full lg:size-[20px] lg:min-w-[20px]" />
            <p>
              <span class="text-basis font-semibold">Mattress Cleaning </span> – sanitizing and refreshing where it
              matters most.
            </p>
          </div>
          <div class="flex items-center gap-5">
            <div class="bg-basis size-[12px] min-w-[12px] rounded-full lg:size-[20px] lg:min-w-[20px]" />
            <p>
              <span class="text-basis font-semibold">Upholstery Cleaning</span> – protecting delicate fabrics and
              reviving colors.
            </p>
          </div>
        </div>
        <p class="text-[14px] leading-[130%] font-medium text-[#434343] lg:text-[20px]">
          From Manhattan to Brooklyn, Queens, and beyond — Stemora is your trusted New York partner for professional,
          affordable, and results-driven cleaning services.
        </p>
      </div>
      <img :src="whatWeDo" alt="" />
    </div>
  </section>
</template>
