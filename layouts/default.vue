<template>
  <div class="bg-deep-blue">
    <transition name="fade-long" appear>
      <TheHeader style="transition-delay: 1.2s" />
    </transition>
    <main class="px-5 md:px-10 lg:px-16 pb-5 md:pb-10 lg:pb-16">
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>
