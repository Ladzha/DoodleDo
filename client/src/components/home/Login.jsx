import {useState, useRef, useEffect} from 'react';
import Button from '../element/Button';
import Input from '../element/Input';

const Login = () => {

  const [message, setMessage] = useState('')
  const formRef = useRef()

  const handleSubmit = async (event)=>{
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    console.log('Email: ', email, 'Password: ', password);
  }

  return (
    <form className='form' onSubmit={(event) => handleSubmit(event)} ref={formRef}>
      <Input type='email' name='email' placeholder={"Enter email"}/>
      <Input type='password' name='password' placeholder={"Enter password"}/>
      <Button type='submit' message={"Login"}/>
    </form>
  )
}

export default Login