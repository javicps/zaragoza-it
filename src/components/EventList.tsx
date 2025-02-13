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
          }
        }
      }
    }
  }
`

function EventList() {
  const queries = groupNames.map((urlname) => useQuery(GET_MEETUP_EVENTS, { variables: { urlname } }))

  if (queries.some(({ loading }) => loading)) return <p>Loading...</p>
  if (queries.some(({ error }) => error)) return <p>Error fetching data</p>

  return (
    <div>
      {queries.map(({ data }, index) => (
        <div key={groupNames[index]}>
          <h2>Events for {groupNames[index]}</h2>
          <ul>
            {data.groupByUrlname?.upcomingEvents?.edges.map(({ node }) => (
              <li key={node.id}>
                {node.title} - {new Date(node.dateTime).toLocaleDateString('es-ES')}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default EventList
