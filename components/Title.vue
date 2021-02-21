<template>
  <h2 class="text-4xl md:text-8xl text-white font-text">
    <span class="mr-2">&#60;</span><slot></slot><span class="ml-2">&#62;</span>
  </h2>
</template>

<script>
export default {
  name: 'Title',
}
</script>
