<script lang="ts" setup>
const { page } = useContent()
const date = new Date(page.value.date)
</script>

<template>
  <article class="max-w-2xl mx-auto flex flex-col">
    <div class="flex flex-col gap-4">
      <h1 class="dark:text-zinc-100 text-5xl font-bold tracking-tight">
        {{ page.title }}
      </h1>
      <time class="order-first flex flex-row items-center text-base dark:text-zinc-500 font-semibold">
        <span class="h-4 w-0.5 rounded-full dark:bg-zinc-500"></span>
        <span class="ml-3">
          {{ date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </span>
      </time>
    </div>
    <div class="mx-auto prose">
      <slot />
    </div>
  </article>
</template>