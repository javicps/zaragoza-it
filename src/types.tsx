interface Event {
  readonly id: number
  readonly title: string
  readonly dateTime: string
  readonly venue: Venue
  readonly eventUrl: string
  readonly group: Group
}

interface Venue {
  readonly name: string
  readonly address: string
}

interface Group {
  readonly name: string
}
