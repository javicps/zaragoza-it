import DateMarker from './DateMarker'
import LocationMarker from './LocationMarker'

const EventItem: React.FC = ({ event }: { event: Event }) => {
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
        <em>
          {new Date(event.dateTime).toLocaleDateString('es-ES', {
            weekday: 'short',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </em>
      </p>

      <p>
        <LocationMarker /> {event.venue.name}, {event.venue.address}
      </p>
    </li>
  )
}

export default EventItem
