import {useState, useRef, useEffect} from 'react';
import Button from '../element/Button';
import Input from '../element/Input';

const Login = () => {

  const [message, setMessage] = useState('')
  const formRef = useRef()

  const handleSubmit = async (event)=>{
    event.preventDefault()
    const formData = new FormData(formRef)
    console.log(Object.fromEntries(formData));
    
    const email = event.target.email.value
    const password = event.target.password.value
    // console.log('Email: ', email, 'Password: ', password);
  }

  //minLength

  return (
    <form className='form' onSubmit={(event) => handleSubmit(event)} ref={formRef}>
      {/* <input type="text" name={name} className={`${className} input`} placeholder={placeholder}/> */}
      <Input type='email' name='email' placeholder={"Enter email"} required/>
      <Input type='password' name='password' placeholder={"Enter password"} required/>
      <Button type='submit' message={"Login"}/>
    </form>
  )
}

export default Login