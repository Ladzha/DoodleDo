import {Routes, Route} from'react-router';
import AuthPage from './pages/AuthPage';
import WelcomePage from './pages/WelcomePage';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Error from './components/error/Error';
import './App.css';
import Layout from './components/Layout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index element = {<WelcomePage/>}/>
          <Route path = 'auth' element = {<AuthPage/>}/>
          <Route path = 'profile' element = {<Profile/>}/>
          <Route path = 'dashboard' element = {<Dashboard/>}/>
          <Route path = '*' element = {<Error/>}/>
        </Route>
      </Routes>
    </>

  )
}

export default App
