<template>
  <div class="sm:px-8 lg:px-16">
    <div class="max-w-screen-xl mx-auto px-8">
      <div class="max-w-2xl lg:max-w-5xl mx-auto">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
    </div>
  </div>
</template>