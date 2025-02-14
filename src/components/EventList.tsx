import { gql, useQuery } from '@apollo/client'
import { groupNames } from '../assets/meetupGroupNames'
import EventItem from './EventItem'

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
            group {
              name
            }
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
    <div className="event-list">
      {queries.map(
        ({ data }, index) =>
          data.groupByUrlname?.upcomingEvents?.edges.length > 0 && (
            <div key={groupNames[index]} className="event-entry">
              <ul>
                {data.groupByUrlname?.upcomingEvents?.edges.map(({ node }: { node: Event }) => (
                  <EventItem event={node} />
                ))}
              </ul>
            </div>
          )
      )}
    </div>
  )
}

export default EventList
