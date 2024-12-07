import {useState, useEffect, useContext} from 'react';
import Button from '../element/Button';
import Input from '../element/Input';
import { authService } from '../../services/auth.service.js'
import AuthContext from '../../AuthContext.jsx';

const Login = () => {

  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext)

  const handleSubmit = async (event)=>{
    event.preventDefault()
    try {
      console.log(emailInput, passwordInput)
      await login(emailInput, passwordInput)
      setEmailInput('')
      setPasswordInput('')
    } catch (error) {
      setError(err.message || 'Login failed');
    }
  }

  return (
    <form className='form' onSubmit={(event) => handleSubmit(event)}>
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
        maxLength={15}
        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}"
        // title="Password must be 6-20 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*)."
        required/>
      <Button type='submit' message={"Login"}/>
    </form>
  )
}

export default Login