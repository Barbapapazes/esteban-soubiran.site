<script lang="ts" setup>
import { Popover, PopoverButton } from '@headlessui/vue'

const openNavigation = ref(false)

</script>

<template>
  <Popover>
    <HeaderItem
      :as="PopoverButton"
      type="button"
      title="Ouvrir la navigation"
      v-bind="$attrs"
      class="font-medium text-content px-4 py-2 flex items-center gap-2"
      hover
      @click="openNavigation = true"
    >
      <span>
        Menu
      </span>
      <Icon
        class="h-auto w-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
        name="heroicons:chevron-down"
      />
    </HeaderItem>
    <HeaderNavigationDialog v-model:open="openNavigation" />
  </Popover>
</template>
