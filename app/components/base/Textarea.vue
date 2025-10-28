<script setup lang="ts">
import type { TextareaHTMLAttributes } from 'vue'
const model = defineModel<string>({ default: '' })

interface Props extends /* @vue-ignore */ TextareaHTMLAttributes {
  rows?: number
}

withDefaults(defineProps<Props>(), {
  rows: 4
})
</script>

<template>
  <textarea
    v-model="model"
    v-bind="$attrs"
    class="focus:border-secondary resize-none rounded-[12px] border border-[#D2D2D2] px-3 py-4 text-[12px] font-medium transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
  />
</template>
