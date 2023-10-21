export function useDate() {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  const ISODate = (date: Date) => {
    return date.toISOString()
  }

  return {
    ISODate,
    formatDate,
  }
}
