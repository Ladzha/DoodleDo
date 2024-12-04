import { useState } from "react";
import { Link } from'react-router';
import Register from "../components/home/Register";
import Login from "../components/home/Login";
import Button from "../components/element/Button";

const AuthPage = () => {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <section className="board">
      <div className="formContainer">
        <h2 className="formName">{isLogin ? "Login" : "Register"}</h2>
        {isLogin ? <Login/> : <Register/>}     
        <Link to='/welcome'><Button message={"Welcome"}/></Link>
      </div>
    </section>
  )
}

export default AuthPage