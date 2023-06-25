<script lang="ts" setup>
defineProps<{
  toc: any
}>()

const open = ref(false)
</script>

<template>
  <div class="max-w-prose mx-auto w-full mt-6 mb-4 text-zinc-800 dark:text-zinc-200">
    <button type="button" class="flex flex-row items-center gap-2" @click="open = !open">
      <span> Sommaire </span>
      <Icon name="heroicons:play-20-solid" class="w-3 h-3 transition-transform duration-75 ease-in" :class="{'transform rotate-90': open }" />
    </button>
    <ul v-show="open" class="ml-4 mt-4">
      <li v-for="link in toc.links" :key="link.id">
        <NuxtLink :to="`#${link.id}`" class="block hover:text-sky-500 hover:dark:text-sky-400">
          {{ link.text }}
        </NuxtLink>
        <template v-if="link.children">
          <ul class="ml-2 pl-4 my-2 border-l-1 border-zinc-200 dark:border-zinc-700 flex flex-col">
            <li v-for="child in link.children" :key="child.id">
              <NuxtLink :to="`#${child.id}`" class="block hover:text-sky-500 hover:dark:text-sky-400">
                {{ child.text }}
              </NuxtLink>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </div>
</template>
