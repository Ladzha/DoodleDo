import axios from 'axios';
import {useState, useRef, useEffect} from 'react'
import Button from '../element/Button';
import Input from '../element/Input';

const BASE_API_URL = 'http://localhost:3000/api'
const additionUrl = 'users'

const Register = () => {

  const [message, setMessage] = useState('')
  const [data, setData] = useState([])

  const formRef = useRef()

  const handleSubmit = async (event)=>{

    event.preventDefault()
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    console.log('Username: ', username, 'Email: ', email, 'Password: ', password);

  }

  return (
    <form className='form' onSubmit={(event) => handleSubmit(event)} ref={formRef}>
      <Input name='username' placeholder={"Enter username"}/>
      <Input type='email' name='email' placeholder={"Enter email"}/>
      <Input type='password' name='password' placeholder={"Enter password"}/>
      <Button type='submit' message={"Register"}/>
    </form>
  )
}

export default Register