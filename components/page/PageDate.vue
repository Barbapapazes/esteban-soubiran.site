<script lang="ts" setup>
defineProps<{
  datetime: string
}>()

</script>

<template>
  <AppDate :datetime="datetime" />
</template>
