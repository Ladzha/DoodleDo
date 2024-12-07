import axios from 'axios';
import api from '../api/axiosInstance';

export const authService = {

    async getAllUsers() {
        try {
            const res = await api.get(`/users`)
            return res.data;
        } catch (error) {
            console.error('Error getting users:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch users');
        }
    },

    async getUser(userId) {
        try {
            const res = await api.get(`/users${userId}`)
            return res.data;
        } catch (error) {
            console.error('Error getting user:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch user');
        }
    },
    async updateUser(userId) {
        try {
            const res = await api.patch(`/users${userId}`)
            return res.data;
        } catch (error) {
            console.error('Error updating user:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to update user');
        }
    },

    async deleteUser(userId) {
        try {
            const res = await api.delete(`/users${userId}`)
            return res.data;
        } catch (error) {
            console.error('Error deleting user:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to delete user');
        }
    },

    async register(username, email, password) {
        try {
            const res = await api.post('/users/register', {username, email, password})
            return res.data;
        } catch (error) {
            console.error('Error registration:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to register user');
        }
    },

    async login(email, password) {
        try {
            const res = await api.post('/users/login', {email, password})
            return res.data;
        } catch (error) {
            console.error('Error login:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to login');
        }
    },

    async logout() {
        try {
            const res = await api.delete('/users/logout')
            return res.data;
        } catch (error) {
            console.error('Error logout:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to logout');
        }
    },

    
    async getToken() {
        try {
            const res = await api.get('/users/protected')
            return res.data;
        } catch (error) {
            console.error('Error getting token:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed fetch token');
        }
    },

    async refreshToken() {
        try {
            const res = await api.get('/users/refresh-token')
            return res.data;
        } catch (error) {
            console.error('Error getting token:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed fetch token');
        }
    },


}