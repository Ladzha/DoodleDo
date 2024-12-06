import axios from 'axios';
import api from '../api/axiosInstance';

export const dashboardService = {

    async getAllDashboards() {
        try {
            const res = await api.get(`/dashboards'`)
            return res.data;
        } catch (error) {
            console.error('Error creating project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch dashboard');
        }
    },

    async getDashboard(userId) {
        try {
            const res = await api.get(`/dashboard${userId}'`)
            return res.data;
        } catch (error) {
            console.error('Error creating project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch dashboard');
        }
    },

    async getAllCategories() {
        try {
            const res = await api.get('/categories')
            return res.data;
        } catch (error) {
            console.error('Error creating project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch categories');
        }
    },

    async getAllProjects() {
        try {
            const resp = await api.get('/projects')
            return res.data;
        } catch (error) {
            console.error('Error creating project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch projects');
        }
    },

    async getAllTasks() {
        try {
            const res = await api.get('/tasks')
            return res.data;
        } catch (error) {
            console.error('Error creating project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch tasks');
        }
    },

    async getAllLabels() {
        try {
            const res = await api.get('/labels')
            return res.data;
        } catch (error) {
            console.error('Error creating project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch dashboard');
        }
    },


    async createTask(newData) { 
        try {
            const res = await axios.post('/api/audio/post', {newData}) 
            return res.data;
        } catch (error) {
            console.error('Error creating project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch dashboard');
        }
    },


}