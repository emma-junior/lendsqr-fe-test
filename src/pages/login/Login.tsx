import React from 'react'
import LoginImage from '../../components/loginImage/LoginImage'
import LogoForm from '../../components/logoForm/LogoForm'
import "./login.scss"


const Login = () => {
  return (
    <section className='login'>
        <div className='login-wrapper'>
            <div className='log-img'><LoginImage /></div>
            <div className='log-form'><LogoForm /></div>
        </div>
    </section>
  )
}

export default Login