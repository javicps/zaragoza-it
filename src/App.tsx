import React, { useEffect, useState } from 'react'
import Menu from './components/Menu'
import './App.scss'
import EventList from './components/EventList'
import { Route, Router, Routes } from 'react-router-dom'
import TechGroups from './components/TechGroups'
import Home from './components/Home'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/about" element={<TechGroups />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
