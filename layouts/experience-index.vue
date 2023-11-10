<script lang="ts" setup>
const { page } = useContent()

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])
</script>

<template>
  <AppSection>
    <PageSection class="gap-20">
      <PageHeader :title="page.hero.title ?? page.title" :description="page.hero.description">
        <slot />
      </PageHeader>
      <ExperienceList>
        {{ page.title }}
      </ExperienceList>
    </PageSection>
  </AppSection>
</template>
