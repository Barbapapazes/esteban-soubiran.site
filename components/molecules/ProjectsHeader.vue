<template>
  <header class="max-w-2xl flex flex-col gap-6">
    <h1 class="text-5xl dark:text-zinc-100 font-bold">
      <slot></slot>
    </h1>
    <p class="text-base text-zinc-400">
      <slot name="subtitle"></slot>
    </p>
  </header>
</template>