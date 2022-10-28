<template>
  <section>
    <AtomsAppSection>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </AtomsAppSection>
    <div class="mt-16 sm:mt-20">
      <!-- TODO: use a component  -->
      <ContentSlot :use="$slots.pictures" unwrap="p" />
    </div>
    <AtomsAppSection class="mt-24">
      <div class="flex flex-col xl:flex-row gap-12">
        <!-- TODO: Only 3 -->
        <OrganismsProjectsList :max="3" class="grow"></OrganismsProjectsList>
        <!-- TODO: move to an organisms components -->
        <ExperienceList>
          Expérience
        </ExperienceList>
      </div>
    </AtomsAppSection>
  </section>
</template>