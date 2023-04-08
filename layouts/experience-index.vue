<script lang="ts" setup>
const { page } = useContent()

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage'
  })
])
</script>

<template>
  <AppSection>
    <PageSection class="gap-20">
      <PageHeader :title="page.title">
        <slot />
      </PageHeader>
      <ExperienceList>
        {{ page.title }}
      </ExperienceList>
    </PageSection>
  </AppSection>
</template>
