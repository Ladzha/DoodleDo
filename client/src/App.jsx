import {Routes, Route} from'react-router';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard';
import Error from './components/error/Error';
import './App.css';
import Layout from './components/Layout';
import AuthContext, {AuthProvider} from './AuthContext';

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index element = {<WelcomePage/>}/>
          <Route path = 'login' element = {<LoginPage/>}/>
          <Route path = 'register' element = {<RegisterPage/>}/>
          <Route path = 'dashboard' element = {<Dashboard/>}/>
          <Route path = '*' element = {<Error/>}/>
        </Route>
      </Routes>
      </AuthProvider>
    </>

  )
}

export default App
