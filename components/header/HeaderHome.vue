<script lang="ts" setup>
const NuxtLink = resolveComponent('NuxtLink')

const { isHome } = useActivePath()
</script>

<template>
  <Transition>
    <template v-if="!isHome">
      <HeaderItem
        :as="NuxtLink"
        to="/"
        class="h-10 w-10 p-0.5"
        hover
      >
        <img
          src="/esteban.webp"
          alt="Photo de profil d'Estéban Soubiran"
          width="36"
          height="36"
          class="block w-9 h-9 rounded-full object-cover backdrop-filter backdrop-blur"
          loading="async"
        >
      </HeaderItem>
    </template>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
