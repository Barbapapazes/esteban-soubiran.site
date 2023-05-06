<script lang="ts" setup>
const { page } = useContent()
</script>

<template>
  <div>
    <dl class="pl-4 mx-0 border-l-4 border-zinc-200 dark:border-zinc-600 flex flex-col gap-2 text-zinc-400 dark:text-zinc-500 text-lg">
      <dt class="sr-only">
        Évènement du talk
      </dt>
      <dd>
        <NuxtLink :href="page.event.url" rel="noopener" class="text-sky-500 dark:text-sky-400 hover:underline">
          {{ page.event.name }}
        </NuxtLink>
      </dd>
      <div class="flex flex-row">
        <dt>
          Slides :&nbsp;
        </dt>
        <dd class="flex flex-row gap-1">
          <NuxtLink :href="page.slides.pdf" rel="noopener" target="_blank" class="text-sky-500 dark:text-sky-400 hover:underline">
            PDF
          </NuxtLink>
          /
          <NuxtLink :href="page.slides.spa" rel="noopener" target="_blank" class="text-sky-500 dark:text-sky-400 hover:underline">
            SPA
          </NuxtLink>
        </dd>
      </div>
      <div class="flex flex-row">
        <dt>
          Enregistrement :&nbsp;
        </dt>
        <dd>
          <NuxtLink :href="page.recording" rel="noopener" class="text-sky-500 dark:text-sky-400 hover:underline">
            YouTube
          </NuxtLink>
        </dd>
      </div>
    </dl>
  </div>
</template>
