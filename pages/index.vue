<template>
  <div>
    <div class="h-screen flex flex-col justify-between p-5">
      <header class="flex justify-between items-center">
        <h1 class="tracking-tight text-light-grey font-text">
          Estéban SOUBIRAN
        </h1>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="cursor-pointer"
        >
          <path
            d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2 9.75C2 9.33579 2.33579 9 2.75 9H17.25C17.6642 9 18 9.33579 18 9.75C18 10.1642 17.6642 10.5 17.25 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75ZM2.75 14C2.33579 14 2 14.3358 2 14.75C2 15.1642 2.33579 15.5 2.75 15.5H17.25C17.6642 15.5 18 15.1642 18 14.75C18 14.3358 17.6642 14 17.25 14H2.75Z"
            fill="white"
          />
        </svg>
      </header>
      <section class="h-full flex flex-col justify-center items-center">
        <div class="grid gap-8 font-text text-center justify-items-center">
          <Title>code</Title>
          <div>
            <Subtitle class="mb-3"
              >Élève-ingénieur en sécurité informatique</Subtitle
            >
            <Subtitle class="mb-3">
              Développeur web dans son temps libre</Subtitle
            >
            <Subtitle> Passionné par le monde associatif</Subtitle>
          </div>
          <img
            src="~/assets/img/pp-esteban.webp"
            alt="photo de profil de Estéban"
            class="shadow-small rounded-full shadow-medium w-2/4"
            width="250"
            height="250"
          />
        </div>
      </section>
      <hr class="bg-white h-small rounded-full" />
    </div>
    <SectionCards>
      <Title>mes projets</Title>
      <Card :src="require('@/assets/img/bnei.webp')" alt="logo du bnei">
        <template v-slot:title>Mon engagement au BNEI</template>
        <template v-slot:tag>#association #bnei</template>
        <template v-slot:date>25-11-2020</template>
        <template v-slot:btn>voir plus</template>
      </Card>
      <Card :src="require('@/assets/img/bnei.webp')" alt="logo du bnei">
        <template v-slot:title>Mon engagement au BNEI</template>
        <template v-slot:tag>#association #bnei</template>
        <template v-slot:date>25-11-2020</template>
        <template v-slot:btn>voir plus</template>
      </Card>
      <Card :src="require('@/assets/img/bnei.webp')" alt="logo du bnei">
        <template v-slot:title>Mon engagement au BNEI</template>
        <template v-slot:tag>#association #bnei</template>
        <template v-slot:date>25-11-2020</template>
        <template v-slot:btn>voir plus</template>
      </Card>
    </SectionCards>
    <SectionCards>
      <Title>bénévolat</Title>
      <Card :src="require('@/assets/img/bnei.webp')" alt="logo du bnei">
        <template v-slot:title>Mon engagement au BNEI</template>
        <template v-slot:tag>#association #bnei</template>
        <template v-slot:date>25-11-2020</template>
        <template v-slot:btn>voir plus</template>
      </Card>
      <Card :src="require('@/assets/img/bnei.webp')" alt="logo du bnei">
        <template v-slot:title>Mon engagement au BNEI</template>
        <template v-slot:tag>#association #bnei</template>
        <template v-slot:date>25-11-2020</template>
        <template v-slot:btn>voir plus</template>
      </Card>
      <Card :src="require('@/assets/img/bnei.webp')" alt="logo du bnei">
        <template v-slot:title>Mon engagement au BNEI</template>
        <template v-slot:tag>#association #bnei</template>
        <template v-slot:date>25-11-2020</template>
        <template v-slot:btn>voir plus</template>
      </Card>
    </SectionCards>
    <SectionCards>
      <Title>mes compétences</Title>
      <Panel>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum leo sit amet metus lobortis mollis. Sed cursus pulvinar
          est. Praesent sit amet justo ac libero volutpat viverra id sit amet
          nunc. Nulla ipsum lorem, fringilla eget metus et, pulvinar mattis
          nunc. Mauris mattis egestas volutpat. Praesent tortor sem, feugiat nec
          interdum ut, semper a purus. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Curabitur venenatis sem
          et metus auctor, ac mollis dui placerat. Curabitur facilisis
          ullamcorper erat ac tristique.
        </p>
      </Panel>
    </SectionCards>
    <SectionCards>
      <Title>mes études</Title>
      <Card :src="require('@/assets/img/bnei.webp')" alt="logo du bnei">
        <template v-slot:title>Mon engagement au BNEI</template>
        <template v-slot:tag>#association #bnei</template>
        <template v-slot:date>25-11-2020</template>
        <template v-slot:btn>voir plus</template>
      </Card>
    </SectionCards>
    <SectionCards>
      <Title>à propos</Title>
      <Panel>
        <p>
          Je suis Estéban, élève-ingénieur à l’INSA Centre Val de Loire dans la
          spécialité sécurité informatique.
        </p>
        <p class="mt-3">
          J’adore apprendre, découvrir, essayer, tester, tenter...! Et c’est
          durant la plus part de mon temps libre que je m’adosse le plus à ces
          activités. <br />
          De la réalisation de sites web et de serveurs web au dépoyment de ces
          derniers en passant par la création et le management de projets.
        </p>
        <p class="mt-3">
          Ce qui me motive c’est de réussir à mener des projets mais c’est aussi
          de me sortir de ma zone de confort en me confrontant à des situations
          inconnues.
        </p>
        <p class="mt-3">
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
      </Panel>
    </SectionCards>
    <SectionCards>
      <Title>me contacter</Title>
      <form action="#" class="flex font-text">
        <div
          class="flex items-center h-8 bg-deep-blue text-white rounded-5 shadow-inner-small flex-grow p-1"
        >
          <label for="email">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1"
            >
              <path
                d="M22 8.608V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V8.608L11.652 13.6644C11.87 13.7785 12.13 13.7785 12.348 13.6644L22 8.608ZM5.25 4H18.75C20.4347 4 21.8201 5.28191 21.9838 6.92355L12 12.1533L2.01619 6.92355C2.17386 5.34271 3.46432 4.09545 5.06409 4.00523L5.25 4H18.75H5.25Z"
                fill="white"
              />
            </svg>
          </label>
          <input
            id="email"
            type="text"
            name="email"
            class="flex-1 placeholder-light-grey bg-transparent focus:ring-white focus:ring-2 focus:outline-none rounded-none rounded-r-5 p-1 -mr-1"
            placeholder="courriel"
          />
        </div>
      </form>
    </SectionCards>
    <footer
      class="h-16 bg-light-grey font-text text-sm text-deep-blue flex justify-center items-center"
    >
      2021 - Par Estéban Soubiran -&nbsp;
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.38843 1.28963C5.69278 -0.423073 2.94954 -0.431397 1.26122 1.2739C-0.427101 2.9792 -0.418861 5.75004 1.27679 7.46275L7.55368 13.8028C7.81404 14.0657 8.23617 14.0657 8.49652 13.8028L14.7408 7.49941C16.4252 5.78856 16.4199 3.02549 14.7239 1.31249C13.0252 -0.403291 10.2807 -0.411615 8.58936 1.29673L7.99299 1.90026L7.38843 1.28963Z"
          fill="#344163"
        />
      </svg>
    </footer>
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
