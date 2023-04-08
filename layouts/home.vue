<template>
  <slot />
  <AppSection>
    <div class="mt-24 flex flex-col lg:flex-row items-start gap-12">
      <ProjectsList :max="3">
        Mes projets
      </ProjectsList>
      <ExperienceTimeline class="lg:max-w-sm">
        Mon Expérience
      </ExperienceTimeline>
    </div>
  </AppSection>
</template>
