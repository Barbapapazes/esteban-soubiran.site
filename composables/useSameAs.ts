export function useSameAs(): ComputedRef<string[]> {
  const socials = usePortfolio().value.socials

  return computed(() => {
    return Object.values(socials).map(({ url }) => url)
  })
}
