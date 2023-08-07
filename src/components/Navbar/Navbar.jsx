import { Link } from 'react-router-dom'
import './style.css'
export const Navbar = ({navHeading}) => {
  return (
    <div id="navbar">
        <button id='back-button'>
            <Link to="/">
                <img src={process.env.PUBLIC_URL + "/assets/Group 1541.svg"} alt="back" />
            </Link>
        </button>
        <p id="nav-heading">{navHeading}</p>
    </div>
  )
}
