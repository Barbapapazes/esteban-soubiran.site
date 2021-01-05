<template>
  <div>
    <div class="h-screen p-20 flex flex-col justify-between">
      <header class="flex justify-between">
        <h1 class="text-3xl text-light-grey font-text">Estéban SOUBIRAN</h1>
        <img
          src="~/assets/logo/github-light.svg"
          alt="logo de GitHub"
          width="48"
          height="48"
        />
      </header>
      <section class="h-full flex flex-col justify-center">
        <div class="flex flex-row justify-between">
          <div>
            <h2 class="text-8xl text-white font-text">&#60; code &#62;</h2>
            <p class="text-light-grey text-3xl font-text">
              Ingénieur en sécurité informatique en pleine apprentissage
            </p>
            <p class="text-light-grey text-3xl mt-5 font-text">
              Développeur web dans son temps libre
            </p>
          </div>
          <div height="250" class="flex flex-col justify-center">
            <img
              src="~/assets/img/pp-esteban.webp"
              alt="photo de profil de Estéban"
              class="shadow-small rounded-full shadow-medium"
              width="250"
              height="250"
            />
          </div>
        </div>
        <div
          class="flex flex-row justify-between w-64 mt-10 p-3 shadow-inner-small rounded-5"
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
  </div>
</template>

<script>
export default {}
</script>
