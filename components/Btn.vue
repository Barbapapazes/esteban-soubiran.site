<template>
  <div
    class="font-text text-white text-sm rounded-5 py-2 px-4 uppercase transition-shadow duration-300 hover:shadow-medium"
  >
    <span class="mr-2">&#60;</span><slot></slot><span class="ml-2">&#62;</span>
  </div>
</template>

<script>
export default {
  name: 'Btn',
}
</script>
