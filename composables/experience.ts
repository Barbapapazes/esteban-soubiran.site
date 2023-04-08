export const useExperience = () => {
  return useAsyncData('content:experience', () => queryContent('/experience/').sort({ to: -1 }).find())
}
