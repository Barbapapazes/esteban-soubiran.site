<template>
  <div class="bg-deep-blue">
    <transition name="fade-long" appear>
      <TheHeader style="transition-delay: 1.2s" />
    </transition>
    <main>
      <Nuxt />
    </main>
    <TheFooter class="mt-16" />
  </div>
</template>
