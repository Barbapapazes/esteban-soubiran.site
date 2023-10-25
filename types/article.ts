import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ParsedArticle extends ParsedContent {
  datePublished?: string
  dateModified?: string
}
