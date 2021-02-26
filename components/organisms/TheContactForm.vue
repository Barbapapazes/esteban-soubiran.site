<template>
  <transition name="fade" mode="out-in">
    <AppText v-if="res" class="text-center">{{ res }}</AppText>
    <ContactForm v-else @res="res = $event" />
  </transition>
</template>

<script>
export default {
  data() {
    return {
      res: undefined,
    }
  },
}
</script>
