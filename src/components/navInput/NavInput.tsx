import React from 'react'
import "./navInput.scss"

const NavInput = () => {
  return (
    <div className='search'>
          <input className='search-input' placeholder='Search for anything' />
          <img className='search-icon' src='/assets/icons/Vector.svg' alt='search' />
      </div>
  )
}

export default NavInput