<script lang="ts" setup>
const { data } = await useAsyncData('content:home-my-experience', () => queryContent('/experience/').sort({ to: -1 }).only(['_path', 'title', 'company', 'from', 'to']).find())
</script>

<template>
  <section class="group relative w-full rounded-2xl border dark:border-gray-700/40 p-6 flex flex-col gap-6">
    <h2 class="flex gap-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
      <div class="i-heroicons-briefcase-20-solid h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition ease-in" />
      <span class="absolute inset-0" />
      <NuxtLink to="/experience">
        Mon Expérience
      </NuxtLink>
    </h2>
    <ul class="flex flex-col gap-4">
      <li v-for="experience in data" :key="experience._path">
        <NuxtLink :to="experience._path" class="relative group/item w-full flex flex-row items-center gap-4">
          <div
            class="absolute -inset-y-2 -inset-x-2 z-0 scale-95 bg-gray-50 opacity-0 transition group-hover/item:scale-100 group-hover/item:opacity-100 dark:bg-gray-800/50 rounded-md duration-200 ease-in"
          />
          <ExperienceImage
            small
            :image="experience.company"
            class="shrink-0
      "
          />
          <dl class="relative flex flex-auto flex-wrap gap-x-2">
            <dt class="sr-only">
              Entreprise
            </dt>
            <dd class="w-full flex-none text-sm font-medium text-gray-800 dark:text-gray-100">
              {{ experience.company.name }}
            </dd>
            <dt class="sr-only">
              Poste
            </dt>
            <dd class="text-xs text-gray-500 dark:text-gray-400">
              {{ experience.title }}
            </dd>
            <dt class="sr-only">
              Date
            </dt>
            <dd class="ml-auto text-xs text-gray-500 dark:text-gray-400">
              <time :datetime="experience.from">
                {{ experience.from }}
              </time>
              -
              <time :datetime="experience.to">
                {{ experience.to }}
              </time>
            </dd>
          </dl>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
