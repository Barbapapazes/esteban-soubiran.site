<template>
  <header class="sm:px-8 lg:px-16 w-full">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
      <div class="relative w-full max-w-2xl lg:max-w-5xl mx-auto flex justify-between md:justify-center flex-row items-center">
        <HeaderHome class="md:absolute md:left-0" />

        <HeaderNavigation class="hidden md:flex" />

        <div class="w-full flex justify-end gap-6 md:absolute md:w-auto md:right-0">
          <HeaderNavigationMobile class="md:hidden" />
          <TheSearch class="" />
          <ColorModeSwitcher class="" />
        </div>
      </div>
    </div>
  </header>
</template>
