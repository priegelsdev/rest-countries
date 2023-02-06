import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as farMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function MainView() {
  return (
    <div className="main-container">
      <form className="search-bar">
        <FontAwesomeIcon className="search-icon"icon={farMagnifyingGlass}/>
        <input className="search-input" placeholder="Search for a country..."></input>
      </form>
    </div>
  )
}