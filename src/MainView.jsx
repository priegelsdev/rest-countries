import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as farMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Country from './Country'

export default function MainView(props) {

  // countryElements displayed based on search value term; if search value undefined, display all; if value, 
  // display only matching

  const countryElements = props.country.map(country => {
    return <Country 
      key={country.numericCode}
      numericCode={country.numericCode}
      flag={country.flag}
      name={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital}
      onClick={props.onClick}
      lightMode={props.lightMode}
    />
  })

  return (
    <div className="main-container">
      <form className="search-bar" onChange={props.onChange}>
        <FontAwesomeIcon className="search-icon" icon={farMagnifyingGlass}/>
        <input 
          className="search-input" 
          placeholder="Search for a country..."
          id={!props.lightMode ? 'dark-el' : 'none'}></input>
      </form>

      <select 
        className="filter" 
        id={!props.lightMode ? 'dark-el' : 'none'}
        value={props.region} 
        onChange={props.onRegionChange}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
      </select>

      {countryElements}
    </div>
  )
}