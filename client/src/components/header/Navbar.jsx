import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to = '/'>Welcome</Link>
      <Link to = '/dashboard'>Dashboard</Link>
    </nav>
  )
}

export default Navbar