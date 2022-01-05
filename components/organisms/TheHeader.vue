<script>
import { ref } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default {
  name: 'TheHeader',
  setup() {
    const header = ref()

    useMotion(header, {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
        transition: {
          duration: 1200,
          delay: 1200,
        },
      },
    })

    return {
      header,
    }
  },
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

<template>
  <header
    ref="header"
    class="
      z-10
      opacity-0
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
    <h1 class="tracking-tight text-white font-text md:text-lg">
      <NuxtLink
        to="/"
        class="focus:outline-none focus:ring-white focus:ring-2 rounded-md p-1"
      >
        Estéban SOUBIRAN
      </NuxtLink>
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

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
