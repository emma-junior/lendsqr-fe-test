import React from 'react'
import Logo from '../logo/Logo'
import NavInput from '../navInput/NavInput'
import "./navbar.scss"

interface Props {
  sidebar:boolean
  setSidebar:React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = ({sidebar, setSidebar}:Props) => {
  return (
    <nav className='navbar'>
      <section className='navbar-wrapper'>
        <div className='logo-search'>
          <img onClick={() => setSidebar(!sidebar)} className='bar' width={30} src='/assets/icons/icon-bar-two.svg' alt='' />
          <Logo />
          <div className='lg-search-input' ><NavInput /></div>
        </div>
        <div className='profile'>
          <p className='docs'>Docs</p>
          <img className='bell' src='/assets/icons/bell.svg' alt='bell' />
          <img className='avatar' src='/assets/images/avatar.png' alt='avatar' />
          <p className='adedeji'>Adedeji <img src='/assets/icons/caret.svg' alt='caret' /></p>
        </div>
      </section>
      <div className='sm-search-input' ><NavInput /></div>
    </nav>
  )
}

export default Navbar