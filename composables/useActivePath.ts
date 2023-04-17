export const useActivePath = () => {
  const route = useRoute()

  const isHome = computed(() => route.path === '/')

  const isActive = (path: string) => {
    return route.fullPath.startsWith(path)
  }

  return {
    isHome,
    isActive
  }
}
