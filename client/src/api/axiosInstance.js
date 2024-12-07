import axios from 'axios';
import { authService } from '../services/auth.service';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    }
});
    //Adding token to header
    api.interceptors.request.use((config)=>{

        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    }, (error)=>{
        return Promise.reject(error)
    });

    api.interceptors.response.use(
        (response)=> response,
        async (error)=>{
            const originalRequest = error.config;
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    const { accessToken } = await authService.refreshToken();
                    localStorage.setItem('token', accessToken);
                    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
                    return api(originalRequest);
                } catch (error) {
                    console.error('Error refreshing token:', err);
                    throw err;
                }
            }
            return Promise.reject(error);
});

export default api;