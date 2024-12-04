import { Link, Outlet } from'react-router';
import Header from  './header/Header.jsx'
import Footer from './footer/Footer.jsx';
import SideMenu from './menu/SideMenu.jsx';

const Layout = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <main className='container'>
          <SideMenu/>
          <Outlet/>
        </main>
        <Footer/>     
    </div>
  )
}

export default Layout