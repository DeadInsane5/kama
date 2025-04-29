import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header p-4 flex justify-between align-middle shadow-lg">
        <h1 className='title pl-2 text-2xl'>Velvet</h1>
        <nav className='nav flex'>
            <ul className='flex gap-4'>
                <li className='p-2 text-[#741616]'>Discover</li>
                <li className='p-2'>Browse</li>
                <li className='login-button pt-2 pb-2 pl-4 pe-4 bg-[#741616] text-white rounded-xl'>Login</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header