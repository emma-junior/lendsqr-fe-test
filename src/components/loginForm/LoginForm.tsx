import React,{useState} from 'react'
import "./loginForm.scss"

const LoginForm = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [input, setInput] = useState<string>("password")

    const togglePassword = () => {
    setVisible(!visible)
    setInput(visible ? "password" : "text")
}
  return (
    <section className='login-form'>
        <div className='form-wrapper'>
            <p className='welcome'>Welcome!</p>
            <p className='enter-details'>Enter details to login.</p>
            <input type="text" placeholder='Email' />
            <div className='form-password'>
                <input type={input} placeholder='Password' />
                {visible ? <p onClick={togglePassword} className='shown-password'>HIDE</p>: <p onClick={togglePassword} className='shown-password'>SHOW</p>}
            </div>
            <p className='forgot-password'>FORGOT PASSWORD?</p>
            <button className='login-btn'>LOGIN</button>
        </div>
    </section>
  )
}

export default LoginForm