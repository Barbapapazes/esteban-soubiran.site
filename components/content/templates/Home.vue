<template>
  <div>
    <BaseSection>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </BaseSection>
    <div class="mt-16 sm:mt-20">
      <ContentSlot :use="$slots.pictures" unwrap="p" />
    </div>
    <BaseSection class="mt-24">
      <div class="flex flex-col lg:flex-row items-start gap-12">
        <OrganismsProjectsList :max="3" class="grow">
          Mes projets
        </OrganismsProjectsList>
        <OrganismsExperienceTimeline class="lg:max-w-sm">
          Expérience
        </OrganismsExperienceTimeline>
      </div>
    </BaseSection>
  </div>
</template>
