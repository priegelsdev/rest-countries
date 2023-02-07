import React from 'react'
import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons'

import MainView from './MainView'
import CountryView from './CountryView'

import data from './data.json'

console.log(data)

export default function App() {
  // state for light/dark mode
  const [lightMode, setLightMode] = useState(true)
  // state for country/countries
  const [country, setCountry] = useState(data)
  // state for search value; initially empty and thus displaying all data
  const [search, setSearch] = useState()
  // state for region 
  const [region, setRegion] = useState()

  // function to set state to specific country
  function chooseCountry(key) {
    setCountry(prevState => prevState.filter(country => country.numericCode == key))
  }

  // function to set state to all data again to show main page
  function handleBackClick() {
    setCountry(data)
    setSearch()
    setRegion()
  }

  function handleRegionChange(e) {
    setCountry(data)
    setRegion(e.target.value)
  }

  // function to handle input change 
  function handleChange() {
    const searchInput = document.querySelector('.search-input')
    const searchInputLower = searchInput.value.toLowerCase()
    const searchInputCapitalized = searchInputLower.charAt(0).toUpperCase() + searchInputLower.slice(1)

    setSearch(searchInputCapitalized)
  }

  // effect to handle search input change and filter countries based on the input

  useEffect(() => {
    const regionArray = country.filter(country => country.region === region)

    if (region) {
      setCountry(regionArray)
    }
  }, [region])

  useEffect(() => {
    const filteredArray = country.filter(country => country.name.includes(search))

    if (search && filteredArray.length > 0) {
      setCountry(filteredArray)
    } else if (filteredArray.length === 0) {
      // implement: DISPLAY TOOLTIP SHOWING ERROR MESSAGE
    }
  }, [search])

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
          onChange={handleChange}
          region={region}
          onRegionChange={handleRegionChange}
          searchValue={search}
        />}
{/*         {typeof country === 'object' && <CountryView 
          country={country}
        />} */}
        {country.length === 1 && <CountryView 
          country={country[0]}
          onBackClick={handleBackClick}
        />}
      </main>

    </div>
  )
}