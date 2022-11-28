<template>
  <header class="max-w-2xl flex flex-col gap-6">
    <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      <slot></slot>
    </h1>
    <p class="text-base text-zinc-600 dark:text-zinc-400">
      <slot name="subtitle"></slot>
    </p>
  </header>
</template>