import React,{useState} from 'react'
import "./loginForm.scss"
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [error , setError] = useState<boolean>(false)
    const navigate = useNavigate()

    const [visible, setVisible] = useState<boolean>(false)
    const [input, setInput] = useState<string>("password")

    const togglePassword = () => {
    setVisible(!visible)
    setInput(visible ? "password" : "text")
    }

    const handleClick = () => {
      if(email && password) {
        navigate("/users")
        setError(false)
      }else {
        setError(true)
      }
    }
  return (
    <section className='login-form'>
        <div className='form-wrapper'>
            <p className='welcome'>Welcome!</p>
            <p className='enter-details'>Enter details to login.</p>
            {error && <p className='error'>Please enter all credentials</p>}
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder='Email'
             />
            <div className='form-password'>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={input} 
                  placeholder='Password' 
                />
                {visible ? <p onClick={togglePassword} className='shown-password'>HIDE</p>: <p onClick={togglePassword} className='shown-password'>SHOW</p>}
            </div>
            <p className='forgot-password'>FORGOT PASSWORD?</p>
            <button onClick={handleClick} className='login-btn'>LOGIN</button>
        </div>
    </section>
  )
}

export default LoginForm