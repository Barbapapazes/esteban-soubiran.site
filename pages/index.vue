<template>
  <div>
    <div class="h-screen flex flex-col justify-between p-4 md:p-10 xl:p-20">
      <header class="flex justify-between">
        <h1 class="text-xl md:text-3xl text-light-grey font-text">
          Estéban SOUBIRAN
        </h1>
        <img
          src="~/assets/logo/github-light.svg"
          alt="logo de GitHub"
          width="48"
          height="48"
          class="w-8 md:w-12"
        />
      </header>
      <section
        class="h-full flex flex-col justify-center items-center lg:items-start"
      >
        <div class="flex flex-col lg:flex-row justify-between items-center">
          <div class="font-text text-center lg:text-left md:w-3/4">
            <Title>&#60; code &#62;</Title>
            <p class="text-light-grey text-xl md:text-3xl">
              Ingénieur en sécurité informatique en pleine apprentissage
            </p>
            <p class="text-light-grey text-xl md:text-3xl mt-5">
              Développeur web dans son temps libre
            </p>
          </div>
          <img
            src="~/assets/img/pp-esteban.webp"
            alt="photo de profil de Estéban"
            class="shadow-small rounded-full shadow-medium w-2/4 sm:w-2/5 md:w-1/4 mt-6 lg:mt-0"
            width="250"
            height="250"
          />
        </div>
        <div
          class="flex flex-row justify-between w-64 mt-6 lg:mt-10 p-3 shadow-inner-small rounded-5"
        >
          <ImageLink
            v-for="link in heroSocial"
            :key="link.href"
            :href="link.href"
            :src="link.src"
            alt="logo de Facebook"
            width="48"
            height="48"
          />
        </div>
      </section>
      <hr class="bg-white h-1 rounded-full" />
    </div>
    <section class="px-4 pb-4 md:pb-10 md:px-10 xl:p-0 xl:pb-20 xl:px-20">
      <Title>&#60; à propos &#62;</Title>
      <div
        class="m-auto shadow-medium rounded-2xl text-justify text-light-grey p-4 md:p-8 font-text text-lg md:text-2xl mt-4 md:mt-10"
      >
        <p>
          Je suis Estéban, élève-ingénieur à l’INSA Centre Val de Loire dans la
          spécialité sécurité informatique.
        </p>
        <p class="mt-8">
          J’adore apprendre, découvrir, essayer, tester, tenter...! Et c’est
          durant la plus part de mon temps libre que je m’adosse le plus à ces
          activités. <br />
          De la réalisation de sites web et de serveurs web au dépoyment de ces
          derniers en passant par la création et le management de projets.
        </p>
        <p class="mt-8">
          Ce qui me motive c’est de réussir à mener des projets mais c’est aussi
          de me sortir de ma zone de confort en me confrontant à des situations
          inconnues.
        </p>
        <p class="mt-8">
          Le reste de mon temps libre, je le passe dans des associations
          étudiants et des engagements bénévoles. De la petite association
          développement durable de l’école à l’association nationale de
          représentation des élèves-ingénieurs, c’est dans l’ensemble du paysage
          étudiant que je m’investis. <br />
          C’est ainsi que je suis devenu trésorier du BNEI, le Bureau National
          des Elèves Ingénieurs, élu au conseil des études de l’INSA Centre Val
          de Loire ou encore président de Gree’NSA, l’association verte de mon
          école.
        </p>
      </div>
    </section>
    <section class="px-4 pb-4 md:pb-10 md:px-10 xl:p-0 xl:pb-20 xl:px-20">
      <Title>&#60; me contacter &#62;</Title>
      <div
        class="m-auto shadow-medium rounded-2xl text-justify text-light-grey p-4 md:p-8 font-text text-lg md:text-2xl mt-4 md:mt-10"
      >
        <p>
          Pour faire cela, rien de plus simple, il suffit de cliquer sur le
          bouton ci-dessous. Cela va permettre de m’envoyer un mail afin que
          l’on puisse d’avantage échanger.
        </p>
      </div>
      <div class="flex justify-center mt-6 md:mt-12">
        <a
          href="mailto:pro.soubiran@gmail.com"
          class="mx-auto font-text hover:shadow-medium transition-shadow duration-300 text-lg md:text-2xl rounded-5 text-white p-4 uppercase"
          >&#60; contact &#62;</a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroSocial: [
        {
          href: 'www.facebook.com',
          src: require('@/assets/logo/facebook.svg'),
          alt: 'logo de facebook',
          width: 48,
          height: 48,
        },
        {
          href: 'www.facebook.com',
          src: require('@/assets/logo/linkedin.svg'),
          alt: 'logo de facebook',
          width: 48,
          height: 48,
        },
        {
          href: 'www.facebook.com',
          src: require('@/assets/logo/github-dark.svg'),
          alt: 'logo de facebook',
          width: 48,
          height: 48,
        },
      ],
    }
  },
}
</script>
