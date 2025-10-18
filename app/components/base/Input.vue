<script setup lang="ts">
const model = defineModel<string>({ default: '' })
defineProps<{
  placeholder: string
}>()
</script>

<template>
  <input
    v-model="model"
    :placeholder
    class="rounded-[12px] border border-[#D2D2D2] px-3 py-4 text-[12px] font-medium"
  />
</template>
