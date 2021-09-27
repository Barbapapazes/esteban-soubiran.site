<template>
  <header
    class="
      flex
      justify-between
      items-center
      absolute
      top-5
      md:top-10
      lg:top-16
      inset-x-0
      px-6
      md:px-12
      lg:px-16
    "
  >
    <h1 class="tracking-tight text-light-grey font-text md:text-lg">
      <NuxtLink
        to="/"
        class="focus:outline-none focus:ring-white focus:ring-2 rounded p-1"
        >Estéban SOUBIRAN</NuxtLink
      >
    </h1>
    <button
      class="focus:outline-none focus:ring-white focus:ring-2 md:hidden"
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
    <MobileNavLinks :links="links" class="hidden md:grid" />
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
