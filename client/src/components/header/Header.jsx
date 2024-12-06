import { Link } from "react-router";
import Navbar from "./Navbar.jsx";
import Button from "../element/Button.jsx";

const Header = ({isLogin}) => {
const toggleSideMenu =()=>{
  console.log('toggleSideMenu');
  
}
  return (
    <header className='header'>
      <Navbar/>
      {isLogin ? 
      <Link to = '/welcome'> <button type="button" className="button authButton">Logout</button></Link> :
      <><Link to = '/register'> <button type="button" className="button authButton">Sign in</button></Link>
      <Link to = '/login'> <button type="button" className="button authButton">Login</button></Link></>
      }
      
    </header>
  )
}

export default Header