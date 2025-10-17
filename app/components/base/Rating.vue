<script setup lang="ts">
interface RatingProps {
  rate: number
  maxRate?: number
}

const props = withDefaults(defineProps<RatingProps>(), {
  maxRate: 5
})

const filledStars = computed(() => Math.min(Math.max(Math.floor(props.rate), 0), props.maxRate))
const emptyStars = computed(() => props.maxRate - filledStars.value)
</script>

<template>
  <div class="flex items-center gap-1">
    <svg
      v-for="i in filledStars"
      :key="`filled-${i}`"
      class="size-5 fill-yellow-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
    <svg
      v-for="i in emptyStars"
      :key="`empty-${i}`"
      class="size-5 fill-gray-300"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  </div>
</template>
