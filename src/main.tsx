import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Route } from 'react-router-dom'
import TechGroups from './components/TechGroups'
const ACCESS_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJzdWIiOiIxODU5MDMzNDkiLCJuYmYiOjE3MzkxMTMzMjksInJvbGUiOiJmaXJzdF9wYXJ0eSIsImlzcyI6Ii5tZWV0dXAuY29tIiwicXVhbnR1bV9sZWFwZWQiOmZhbHNlLCJyZWZyZXNoX3Rva2Vuc19jaGFpbl9pZCI6Ijk2OGQ5OGQyLTZmYWEtNDk0YS1hNDgxLWY1NDdiZjExMzU0OCIsImV4cCI6MTczOTExNjkyOSwiaWF0IjoxNzM5MTEzMzI5LCJqdGkiOiIzOTRlMjlhYy1jMTFiLTRiMTItYWMxNi05ODJhMjc0NWU3ODYiLCJvYXV0aF9jbGllbnRfaWQiOiI4NnQzbnNtcWgzNGw5ZGw3MmFjMWt0dXVwaCJ9.GQXvnUepYkDB8aKhkzBNd0EuXcGwYyhSGP1-o2gUYZ5HeALSBYa9Lwdl1zFZ6wU5XMvgyNVGyv-Ydxg8MTw0hA'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://tokenservice-y8he.onrender.com/proxy/gql',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  }),
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter basename="/zaragoza-it">
      <App />
    </BrowserRouter>
  </ApolloProvider>
)
