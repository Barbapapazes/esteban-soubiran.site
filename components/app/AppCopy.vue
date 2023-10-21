<script lang="ts" setup>
defineProps<{
  code: string
}>()

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <ClientOnly>
    <button v-if="isSupported" class="group/copy opacity-0 group-hover:opacity-100 absolute right-2 bottom-2 p-1 bg-blur rounded-md transition w-8 h-8 flex justify-center items-center" @click="copy(code)">
      <span v-if="copied" class="sr-only">Copier dans le presse-papier</span>
      <transition
        appear
        mode="out-in"
        enter-active-class="duration-150 ease-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-150 ease-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <AppCopyIcon v-if="copied" name="heroicons:check-solid" class="group-hover/copy:text-zinc-400 dark:group-hover/copy:text-zinc-300 transition ease-in" />
        <AppCopyIcon v-else name="heroicons:clipboard-document" class="group-hover/copy:text-zinc-400 dark:group-hover/copy:text-zinc-300 transition ease-in" />
      </transition>
    </button>
  </ClientOnly>
</template>
