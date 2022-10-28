<template>
  <AtomsAppSection>
    <div class="flex flex-col gap-20">
      <MoleculesProjectsHeader>
        <ContentSlot :use="$slots.default" unwrap="p" />
        <template v-slot:subtitle>
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </template>
      </MoleculesProjectsHeader>

      <MoleculesProjectsList></MoleculesProjectsList>
    </div>
  </AtomsAppSection>
</template>