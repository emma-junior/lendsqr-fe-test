import React from 'react'
import Logo from "../logo/Logo"
import "./mobileNavbar.scss"

const MobileNavbar = () => {
  return (
    <nav>
        <div className='logo-section'>
            <img width={30} src='/assets/icons/icon-bar-one.svg' alt='' />
            <Logo />
        </div>
        {/* <div>
            <img width={30} src='/assets/icons/icon-bar-two.svg' alt='' />
        </div> */}
        <div>
            <img width={30} src='/assets/icons/magnify.svg' alt='' />
        </div>
    </nav>
  )
}

export default MobileNavbar

