<template>
  <div class="flex flex-col xl:flex-row gap-12">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>