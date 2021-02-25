<template>
  <article class="pt-16 pb-5 grid gap-5">
    <Card>
      <CardImage src="img/bnei.webp" />
    </Card>
    <div>
      <Subtitle>{{ page.date }}</Subtitle>
      <Subtitle>{{ page.tags }}</Subtitle>
    </div>
    <Title>{{ page.title }}</Title>
    <nuxt-content :document="page" class="prose font-text tracking-tighter" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch()

    return {
      page,
    }
  },
}
</script>
