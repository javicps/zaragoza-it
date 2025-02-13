interface Event {
  readonly id: number
  readonly title: string
  readonly dateTime: string
  readonly venue: Venue
  readonly eventUrl: string
}

interface Venue {
  readonly name: string
  readonly address: string
}
