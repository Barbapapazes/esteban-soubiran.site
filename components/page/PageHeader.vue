<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="max-w-lg">
    <PageTitle>
      {{ title }}
    </PageTitle>
    <PageProse class="mt-6">
      <slot />
    </PageProse>
  </div>
</template>
