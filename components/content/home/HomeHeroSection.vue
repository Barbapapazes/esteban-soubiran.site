<script lang="ts" setup>
defineProps<{
  profile: {
    src: string
    alt: string
  }
  // TODO: Add to app config
  socials: {
    name: string
    url: string
    icon: string
  }[]
}>()
</script>

<template>
  <AppSection>
    <HomeHero :profile="profile" :socials="socials">
      <template #title>
        <ContentSlot :use="$slots.title" unwrap="p" />
      </template>
      <template #subtitle>
        <ContentSlot :use="$slots.subtitle" unwrap="p" />
      </template>
    </HomeHero>
  </AppSection>
</template>
