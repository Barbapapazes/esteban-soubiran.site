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
      <PageHeader :title="page.title">
        <slot />
      </PageHeader>
      <TalksList>
        {{ page.title }}
      </TalksList>
    </PageSection>
  </AppSection>
</template>
