<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
const model = defineModel<string>({ default: '' })

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  type?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text'
})
</script>

<template>
  <input
    v-model="model"
    v-bind="$attrs"
    :type
    class="focus:border-secondary rounded-[12px] border border-[#D2D2D2] px-3 py-4 text-[12px] font-medium transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
  />
</template>
