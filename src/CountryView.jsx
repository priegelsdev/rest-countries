import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong as fasArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export default function CountryView(props) {
  const numPop = props.country.population
  const numFor = Intl.NumberFormat('en-us')
  const newFor = numFor.format(numPop)

  const currencies = props.country.currencies.map(currency => currency.name)
  const languages = props.country.languages.map(language => language.name)

  /* these should be spelled out */

  const borderCountries = props.country.borders.map(border => (
    <button key={crypto.randomUUID()} className="border-btn">{border}</button>
  ))

  return (
    <div className="country-view-container">
      <button className="back-btn"><FontAwesomeIcon className="back-btn-icon" icon={fasArrowLeftLong}/>Back</button>
      <img className="flag" src={props.country.flag} alt={`flag of ${props.country.name}`} />

      <div className="country-info">
        <h2 className="country-name">{props.country.name}</h2>
        <p className="country-region"><b>Native Name: </b>{props.country.nativeName}</p>
        <p className="country-population"><b>Population: </b>{newFor}</p>
        <p className="country-region"><b>Region: </b>{props.country.region}</p>
        <p className="country-region"><b>Sub Region: </b>{props.country.subregion}</p>
        <p className="country-capital"><b>Capital: </b>{props.country.capital}</p>
      </div>

      <div className="country-add-info">
        <p className="country-population"><b>Top Level Domain: </b>{props.country.topLevelDomain}</p>
        <p className="country-region"><b>Currencies: </b>{currencies.join(", ")}</p>
        <p className="country-capital"><b>Languages: </b>{languages.join(", ")}</p>
      </div>

      <div className="border-countries">
        <h3 className="border-title">Border Countries</h3>
        <div className="border-btn-container">
          {borderCountries}
        </div>
      </div>
    </div>
  )
}