function formatSpanishDate(isoDate) {
  const date = new Date(isoDate) // Convert string to Date object
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export default formatSpanishDate
