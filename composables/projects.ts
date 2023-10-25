export function useProjects(max?: number) {
  const only: string[] = ['_path', 'title', 'cover', 'datePublished', 'description']

  if (max)
    return useAsyncData(`content:projects-${max}`, () => queryContent('/projets/').sort({ datePublished: -1 }).only(only).limit(max).find())

  return useAsyncData('content:projects', () => queryContent('/projets/').sort({ datePublished: -1 }).only(only).find())
}
