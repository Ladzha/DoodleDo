import axios from 'axios';
import {useState, useRef, useEffect} from 'react'
import Button from '../element/Button';
import Input from '../element/Input';
import { authService } from '../../services/auth.service.js'

const Register = () => {

  const [usernameInput, setUsernameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleSubmit = async (event)=>{
    event.preventDefault()
    console.log(usernameInput, emailInput, passwordInput) 
    try {
      await authService.register(usernameInput, emailInput, passwordInput)
      setUsernameInput('')
      setEmailInput('')
      setPasswordInput('')
    } catch (error) {
      console.error('Registration failed:', err.message);
    }  


  }


  return (
    <form className='form' onSubmit={(event) => handleSubmit(event)}>
      <input
        onChange={(event) => setUsernameInput(event.target.value)}
        type='text' 
        name='username' 
        placeholder="Enter username" 
        className='input'
        value={usernameInput}
        minLength={3}
        maxLength={15}
        required
        />
      <input
        onChange={(event) => setEmailInput(event.target.value)}
        type='email' 
        name='email' 
        placeholder="Enter email" 
        className='input'
        value={emailInput}
        minLength={10}
        maxLength={40}
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        title="Please enter a valid email address (e.g., user@example.com)"
        required
        />
      <input 
        onChange={(event) => setPasswordInput(event.target.value)}
        type='password' 
        name='password' 
        placeholder="Enter password" 
        className='input'
        value={passwordInput}
        minLength={6}
        maxLength={20}
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}"
        title="Password must be 6-20 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*)."
        required/>
        <Button type='submit' message={"Register"}/>
    </form>
  )
}

export default Register