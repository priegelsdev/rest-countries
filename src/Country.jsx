export default function Country(props) {
  return (
    <div className="country-container">
      <img className="flag" src={props.flag}></img>
      <div className="country-details">
        <h2 className="country-name">{props.name}</h2>
        <p className="country-population"><b>Population:</b>{props.population}</p>
        <p className="country-region"><b>Region:</b>{props.region}</p>
        <p className="country-capital"><b>Capital:</b>{props.capital}</p>
      </div>
    </div>
  )
}