export default async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content({ deep: true }).only(['path']).fetch()

  // Remove template file from the list
  const filteredFiles = files.filter((file) => file.path !== '/template')

  return filteredFiles.map((file) => (file.path === '/index' ? '/' : file.path))
}
