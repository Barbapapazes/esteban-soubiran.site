<template>
  <header class="sm:px-8 lg:px-16 w-full">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
      <div class="relative max-w-2xl lg:max-w-5xl mx-auto flex justify-end md:justify-center flex-row items-center">
        <HeaderHome class="absolute left-0" />

        <TheHeaderNavigation class="hidden md:flex" />

        <TheHeaderDialog class="md:hidden" />
        <TheSearch class="absolute right-16" />
        <ColorModeSwitcher class="absolute right-0" />
      </div>
    </div>
  </header>
</template>
