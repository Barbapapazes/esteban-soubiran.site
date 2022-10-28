<template>
  <AtomsAppSection>
    <div class="flex flex-col gap-20">
      <OrganismsProjectsHeader>
        <ContentSlot :use="$slots.default" unwrap="p" />
        <template v-slot:subtitle>
          <ContentSlot :use="$slots.subtitle" unwrap="p" />
        </template>
      </OrganismsProjectsHeader>

      <OrganismsProjectsList></OrganismsProjectsList>
    </div>
  </AtomsAppSection>
</template>