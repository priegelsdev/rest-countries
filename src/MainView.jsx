import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as farMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Country from './Country'

import data from './data.json'

export default function MainView(props) {
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
    />
  })

  return (
    <div className="main-container">
      <form className="search-bar">
        <FontAwesomeIcon className="search-icon"icon={farMagnifyingGlass}/>
        <input className="search-input" placeholder="Search for a country..."></input>
      </form>

      <select className="filter">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      {countryElements}
    </div>
  )
}