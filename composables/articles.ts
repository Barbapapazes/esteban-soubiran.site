export function useArticles() {
  return useAsyncData('content:articles', () => queryContent('/articles/').sort({ datePublished: -1 }).find())
}
