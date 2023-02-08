import {React, useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong as fasArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export default function CountryView(props) {
  const numPop = props.country.population
  const numFor = Intl.NumberFormat('en-us')
  const newFor = numFor.format(numPop)

  const currencies = props.country.currencies ? 
                      props.country.currencies.map(currency => currency.name) :
                      []
  const languages = props.country.languages ?
                    props.country.languages.map(language => language.name) :
                    []

  const borderCountries = props.borderCountryArray.length > 0 ? 
  
    props.borderCountryArray.map(border => (
      <button 
        key={crypto.randomUUID()} 
        onClick={() => props.onBorderClick(border)}
        id={!props.lightMode ? 'dark-el' : 'none'} 
        className="border-btn">{border.name}</button>)) :

      <p className="no-border">No border countries</p>

  return (
    <div className="country-view-container">
      <button className="back-btn" id={!props.lightMode ? 'dark-el' : 'none'} onClick={props.onBackClick}><FontAwesomeIcon className="back-btn-icon" icon={fasArrowLeftLong}/>Back</button>
      
      <div className="country-card-container">
        <img className="flag" src={props.country.flag} alt={`flag of ${props.country.name}`} />

        <div className="country-details-container">
          <h2 className="country-name">{props.country.name}</h2>

          <div className="ul-container">
            <ul className="country-info">
              <li className="country-region"><b>Native Name: </b>{props.country.nativeName}</li>
              <li className="country-population"><b>Population: </b>{newFor}</li>
              <li className="country-region"><b>Region: </b>{props.country.region}</li>
              <li className="country-region"><b>Sub Region: </b>{props.country.subregion}</li>
              <li className="country-capital"><b>Capital: </b>{props.country.capital}</li>
            </ul>

            <ul className="country-add-info">
              <li className="country-population"><b>Top Level Domain: </b>{props.country.topLevelDomain}</li>
              <li className="country-region"><b>Currencies: </b>{currencies.join(", ")}</li>
              <li className="country-capital"><b>Languages: </b>{languages.join(", ")}</li>
            </ul>
          </div>

          <div className="border-countries">
            <h3 className="border-title">Border Countries:</h3>
            <div className="border-btn-container">
              {borderCountries}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}