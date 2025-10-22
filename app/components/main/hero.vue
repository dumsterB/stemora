<script setup lang="ts"></script>

<template>
  <section id="hero" class="flex h-dvh items-center justify-center">
    <div class="relative container space-y-8 pl-6">
      <div class="space-y-5">
        <h1 class="text-blue text-[32px] leading-[130%] font-bold tracking-[5%] lg:text-[68px]">
          Couch & Upholstery <br />
          Cleaning
        </h1>

        <p class="text-[16px] leading-[120%] font-medium tracking-[0%] lg:text-2xl">
          Eco-friendly deep cleaning for Sofas, carpers & more
        </p>
      </div>

      <BaseButton class="hidden lg:block">Book now</BaseButton>
      <img alt="sofa" src="~/assets/images/sofa-hero.png" class="static top-0 left-[512px] lg:absolute" />
      <div class="flex items-center justify-center lg:hidden">
        <BaseButton>Book now</BaseButton>
      </div>
    </div>
  </section>
</template>
