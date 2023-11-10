<script lang="ts" setup>
const { page } = useContent()
</script>

<template>
  <div>
    <AppSection>
      <HomeHero :title="page.hero.title" :description="page.hero.description" />
    </AppSection>

    <HomePicturesSection class="mt-16 sm:mt-20" />

    <AppSection class="mt-24">
      <HomeLatestArticles />
      <div class="mt-24 flex flex-col lg:flex-row items-start gap-12">
        <HomeLatestProjects />
        <HomeMyExperience class="lg:max-w-sm" />
      </div>
    </AppSection>
  </div>
</template>
