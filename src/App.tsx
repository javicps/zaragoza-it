import React, { useEffect, useState } from 'react'
import Menu from './components/Menu'
import './App.scss'
import EventList from './components/EventList'

const App: React.FC = () => {
  const [events, setEvents] = useState<JSON[]>([])

  return (
    <div>
      <Menu />
      <h1>Zaragoza IT events</h1>
      {<EventList />}
    </div>
  )
}

export default App
