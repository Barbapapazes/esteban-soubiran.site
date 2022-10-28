<template>
  <section>
    <AtomsAppSection>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </AtomsAppSection>
    <div class="mt-16 sm:mt-20">
      <ContentSlot :use="$slots.pictures" unwrap="p" />
    </div>
    <AtomsAppSection class="mt-24">
      <div class="flex flex-col xl:flex-row gap-12">
        <ContentSlot :use="$slots.grid" unwrap="p" />
      </div>
    </AtomsAppSection>
  </section>
</template>