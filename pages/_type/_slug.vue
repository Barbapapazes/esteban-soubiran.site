<template>
  <article class="pt-16 md:pt-36 pb-5 grid gap-5 md:gap-8">
    <div class="w-full md:w-8/12 2xl:w-6/12 mx-auto grid gap-5 md:gap-8">
      <Card>
        <CardImage src="img/bnei.webp" />
      </Card>
      <div>
        <Subtitle>{{ page.date }}</Subtitle>
        <Subtitle>{{ page.tags }}</Subtitle>
      </div>
      <Title>{{ page.title }}</Title>
    </div>
    <nuxt-content
      :document="page"
      class="prose prose-sm md:prose lg:prose-lg xl:prose-xl font-text tracking-tighter mx-auto"
    />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.type, params.slug).fetch()

    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.title.toUpperCase() ?? 'chargement...'.toUpperCase(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description ?? "L'un des articles du portfolio !",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.page.title.toUpperCase()} - Estéban SOUBIRAN`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description ?? "L'un des articles du portfolio !",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.page.title.toUpperCase()} - Estéban SOUBIRAN`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.description ?? "L'un des articles du portfolio !",
        },
      ],
    }
  },
}
</script>
