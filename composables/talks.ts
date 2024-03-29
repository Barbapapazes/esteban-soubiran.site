export function useTalks() {
  return useAsyncData('content:talks', () => queryContent('/talks/').sort({ datePublished: -1 }).find())
}
