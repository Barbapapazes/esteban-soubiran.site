<template>
  <div class="grid gap-10">
    <TheHero />
    <Section>
      <Title observe>mes projets</Title>
      <SectionGrid>
        <Card v-for="projet in projets" :key="projet.path" gap>
          <CardImage :src="projet.banner" :alt="projet.alt" />
          <CardTitle>{{ projet.title }}</CardTitle>
          <CardSubtitle>{{ projet.tags }}</CardSubtitle>
          <CardSubtitle>{{ projet.date }}</CardSubtitle>
          <CardActions
            ><AppButton :to="projet.path">voir plus</AppButton></CardActions
          >
        </Card>
      </SectionGrid>
    </Section>
    <Section>
      <Title observe>bénévolat</Title>
      <SectionGrid>
        <Card v-for="item in benevolat" :key="item.path" gap>
          <CardImage :src="item.banner" :alt="item.alt" />
          <CardTitle>{{ item.title }}</CardTitle>
          <CardSubtitle>{{ item.tags }}</CardSubtitle>
          <CardSubtitle>{{ item.date }}</CardSubtitle>
          <CardActions
            ><AppButton :to="item.path">voir plus</AppButton></CardActions
          >
        </Card>
      </SectionGrid>
    </Section>
    <Section>
      <Title observe>mes compétences</Title>
      <Card>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum leo sit amet metus lobortis mollis. Sed cursus pulvinar
          est. Praesent sit amet justo ac libero volutpat viverra id sit amet
          nunc. Nulla ipsum lorem, fringilla eget metus et, pulvinar mattis
          nunc. Mauris mattis egestas volutpat. Praesent tortor sem, feugiat nec
          interdum ut, semper a purus. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Curabitur venenatis sem
          et metus auctor, ac mollis dui placerat. Curabitur facilisis
          ullamcorper erat ac tristique.
        </CardText>
      </Card>
    </Section>
    <Section>
      <Title observe>mes études</Title>
      <SectionGrid>
        <Card v-for="item in etudes" :key="item.path" gap>
          <CardImage :src="item.banner" :alt="item.alt" />
          <CardTitle>{{ item.title }}</CardTitle>
          <CardSubtitle>{{ item.tags }}</CardSubtitle>
          <CardSubtitle>{{ item.date }}</CardSubtitle>
          <CardActions
            ><AppButton :to="item.path">voir plus</AppButton></CardActions
          >
        </Card>
      </SectionGrid>
    </Section>
    <Section>
      <Title observe>à propos</Title>
      <Card>
        <CardText>
          Je suis Estéban, élève-ingénieur à l’INSA Centre Val de Loire dans la
          spécialité sécurité informatique.
        </CardText>
        <CardText class="mt-3">
          J’adore apprendre, découvrir, essayer, tester, tenter...! Et c’est
          durant la plus part de mon temps libre que je m’adosse le plus à ces
          activités. <br />
          De la réalisation de sites web et de serveurs web au dépoyment de ces
          derniers en passant par la création et le management de projets.
        </CardText>
        <CardText class="mt-3">
          Ce qui me motive c’est de réussir à mener des projets mais c’est aussi
          de me sortir de ma zone de confort en me confrontant à des situations
          inconnues.
        </CardText>
        <CardText class="mt-3">
          Le reste de mon temps libre, je le passe dans des associations
          étudiants et des engagements bénévoles. De la petite association
          développement durable de l’école à l’association nationale de
          représentation des élèves-ingénieurs, c’est dans l’ensemble du paysage
          étudiant que je m’investis. <br />
          C’est ainsi que je suis devenu trésorier du BNEI, le Bureau National
          des Elèves Ingénieurs, élu au conseil des études de l’INSA Centre Val
          de Loire ou encore président de Gree’NSA, l’association verte de mon
          école.
        </CardText>
      </Card>
    </Section>
    <Section>
      <Title observe>me contacter</Title>
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
    const types = ['projets', 'benevolat', 'etudes']
    const data = {}
    for (const type of types) {
      data[type] = await $content(type)
        .only(['title', 'date', 'tags', 'banner', 'path', 'alt'])
        .sortBy('date')
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
