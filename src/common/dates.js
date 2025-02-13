function formatSpanishDate(isoDate) {
  const date = new Date(isoDate) // Convert string to Date object
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export default formatSpanishDate
