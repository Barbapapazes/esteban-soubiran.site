<script lang="ts" setup>
defineProps<{
  to: string
}>()
</script>

<template>
  <h2>
    <CardOverlay />
    <NuxtLink :to="to">
      <span
        class="absolute z-10 inset-y--6 inset-x--4 sm:-inset-x-6"
      />
      <span class="relative font-semibold">
        <slot />
      </span>
    </NuxtLink>
  </h2>
</template>
