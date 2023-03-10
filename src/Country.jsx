export default function Country(props) {
  const numPop = props.population
  const numFor = Intl.NumberFormat('en-us')
  const newFor = numFor.format(numPop)

  return (
    <div className="country-container" id={!props.lightMode ? 'dark-el' : 'none'}>
      <img className="flag flag-clickable" src={props.flag} onClick={() => props.onClick(props.numericCode)}></img>
      <div className="country-details">
        <h2 className="country-name flag-clickable" onClick={() => props.onClick(props.numericCode)}>{props.name}</h2>
        <p className="country-population"><b>Population: </b>{newFor}</p>
        <p className="country-region"><b>Region: </b>{props.region}</p>
        <p className="country-capital"><b>Capital: </b>{props.capital}</p>
      </div>
    </div>
  )
}