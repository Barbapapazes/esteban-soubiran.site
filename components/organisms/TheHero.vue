<template>
  <section
    class="h-screen flex flex-col justify-between py-5 md:py-10 lg:py-16"
  >
    <div class="h-full flex flex-col md:flex-row justify-center items-center">
      <div
        class="grid gap-8 md:gap-16 md:grid-flow-col md:auto-cols-max font-text text-center md:text-left justify-items-center"
      >
        <div class="grid gap-8">
          <transition name="slideup" appear>
            <Title>code</Title>
          </transition>
          <transition name="slideup" appear>
            <div style="transition-delay: 0.1s" class="grid gap-2 md:gap-1">
              <Subtitle>Élève-ingénieur en sécurité informatique</Subtitle>
              <Subtitle> Développeur web dans son temps libre</Subtitle>
              <Subtitle> Passionné par le monde associatif</Subtitle>
            </div>
          </transition>
        </div>
        <transition name="fade-long" appear>
          <img
            style="transition-delay: 0.6s"
            src="~/assets/img/pp-esteban.webp"
            alt="photo de profil de Estéban"
            class="shadow-small rounded-full shadow-medium"
            width="250"
            height="250"
          />
        </transition>
      </div>
    </div>
    <transition name="fade-long" appear>
      <hr
        class="bg-white h-small md:h-medium rounded-full"
        style="transition-delay: 1.2s"
      />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'TheHero',
}
</script>
