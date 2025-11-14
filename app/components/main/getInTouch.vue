<script setup lang="ts">
import { CONTACT_INFO } from '~/constants'
import { useContactForm } from '~/composables/useContactForm'

const { formData, errors, isSubmitting } = useContactForm()
</script>

<template>
  <section id="get-in-touch" class="container pt-[122px] pb-[123px]">
    <div class="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
      <div class="flex flex-col gap-[20px] lg:gap-[62px]">
        <h2 class="text-blue text-center text-[24px] leading-[110%] font-semibold lg:text-left lg:text-[72px]">
          Get In Touch With Us
        </h2>

        <div class="hidden flex-col gap-[52px] lg:flex">
          <div class="flex items-center gap-5">
            <span class="text-blue text-[26px] font-bold">Follow us on:</span>
            <BaseSocials />
          </div>
          <div class="flex items-center gap-5">
            <span class="text-blue text-[26px] font-bold">Phone</span>
            <a :href="`tel:${CONTACT_INFO.phone}`" class="hover:text-secondary text-[20px] font-normal transition">
              {{ CONTACT_INFO.phone }}
            </a>
          </div>
          <div class="flex items-center gap-5">
            <span class="text-blue text-[26px] font-bold">Email</span>
            <a :href="`mailto:${CONTACT_INFO.email}`" class="hover:text-secondary text-[20px] font-normal transition">
              {{ CONTACT_INFO.email }}
            </a>
          </div>
        </div>
        <div class="flex flex-col items-center gap-6 lg:hidden">
          <div class="flex items-center justify-center gap-5">
            <div class="flex items-center gap-2">
              <span class="text-blue text-[14px] font-bold">Phone</span>
              <a :href="`tel:${CONTACT_INFO.phone}`" class="hover:text-secondary text-[12px] font-normal transition">
                {{ CONTACT_INFO.phone }}
              </a>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-blue text-[14px] font-bold">Email</span>
              <a :href="`mailto:${CONTACT_INFO.email}`" class="hover:text-secondary text-[12px] font-normal transition">
                {{ CONTACT_INFO.email }}
              </a>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <span class="text-blue text-[14px] font-bold">Follow us on:</span>
            <BaseSocials />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center rounded-[20px] bg-white max-sm:p-4 lg:min-h-[626px]">
        <form action="https://api.web3forms.com/submit" method="POST" class="flex max-w-[446px] flex-col gap-[26px]">
          <input type="hidden" name="access_key" value="e4aec544-626e-4fc9-9b19-50f825253a24" />
          <div class="space-y-2">
            <div class="text-[14px] font-semibold">Name</div>
            <div class="grid grid-cols-2 gap-5">
              <div>
                <BaseInput name="first_name" v-model="formData.firstName" placeholder="First" />
                <div v-if="errors.firstName" class="text-xs text-red-500">{{ errors.firstName }}</div>
              </div>
              <div>
                <BaseInput name="last_name" v-model="formData.lastName" placeholder="Last" />
                <div v-if="errors.lastName" class="text-xs text-red-500">{{ errors.lastName }}</div>
              </div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-[14px] font-semibold">Email</div>
            <div class="flex flex-col">
              <BaseInput name="email" v-model="formData.email" class="w-full" placeholder="Email" type="email" />
              <div v-if="errors.email" class="text-xs text-red-500">{{ errors.email }}</div>
            </div>
          </div>
          <div>
            <div class="mb-2 text-[14px] font-semibold">Message</div>
            <div>
              <BaseTextarea name="message" v-model="formData.message" class="w-full" placeholder="Message" />
              <span v-if="errors.message" class="text-xs text-red-500">{{ errors.message }}</span>
            </div>
            <BaseButton type="submit" :disabled="isSubmitting" class="mt-[20px]">
              {{ isSubmitting ? 'Sending...' : 'Submit' }}
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
