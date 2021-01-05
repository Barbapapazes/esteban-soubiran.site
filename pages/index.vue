<template>
  <div>
    <div
      class="h-screen flex flex-col justify-between p-6 md:p-10 xl:p-0 xl:py-20"
    >
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
            <h2 class="text-5xl md:text-8xl text-white">&#60; code &#62;</h2>
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
            class="shadow-small rounded-full shadow-medium w-1/4 mt-6 lg:mt-0"
            width="250"
            height="250"
          />
        </div>
        <div
          class="flex flex-row justify-between w-64 mt-6 lg:mt-10 p-3 shadow-inner-small rounded-5"
        >
          <img
            src="~/assets/logo/facebook.svg"
            alt="logo de Facebook"
            width="48"
            height="48"
          />
          <img
            src="~/assets/logo/linkedin.svg"
            alt="logo de Linkedin"
            width="48"
            height="48"
          />
          <img
            src="~/assets/logo/github-dark.svg"
            alt="logo de Github"
            width="48"
            height="48"
          />
        </div>
      </section>
      <hr class="bg-white h-1 rounded-full" />
    </div>
    <div class="h-screen">Hello</div>
  </div>
</template>

<script>
export default {}
</script>
