import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to = '/'>Home</Link>
      <Link to = '/auth'>Auth</Link>
      <Link to = '/welcome'>Welcome</Link>
      <Link to = '/profile'>Profile</Link>
      <Link to = '/dashboard'>Dashboard</Link>
    </nav>
  )
}

export default Navbar