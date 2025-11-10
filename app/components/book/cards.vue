<script setup lang="ts">
const data = [
  {
    text: 'Why Choose Stemora',
    desc: '5 OPTIONS AVAILABLE'
  },
  {
    text: 'Mattress Cleaning',
    desc: '4 OPTIONS AVAILABLE'
  },
  {
    text: 'Couch Cleaning',
    desc: '6 OPTIONS AVAILABLE'
  },
  {
    text: 'Upholstery Cleaning',
    desc: '4 OPTIONS AVAILABLE'
  }
]
function goToBook() {
  window.open('https://app.squareup.com/appointments/book/2ks607myr9m1j3/L920KXWQGGGAG/start', '_blank')
}
</script>

<template>
  <section id="cards" class="container">
    <div class="grid grid-cols-1 gap-[12px] lg:grid-cols-2 lg:gap-[30px]">
      <div
        v-for="(item, index) in data"
        :key="index"
        @click="goToBook"
        class="flex h-[181px] cursor-pointer flex-col items-center justify-center gap-y-6 rounded-[20px] bg-white shadow-md transition-all"
      >
        <p class="text-blue text-[24px] font-semibold lg:text-[34px]">{{ item.text }}</p>
        <p class="text-[16px] font-normal lg:text-[24px]">{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>
