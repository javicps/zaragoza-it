const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3001 // Choose a backend port

app.use(cors()) // Allow requests from React frontend
app.use(express.json())
const fetch = globalThis.fetch
const ACCESS_TOKEN = process.env.MEETUP_ACCESS_TOKEN

const MEETUP_API_URL = 'https://api.meetup.com/gql'

const logError = (error, details = '') => {
  const logFile = path.join(__dirname, 'server-errors.log')
  const errorMessage = `[${new Date().toISOString()}] ERROR: ${error}\nDETAILS: ${details}\n`
  fs.appendFileSync(logFile, errorMessage, 'utf8')
  console.error(errorMessage)
}

app.post('/api/events', async (req, res, next) => {
  const { query, variables } = req.body
  /*const graphqlQuery = {
    query: `
        query ($urlname: String!) {
  groupByUrlname(urlname: $urlname) {
    upcomingEvents ( input: { first: 5 }) {
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

    `,
    variables: { urlname: 'devops-zaragoza' },
  }*/

  const graphqlQuery = {
    query, // ✅ Use the query received in the request
    variables, // ✅ Pass the variables received in the request
  }
  console.log(graphqlQuery)
  try {
    const response = await fetch(`${MEETUP_API_URL}`, {
      method: 'POST', // ✅ GraphQL requires POST
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    })

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`)
    }

    const events = await response.json()
    res.json(events)
  } catch (error) {
    logError(error.message)
    next(error)
    res.status(500).json({ s: error.message })
  }
})

app.listen(PORT, () => console.log(`Proxy server running on http://localhost:${PORT}`))
