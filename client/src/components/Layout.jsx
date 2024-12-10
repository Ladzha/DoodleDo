import { Link, Outlet } from'react-router';
import Header from  './header/Header.jsx'
import Footer from './footer/Footer.jsx';
import SideMenu from './menu/SideMenu.jsx';

const Layout = () => {
  return (
    <div className='wrapper'>
        <Header/>
          <Outlet/>
        <Footer/>     
    </div>
  )
}

export default Layout