import formatSpanishDate from '../common/dates'
import DateMarker from './DateMarker'
import LocationMarker from './LocationMarker'

interface EventItemProps {
  event: Event
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
  return (
    <li key={event.id}>
      <h2>
        <strong>{event.group.name}</strong>
      </h2>
      <a href={event.eventUrl} target="_blank">
        {event.title}
      </a>
      <p>
        <DateMarker />
        <em> {formatSpanishDate(event.dateTime)}</em>
      </p>

      <p>
        <LocationMarker />
        {event.venue.name}, {event.venue.address}
      </p>
    </li>
  )
}

export default EventItem
