<script lang="ts" setup>
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="max-w-lg">
    <PageTitle>
      {{ title }}
    </PageTitle>
    <PageProse class="mt-6">
      {{ description }}
    </PageProse>
  </div>
</template>
