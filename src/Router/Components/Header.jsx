import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </ul>
    </div>
  )
}

export default Header
