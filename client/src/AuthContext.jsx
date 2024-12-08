import React, { createContext, useState, useEffect } from 'react';
// import jwtDecode from 'jwt-decode';
import { authService } from './services/auth.service';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState(null);
    const [userId, setUserId] = useState(null);

    const login = async (email, password) => {
      const data = await authService.login(email, password)
      setAccessToken(data.accessToken)
      setUserId(data.userId)

      console.log("userId from AuthContext", userId);
      
      // const decodedToken = jwtDecode(data.accessToken);
      // setUserId(decodedToken.userId);
    }

    const refreshToken = async () =>{
      const data = await authService.refreshToken()
      setAccessToken(data.accessToken)
      // const decodedToken = jwtDecode(data.accessToken);
      // setUserId(decodedToken.userId);
    }

    useEffect(() => {
      // refreshToken()
    }, [])


  return (
    <AuthContext.Provider value={{accessToken, userId, login}}>
      {children}
    </AuthContext.Provider>
  )
}

export default{ AuthContext , AuthProvider }
