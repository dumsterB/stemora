<script setup lang="ts">
const model = defineModel<string>({ default: '' })

interface Props {
  placeholder: string
  type?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false
})
</script>

<template>
  <input
    v-model="model"
    :placeholder
    :type
    :disabled
    class="focus:border-secondary rounded-[12px] border border-[#D2D2D2] px-3 py-4 text-[12px] font-medium transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
  />
</template>
