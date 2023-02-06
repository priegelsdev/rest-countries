import React from 'react'
import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons'

import MainView from './MainView'
import CountryView from './CountryView'

import data from './data.json'

console.log(data[0])

export default function App() {
  // state for light/dark mode
  const [lightMode, setLightMode] = useState(true)
  // state for country/countries
  const [country, setCountry] = useState(data)

  // function to set state to specific country
  function chooseCountry(key) {
    setCountry(data.filter(country => country.numericCode == key))
  }

  // function to set state to all data again to show main page
  function handleBackClick() {
    setCountry(data)
  }

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
        {country.length > 1 && <MainView 
          country={country}
          onClick={chooseCountry}
        />}
{/*         {typeof country === 'object' && <CountryView 
          country={country}
        />} */}
        {country.length < 2 && <CountryView 
          country={country[0]}
          onBackClick={handleBackClick}
        />}
      </main>

    </div>
  )
}