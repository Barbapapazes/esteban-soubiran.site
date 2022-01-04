<script>
import { ref } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default {
  name: 'TheHero',
  setup() {
    const title = ref()
    const subtitle = ref()
    const image = ref()
    const hr = ref()

    useMotion(title, {
      initial: {
        opacity: 0,
        y: 25,
      },
      enter: {
        opacity: 1,
        y: 0,
      },
    })

    useMotion(subtitle, {
      initial: {
        opacity: 0,
        y: 25,
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 100,
        },
      },
    })

    useMotion(image, {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
        transition: {
          duration: 1200,
          delay: 600,
        },
      },
    })

    useMotion(hr, {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
        transition: {
          duration: 1200,
          delay: 1200,
        },
      },
    })

    return {
      title,
      subtitle,
      image,
      hr,
    }
  },
}
</script>

<template>
  <section class="h-screen flex flex-col justify-between p-6 md:p-12 lg:p-16">
    <div class="h-full flex flex-col md:flex-row justify-center items-center">
      <div
        class="
          z-0
          md:gap-16
          grid
          md:grid-flow-col
          gap-8
          md:auto-cols-max
          font-text
          text-center
          md:text-left
          justify-items-center
        "
      >
        <div class="grid gap-8">
          <Title ref="title" class="opacity-0">code</Title>
          <div ref="subtitle" class="opacity-0 grid gap-2 md:gap-1">
            <Subtitle>Élève-ingénieur en sécurité informatique</Subtitle>
            <Subtitle> Développeur web dans son temps libre</Subtitle>
            <Subtitle> Passionné par le monde associatif</Subtitle>
          </div>
        </div>
        <NuxtImg
          ref="image"
          src="img/pp-esteban.webp"
          alt="photo de profil de Estéban"
          class="shadow-small rounded-full shadow-medium opacity-0"
          width="250"
          height="250"
        />
      </div>
    </div>
    <hr ref="hr" class="bg-white h-small md:h-medium rounded-full opacity-0" />
  </section>
</template>
