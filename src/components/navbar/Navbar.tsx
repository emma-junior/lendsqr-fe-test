import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <section className='navbar-wrapper'>
        <div className='logo-search'>
          <div className='logo'>
            <img className='union' src='assets/icons/Union.svg' alt='union' />
            <img className='lendsqr' src='assets/icons/lendsqr.svg' alt='lendsqr' />
          </div>
          <div className='search'>
            <input className='search-input' placeholder='Search for anything' />
            <img className='search-icon' src='assets/icons/Vector.svg' alt='search' />
          </div>
        </div>
        <div className='profile'>
          <p className='docs'>Docs</p>
          <img className='bell' src='assets/icons/bell.svg' alt='bell' />
          <img className='avatar' src='assets/images/avatar.png' alt='avatar' />
          <p className='adedeji'>Adedeji <img src='assets/icons/caret.svg' alt='caret' /></p>
        </div>
      </section>
    </nav>
  )
}

export default Navbar