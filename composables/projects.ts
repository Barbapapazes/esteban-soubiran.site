export const useProjects = (max?: number) => {
  if (max) {
    return useAsyncData(`content:projects-${max}`, () => queryContent('/projets/').sort({ datePublished: -1 }).limit(max).find())
  }

  return useAsyncData('content:projects', () => queryContent('/projets/').sort({ datePublished: -1 }).find())
}
