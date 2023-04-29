<template>
  <AppSection>
    <HomeHero>
      <template #title>
        <ContentSlot :use="$slots.title" unwrap="p" />
      </template>
      <template #subtitle>
        <ContentSlot :use="$slots.subtitle" unwrap="p" />
      </template>
    </HomeHero>
  </AppSection>
</template>
