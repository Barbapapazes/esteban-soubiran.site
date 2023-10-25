<script lang="ts" setup>
defineProps<{
  to: string
}>()
</script>

<template>
  <div class="flex justify-center">
    <NuxtLink :to="to" class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-blur shadow-base border-base hover:ring-zinc-900/10 hover:dark:ring-white/20 transition ease-in">
      <span>
        <slot />
      </span>
      <span class="i-heroicons-chevron-right-20-solid block w-5 h-5" />
    </NuxtLink>
  </div>
</template>
