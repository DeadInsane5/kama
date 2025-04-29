import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header p-4 flex justify-between shadow-lg">
        <h1>Velvet</h1>
        <nav>
            <ul className='flex gap-4'>
                <li>Discover</li>
                <li>Browse</li>
                <li>Login</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header