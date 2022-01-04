<template>
  <article class="pt-16 md:pt-36 grid gap-8 md:gap-16 px-4">
    <div class="w-full md:w-8/12 2xl:w-6/12 mx-auto grid gap-8">
      <Card no-animation>
        <CardImage :src="page.banner" />
      </Card>
      <div class="flex flex-col space-y-2">
        <Subtitle>{{ page.date }}</Subtitle>
        <AppTags :words="page.tags" />
      </div>
      <Title>{{ page.title }}</Title>
    </div>
    <nuxt-content
      :document="page"
      class="
        mx-auto
        prose
        lg:prose-lg
        xl:prose-xl
        prose-headings:text-white
        prose-a:text-light-grey
        hover:prose-a:text-gray-400
        prose-strong:text-white
        prose-strong:font-semibold
        prose-strong:tracking-normal
        text-white text-justify
        font-text
        tracking-tighter
      "
    />
  </article>
</template>

<script>
export default {
  transition: 'fade',
  // scrollToTop: true,
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
