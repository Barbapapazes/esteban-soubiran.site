<script lang="ts" setup>
const { data: page } = await useAsyncData('home', () => queryContent('/').findOne())

const title = 'Estéban Soubiran'

useSeoMeta({
  title: null,
  ogTitle: title,
  description: page.value.description,
  ogDescription: page.value.description,
})
</script>

<template>
  <div>
    <AppSection>
      <HomeHero :title="page.hero.title" :description="page.hero.description" />
    </AppSection>

    <HomePicturesSection class="mt-16 sm:mt-20" :images="page.images" />

    <AppSection class="mt-24">
      <HomeLatestArticles />
      <div class="mt-24 flex flex-col lg:flex-row items-start gap-12">
        <HomeLatestProjects />
        <HomeMyExperience class="lg:max-w-sm" />
      </div>
    </AppSection>
  </div>
</template>
