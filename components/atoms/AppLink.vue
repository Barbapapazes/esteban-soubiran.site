<template>
  <NuxtLink class="px-3 py-2 text-sm text-zinc-200 font-semibold hover:text-sky-500 transition-colors ease-in">
    <slot />
  </NuxtLink>
</template>

<style scoped>
.router-link-active {
  @apply text-sky-500;
}
</style>