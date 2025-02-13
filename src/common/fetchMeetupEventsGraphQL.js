import { gql, useQuery } from '@apollo/client'

const GET_MEETUP_EVENTS = gql`
  query {
    groupByUrlname(urlname: "devops-zaragoza") {
      events(input: { first: 5 }) {
        edges {
          node {
            title
            dateTime
          }
        }
      }
    }
  }
`

function MeetupEvents() {
  const { loading, error, data } = useQuery(GET_MEETUP_EVENTS) // ✅ Must be inside ApolloProvider

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <ul>
      {data.groupByUrlname.events.edges.map(({ node }) => (
        <li key={node.title}>
          {node.title} - {new Date(node.dateTime).toLocaleDateString('es-ES')}
        </li>
      ))}
    </ul>
  )
}

export default MeetupEvents
