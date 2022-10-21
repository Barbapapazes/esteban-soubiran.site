<template>
  <section>
    <AtomsAppSection>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </AtomsAppSection>
    <div class="mt-16 sm:mt-20">
      <ContentSlot :use="$slots.pictures" unwrap="p" />
    </div>
    <AtomsAppSection class="mt-24">
      <AtomsAppGrid>
        <ContentSlot :use="$slots.grid" unwrap="p" />
      </AtomsAppGrid>
    </AtomsAppSection>
  </section>
</template>