<script setup lang="ts">
import bg from '@/assets/images/process-bg.png'
</script>
<template>
  <section
    id="hero"
    :style="{
      backgroundImage: `url(${bg})`
    }"
    class="flex items-center justify-center bg-cover bg-center bg-no-repeat max-sm:h-[50dvh] lg:max-h-[625px]"
  >
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="rounded-[20px] p-[30px] backdrop-blur-sm lg:px-[50px] lg:py-[98px]">
          <p class="mb-[31px] text-[32px] leading-[130%] font-bold text-white lg:text-[52px]">
            Book Your Appointment Today!
          </p>
          <p class="text-[14px] leading-[120%] font-medium text-white lg:text-[20px]">
            Select from the variety of options for our services to ensure that you get that fresh start to your home
            that you've been looking for
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
