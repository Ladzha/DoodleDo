import axios from 'axios';

const TOKEN  = "token"

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    }
});
    //Adding token to header
    api.interceptors.request.use((config)=>{
        config.headers.Authorization = `Bearer ${TOKEN}`
        return config
    }, (error)=>{
        return Promise.reject(error)
    });

    api.interceptors.response.use((response)=>{
        return response
    }, (error)=>{
        console.error('Error response:', error.response?.data || error.message);
        return Promise.reject(error)
    });

export default api;