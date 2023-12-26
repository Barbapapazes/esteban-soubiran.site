<script lang="ts" setup>
defineProps<{
  space?: string
  size?: string
}>()

const socials = usePortfolio().value.socials
</script>

<template>
  <nav class="text-gray-500 dark:text-gray-400">
    <h2 class="sr-only">
      Suivez-moi sur :
    </h2>
    <ul class="flex" :class="space ?? 'gap-2'">
      <li v-for="social in socials" :key="social.name">
        <NuxtLink
          :href="social.url"
          target="_blank"
          rel="noopener"
          class="block hover:text-gray-800 hover:dark:text-gray-200 transition ease-in"
          :class="[social.icon, size ?? 'w-5 h-5']"
        >
          <span class="sr-only">{{ social.name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
