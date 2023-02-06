export default function Country(props) {
  const numPop = props.population
  const numFor = Intl.NumberFormat('en-us')
  const newFor = numFor.format(numPop)

  return (
    <div className="country-container">
      <img className="flag" src={props.flag}></img>
      <div className="country-details">
        <h2 className="country-name">{props.name}</h2>
        <p className="country-population"><b>Population: </b>{newFor}</p>
        <p className="country-region"><b>Region: </b>{props.region}</p>
        <p className="country-capital"><b>Capital: </b>{props.capital}</p>
      </div>
    </div>
  )
}