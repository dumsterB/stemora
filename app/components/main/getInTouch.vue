<script setup lang="ts"></script>

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
            <span class="text-[20px] font-normal">(+99871) 231-79-09</span>
          </div>
          <div class="flex items-center gap-5">
            <span class="text-blue text-[26px] font-bold">Email</span>
            <span class="text-[20px] font-normal">finfo@gmail.com</span>
          </div>
        </div>
        <div class="flex flex-col items-center gap-6 lg:hidden">
          <div class="flex items-center justify-center gap-5">
            <div class="flex items-center gap-2">
              <span class="text-blue text-[14px] font-bold">Phone</span>
              <span class="text-[12px] font-normal">(+99871) 231-79-09</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-blue text-[14px] font-bold">Email</span>
              <span class="text-[12px] font-normal">finfo@gmail.com</span>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <span class="text-blue text-[14px] font-bold">Follow us on:</span>
            <BaseSocials />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center rounded-[20px] bg-white max-sm:p-4 lg:min-h-[626px]">
        <div class="flex max-w-[446px] flex-col gap-[26px]">
          <div class="space-y-2">
            <div class="text-[14px] font-semibold">Name</div>
            <div class="grid grid-cols-2 gap-5">
              <BaseInput placeholder="First" />
              <BaseInput placeholder="Last" />
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-[14px] font-semibold">Email</div>
            <div>
              <BaseInput class="w-full" placeholder="Email" />
            </div>
          </div>
          <div>
            <div class="mb-2 text-[14px] font-semibold">Message</div>
            <div>
              <BaseTextarea class="w-full" placeholder="Message" />
            </div>
            <BaseButton class="mt-[20px]">Submit</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
