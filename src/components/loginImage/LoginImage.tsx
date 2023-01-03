import React from 'react'
import Logo from '../logo/Logo'
import "./loginImage.scss"

const LoginImage = () => {
  return (
    <section className='login-img'>
        <div className='logo-wrapper'><Logo/></div>
        <img className='pic' src='/assets/images/pablo-sign-in.png' alt='logo-img' />
    </section>
  )
}

export default LoginImage