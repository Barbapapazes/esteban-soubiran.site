<template>
  <nav
    class="
      w-full
      absolute
      grid
      gap-2
      justify-center
      items-center
      inset-x-0
      top-6
      bg-primary-base
      border-b-2 border-white
      font-text
      text-white text-center
      pb-2
    "
  >
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'MobileNav',
}
</script>
