import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header className="Header">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/signup'>Signup</Link></li>
          <li><Link to='/signin'>Signin</Link></li>
          <li><Link to='/todo'>Todo List</Link></li>
        </ul>
      </nav>
    </header>
  )

  export default Header