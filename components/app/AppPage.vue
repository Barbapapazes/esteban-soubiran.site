<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="sm:px-8 lg:px-16">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
      <div class="max-w-2xl lg:max-w-5xl mx-auto flex flex-col gap-16">
        <div class="flex flex-col gap-4">
          <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            <slot name="title">
              {{ title }}
            </slot>
          </h1>
          <p class="max-w-lg text-zinc-500 dark:text-zinc-400">
            <slot name="description">
              {{ description }}
            </slot>
          </p>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>
