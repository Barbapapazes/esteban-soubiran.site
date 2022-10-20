<template>
  <header class="max-w-2xl flex flex-col gap-6">
    <h1 class="text-5xl dark:text-zinc-100 font-bold">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h1>
    <p class="text-base text-zinc-400">
      <ContentSlot :use="$slots.content" unwrap="p" />
    </p>
  </header>
</template>