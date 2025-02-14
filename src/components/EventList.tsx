import { gql, useQuery } from '@apollo/client'
import { groupNames } from '../assets/meetupGroupNames'

const GET_MEETUP_EVENTS = gql`
  query ($urlname: String!) {
    groupByUrlname(urlname: $urlname) {
      upcomingEvents(input: { first: 5 }) {
        count
        pageInfo {
          endCursor
        }
        edges {
          node {
            id
            title
            dateTime
            description
            eventUrl
            venue {
              name
              address
            }
          }
        }
      }
    }
  }
`

const EventList: React.FC = () => {
  const queries = groupNames.map((urlname) => useQuery(GET_MEETUP_EVENTS, { variables: { urlname } }))

  if (queries.some(({ loading }) => loading)) return <p>Cargando...</p>
  if (queries.some(({ error }) => error)) return <p>Error obtiendo datos</p>

  return (
    <div>
      {queries.map(({ data }, index) => (
        <div key={groupNames[index]} className="event-entry">
          <ul>
            {data.groupByUrlname?.upcomingEvents?.edges.map(({ node }: { node: Event }) => (
              <li key={node.id}>
                <p>
                  <a href={node.eventUrl} target="_blank">
                    {node.title}
                  </a>
                  {' => '}
                  <em>
                    {new Date(node.dateTime).toLocaleDateString('es-ES', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </em>
                </p>
                <p>
                  Lugar: {node.venue.name}, {node.venue.address}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default EventList
