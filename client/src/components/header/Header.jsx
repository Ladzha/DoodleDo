// import { Link } from "react-router";
import Navbar from "./Navbar.jsx";
import Button from "../element/Button.jsx";

const Header = () => {
const toggleSideMenu =()=>{
  console.log('toggleSideMenu');
  
}
  return (
    <header className='header'>
      {/* <Button className="menuButton" action={toggleSideMenu}/> */}

      {/* <Link to='/welcome'>Logo</Link> */}
      <Navbar/>
    </header>
  )
}

export default Header