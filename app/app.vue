<script setup>
useHead({
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-17884624122',
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17884624122');
      `,
    },
  ],
})
</script>

<template>
  <div class="@container/main">
    <BaseNav />
    <NuxtPage />
    <BaseFooter />
  </div>
</template>
