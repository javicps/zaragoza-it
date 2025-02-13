import React, { useEffect, useState } from 'react'
import Menu from './components/Menu'
import './App.scss'
import EventList from './components/EventList'

const App: React.FC = () => {
  const [events, setEvents] = useState<JSON[]>([])
  /*useEffect(() => {
    try {
      fetchMeetupEvents().then((retrievedEvents) => {
        console.log(retrievedEvents)
        setEvents(retrievedEvents)
      })
    } catch (error) {}
  }, [])*/

  return (
    <div>
      <Menu />
      <h1>Zaragoza IT events</h1>
      {<EventList />}
    </div>
  )
}

export default App
