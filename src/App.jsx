import React from 'react'
import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons'

import MainView from './MainView'

export default function App() {
  // state for light/dark mode
  const [lightMode, setLightMode] = useState(true)

  return (
    <div className="app-container">
      <header>
        <h3 className="header-title">Where in the world?</h3>

        {/* logic to display dark or light mode */}
        <div className="color-switch">
          <FontAwesomeIcon icon={lightMode ? farMoon : fasMoon} />
          <span>{lightMode ? 'Dark Mode' : 'Light Mode'}</span> 
        </div>    
      </header>

      <main>
        <MainView />
      </main>
      
    </div>
  )
}