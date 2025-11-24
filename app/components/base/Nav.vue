<script setup lang="ts">
import { ref } from 'vue'
import { NAV_LINKS } from '~/constants'
import logo from '~/assets/images/logo.png'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="flex h-19 items-center bg-white">
    <div class="container flex flex-row items-center justify-between">
      <!-- Бургер-кнопка на мобилке вместо логотипа -->
      <svg
        @click="toggleMenu"
        class="block cursor-pointer lg:hidden"
        id="burger-btn"
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="38" height="38" rx="7" fill="#FF3E70" />
        <path
          d="M15.0337 10.6667H13.4503C11.6253 10.6667 10.667 11.625 10.667 13.4417V15.025C10.667 16.8417 11.6253 17.8 13.442 17.8H15.0253C16.842 17.8 17.8003 16.8417 17.8003 15.025V13.4417C17.8087 11.625 16.8503 10.6667 15.0337 10.6667Z"
          fill="white"
        />
        <path
          d="M24.5585 10.6667H22.9752C21.1585 10.6667 20.2002 11.625 20.2002 13.4417V15.025C20.2002 16.8417 21.1585 17.8 22.9752 17.8H24.5585C26.3752 17.8 27.3335 16.8417 27.3335 15.025V13.4417C27.3335 11.625 26.3752 10.6667 24.5585 10.6667Z"
          fill="white"
        />
        <path
          d="M24.5585 20.1914H22.9752C21.1585 20.1914 20.2002 21.1497 20.2002 22.9664V24.5497C20.2002 26.3664 21.1585 27.3247 22.9752 27.3247H24.5585C26.3752 27.3247 27.3335 26.3664 27.3335 24.5497V22.9664C27.3335 21.1497 26.3752 20.1914 24.5585 20.1914Z"
          fill="white"
        />
        <path
          d="M15.0337 20.1914H13.4503C11.6253 20.1914 10.667 21.1497 10.667 22.9664V24.5497C10.667 26.3747 11.6253 27.3331 13.442 27.3331H15.0253C16.842 27.3331 17.8003 26.3747 17.8003 24.5581V22.9747C17.8087 21.1497 16.8503 20.1914 15.0337 20.1914Z"
          fill="white"
        />
      </svg>

      <!-- Логотип на десктопе -->
      <img :src="logo" class="hidden w-50 lg:block" alt="" />

      <!-- Десктопное меню -->
      <ul class="hidden h-full items-center gap-15 lg:flex">
        <li v-for="link in NAV_LINKS" :key="link.name">
          <NuxtLink
            :to="link.href"
            active-class="text-secondary"
            class="font-pop hover:text-secondary text-lg font-medium text-[#9E9E9E]"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <BaseSocials class="!hidden lg:!flex" />
      <img :src="logo" class="block w-50 lg:block lg:hidden" alt="" />
      <BaseButton class="hidden lg:block" @click="navigateTo('/book-now#please')">Book now</BaseButton>
    </div>

    <!-- Оверлей для закрытия меню -->
    <div
      v-if="isMenuOpen"
      @click="closeMenu"
      class="bg-opacity-50 fixed inset-0 z-40 bg-black/60 transition-opacity lg:hidden"
    />

    <!-- Мобильное слайдящееся меню слева направо -->
    <div
      :class="[
        'fixed top-0 left-0 z-50 h-full w-[280px] bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <!-- Шапка меню с логотипом и кнопкой закрытия -->
      <div class="flex justify-end p-4">
        <button @click="closeMenu" class="text-gray-600 hover:text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <!-- Список навигации -->
      <ul class="flex flex-col p-4">
        <li v-for="link in NAV_LINKS" :key="link.name">
          <NuxtLink
            :to="link.href"
            @click="closeMenu"
            active-class="text-secondary"
            class="font-pop hover:text-secondary block py-4 text-lg font-medium text-[#9E9E9E]"
          >
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Социальные сети в меню -->
      <div class="px-4 py-6">
        <BaseSocials />
      </div>
    </div>
  </nav>
</template>
