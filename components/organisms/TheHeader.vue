<template>
  <header
    class="flex justify-between items-center absolute top-5 inset-x-0 px-5"
  >
    <h1 class="tracking-tight text-light-grey font-text">
      <NuxtLink to="/">Estéban SOUBIRAN</NuxtLink>
    </h1>
    <button
      class="focus:outline-none focus:ring-white focus:ring-2"
      @click="toggleOpen()"
    >
      <transition name="fade" mode="out-in">
        <IconDismiss v-if="open" class="h-5 w-5" fill="white"></IconDismiss>
        <IconMenu v-else class="h-5 w-5" fill="white"></IconMenu>
      </transition>
    </button>
    <TransitionExpend>
      <MobileNav v-if="open" v-click-outside="clickOutsideHandler">
        <MobileNavLinks :links="links" />
      </MobileNav>
    </TransitionExpend>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      open: false,
      links: [
        { name: 'Home', link: 'home' },
        { name: 'Projets', link: 'projets' },
        { name: 'Bénévolat', link: 'benevolat' },
        { name: 'Compétences', link: 'competences' },
        { name: 'Études', link: 'etudes' },
        { name: 'À propos', link: 'a-propos' },
        { name: 'Contact', link: 'contact' },
      ],
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
    clickOutsideHandler() {
      if (this.open) {
        this.open = false
      }
    },
  },
}
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
