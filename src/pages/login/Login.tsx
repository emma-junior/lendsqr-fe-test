import React from 'react'
import LoginImage from '../../components/loginImage/LoginImage'
import "./login.scss"
import LoginForm from '../../components/loginForm/LoginForm'


const Login = () => {
  return (
    <section className='login'>
        <div className='login-wrapper'>
            <div className='log-img'><LoginImage /></div>
            <div className='log-form'><LoginForm /></div>
        </div>
    </section>
  )
}

export default Login