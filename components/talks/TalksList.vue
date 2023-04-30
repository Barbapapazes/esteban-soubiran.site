<script lang="ts" setup>
const { data: talks } = await useTalks()
</script>

<template>
  <section>
    <h2 class="sr-only">
      <slot />
    </h2>
    <div class="flex max-w-3xl flex-col space-y-16">
      <ArticlesCard v-for="talk in talks" :key="talk._path" :article="talk" />
    </div>
  </section>
</template>
