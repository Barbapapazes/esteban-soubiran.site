<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])
</script>

<template>
  <AppPage :title="page.title" :description="page.description">
    <section v-for="(group, index) in page.projects" :key="index">
      <h2 class="text-center text-xl sm:text-2xl font-semibold">
        {{ index }}
      </h2>

      <div class="mt-8 mx-auto flex justify-center">
        <div class="grid grid-cols-1 gap-8" :class="{ 'xl:grid-cols-1': group.length === 1, 'md:grid-cols-2 xl:grid-cols-2': group.length === 2, 'md:grid-cols-2 xl:grid-cols-3': group.length === 3 }">
          <UCard v-for="project in group" :key="project.name" as="article" :ui="{ base: 'w-80 group relative overflow-visible flex flex-col', shadow: '', background: 'bg-white dark:bg-gray-900', divide: 'divide-none', ring: 'ring-0', body: { base: 'flex flex-row gap-4 items-center', padding: 'py-0 px-0 sm:p-0 !pt-2' } }">
            <div
              class="absolute -inset-4 z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800/50 sm:rounded-lg duration-200 ease-in"
            />
            <div class="relative shrink-0">
              <img v-if="project.img" :src="project.img" aria-hidden="true" class="w-10">
              <div v-else-if="project.icon" :class="project.icon" aria-hidden="true" class="w-10" />
            </div>
            <div>
              <h3 class="font-semibold tex-lg">
                <NuxtLink :to="project.to" target="_blank" rel="noopener">
                  <span class="absolute -inset-4 z-20 sm:rounded-lg" />
                  <span class="relative">
                    {{ project.name }}
                  </span>
                </NuxtLink>
              </h3>
              <p class="mt-1 relative text-gray-500 dark:text-gray-400">
                {{ project.description }}
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </section>
  </AppPage>
</template>
