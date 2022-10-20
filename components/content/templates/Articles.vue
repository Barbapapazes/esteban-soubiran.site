<template>
  <section class="flex flex-col gap-20">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </section>
</template>