import React, { createContext, useState, useEffect } from 'react';
import { authService } from './services/auth.service';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState(null);

    const login = async (email, password) => {
      const data = authService.login(email, password)
      setAccessToken(data.accessToken)
    }

    const refreshToken = async () =>{
      const data = await authService.refreshToken()
      setAccessToken(data.accessToken)
    }

    useEffect(() => {
      refreshToken()
    }, [])


  return (
    <AuthContext.Provider value={{accessToken, login}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext