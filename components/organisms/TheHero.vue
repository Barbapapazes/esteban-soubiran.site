<template>
  <section class="h-screen flex flex-col justify-between py-5">
    <div class="h-full flex flex-col justify-center items-center">
      <div class="grid gap-8 font-text text-center justify-items-center">
        <transition name="slideup" appear>
          <Title>code</Title>
        </transition>
        <transition name="slideup" appear>
          <div style="transition-delay: 0.1s">
            <Subtitle class="mb-3"
              >Élève-ingénieur en sécurité informatique</Subtitle
            >
            <Subtitle class="mb-3">
              Développeur web dans son temps libre</Subtitle
            >
            <Subtitle> Passionné par le monde associatif</Subtitle>
          </div>
        </transition>
        <transition name="fade-long" appear>
          <img
            style="transition-delay: 0.4s"
            src="~/assets/img/pp-esteban.webp"
            alt="photo de profil de Estéban"
            class="shadow-small rounded-full shadow-medium w-2/4"
            width="250"
            height="250"
          />
        </transition>
      </div>
    </div>
    <hr class="bg-white h-small rounded-full" />
  </section>
</template>

<script>
export default {
  name: 'TheHero',
}
</script>
