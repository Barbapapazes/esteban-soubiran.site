<template>
  <div>
    <AtomsAppSection>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </AtomsAppSection>
    <div class="mt-16 sm:mt-20">
      <ContentSlot :use="$slots.pictures" unwrap="p" />
    </div>
    <AtomsAppSection class="mt-24">
      <div class="flex flex-col lg:flex-row gap-12">
        <OrganismsProjectsList :max="3" class="grow">
          Mes projets
        </OrganismsProjectsList>
        <OrganismsExperienceList class="lg:max-w-sm">
          Expérience
        </OrganismsExperienceList>
      </div>
    </AtomsAppSection>
  </div>
</template>