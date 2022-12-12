import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <ul>
        <li><Link to="/"> Home </Link>
        </li>
        <li><Link to="/About"> About  </Link>
        </li>
        <li><Link to="/Contact"> Contact  </Link>
        </li>
        <li><Link to="/LoginForm"> Register  </Link>
        </li>
       
      </ul>
    </nav>
  )
}

export default Navbar