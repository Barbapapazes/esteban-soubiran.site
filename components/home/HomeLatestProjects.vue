<script lang="ts" setup>
const { data } = await useAsyncData('content:home-projects', () => queryContent('/projets/').findOne())
</script>

<template>
  <HomeSection icon="i-heroicons-folder-open-20-solid">
    <template #title>
      Mes derniers projets
    </template>

    <ol class="flex flex-col gap-2">
      <li v-for="(group, index) in data.projects" :key="index">
        <span>
          {{ index }}
        </span>
        <ul class="mt-1 flex flex-row items-center gap-2 text-gray-500 dark:text-gray-400">
          <li v-for="project in group" :key="project.to" class="flex flex-row items-center gap-1">
            <div class="relative shrink-0">
              <img v-if="project.img" :src="project.img" aria-hidden="true" class="w-4">
              <div v-else-if="project.icon" :class="project.icon" aria-hidden="true" class="w-4" />
            </div>
            <NuxtLink :to="project.to" target="_blank" rel="noopener">
              {{ project.name }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ol>

    <template #actions>
      <UButton to="/projets" color="white" trailing icon="i-heroicons-chevron-right-20-solid">
        Explorer mes projets
      </UButton>
    </template>
  </HomeSection>
</template>
