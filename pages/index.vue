<template>
  <div class="grid gap-10">
    <TheHero />
    <Section>
      <Title id="projets" observe>mes projets</Title>
      <SectionGrid>
        <Card v-for="projet in projets" :key="projet.path" gap>
          <CardImage :src="projet.banner" :alt="projet.alt" />
          <CardTitle>{{ projet.title }}</CardTitle>
          <AppTags :words="projet.tags" />
          <CardSubtitle>{{ projet.date }}</CardSubtitle>
          <CardActions
            ><AppButton :to="projet.path">voir plus</AppButton></CardActions
          >
        </Card>
      </SectionGrid>
    </Section>
    <Section>
      <Title id="benevolat" observe>bénévolat</Title>
      <SectionGrid>
        <Card v-for="item in benevolat" :key="item.path" gap>
          <CardImage :src="item.banner" :alt="item.alt" />
          <CardTitle>{{ item.title }}</CardTitle>
          <AppTags :words="item.tags" />
          <CardSubtitle>{{ item.date }}</CardSubtitle>
          <CardActions
            ><AppButton :to="item.path">voir plus</AppButton></CardActions
          >
        </Card>
      </SectionGrid>
    </Section>
    <Section>
      <Title id="competences" observe>mes compétences</Title>
      <Card>
        <CardText>
          Il semble que cette section soit encore vide ! Un peu de patience !
          Acquisition des compétences en cours... ⏳
        </CardText>
      </Card>
    </Section>
    <Section>
      <Title id="etudes" observe>mes études</Title>
      <SectionGrid>
        <Card v-for="item in etudes" :key="item.path" gap>
          <CardImage :src="item.banner" :alt="item.alt" />
          <CardTitle>{{ item.title }}</CardTitle>
          <AppTags :words="item.tags" />
          <CardSubtitle>{{ item.date }}</CardSubtitle>
          <CardActions
            ><AppButton :to="item.path">voir plus</AppButton></CardActions
          >
        </Card>
      </SectionGrid>
    </Section>
    <Section>
      <Title id="a-propos" observe>à propos</Title>
      <Card>
        <CardText>
          Je suis Estéban, élève-ingénieur à l’INSA Centre Val de Loire dans la
          spécialité sécurité informatique.
        </CardText>
        <CardText class="mt-4">
          J’adore apprendre, découvrir, essayer, tester, tenter...! Et c’est
          durant la plus part de mon temps libre que je m’adosse à ces
          activités. <br />
          De la réalisation de sites web et de serveurs web au déploiement de
          ces derniers en passant par la création et le management de projets.
        </CardText>
        <CardText class="mt-4">
          Ce qui me motive c’est de réussir à mener des projets mais c’est aussi
          de me sortir de ma zone de confort en me confrontant à des situations
          inconnues.
        </CardText>
        <CardText class="mt-4">
          Le reste de mon temps libre, je le passe dans des associations
          étudiantes et des engagements bénévoles. De la petite association
          développement durable de l’école à l’association nationale de
          représentation des élèves-ingénieurs, c’est dans l’ensemble du paysage
          étudiant que je m’investis. <br />
          C’est ainsi que je suis devenu trésorier du BNEI, le Bureau National
          des Elèves Ingénieurs, élu au conseil des études de l’INSA Centre Val
          de Loire ou encore président de Gree’NSA, l’association verte de mon
          école.
        </CardText>
        <CardText class="mt-3">
          Retrouver
          <a
            href="/esteban-soubiran-2020.pdf"
            target="_blank"
            class="hover:underline font-bold"
            >mon CV (2020-05)</a
          >
          pour en savoir d'avantage !
        </CardText>
      </Card>
    </Section>
    <Section>
      <Title id="contact" observe>me contacter</Title>
      <Social
        :links="links"
        :size="40"
        class="grid grid-cols-3 gap-16 max-w-sm mx-auto"
      />
      <TheContactForm class="max-w-sm mx-auto" />
    </Section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const types = ['projets', 'benevolat', 'etudes', 'pro']
    const data = {}
    for (const type of types) {
      data[type] = await $content(type)
        .only(['title', 'date', 'tags', 'banner', 'path', 'alt'])
        .sortBy('order', 'desc')
        .fetch()
    }
    return data
  },
  data() {
    return {
      sections: [],
      links: [
        {
          href: 'https://facebook.com/esteban.soubiran',
          src: require('@/assets/logo/facebook.svg'),
          alt: 'logo de facebook',
        },
        {
          href: 'https://linkedin.com/in/esteban25',
          src: require('@/assets/logo/linkedin.svg'),
          alt: 'logo de facebook',
        },
        {
          href: 'https://github.com/barbapapazes',
          src: require('@/assets/logo/github-dark.svg'),
          alt: 'logo de facebook',
        },
      ],
    }
  },
}
</script>
