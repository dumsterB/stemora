<script setup lang="ts">
const model = defineModel<string>({ default: '' })

interface Props {
  placeholder: string
  disabled?: boolean
  rows?: number
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  rows: 4
})
</script>

<template>
  <textarea
    v-model="model"
    :placeholder
    :disabled
    :rows
    class="focus:border-secondary resize-none rounded-[12px] border border-[#D2D2D2] px-3 py-4 text-[12px] font-medium transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
  />
</template>
