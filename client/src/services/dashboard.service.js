import axios from 'axios';
import api from '../api/axiosInstance';

export const dashboardService = {

    async getAllDashboards() {
        try {
            const res = await api.get(`/dashboards`)
            return res.data;
        } catch (error) {
            console.error('Error getting dashboards:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch dashboard');
        }
    },

    async getDashboard(userId) {
        try {
            const res = await api.get(`/dashboards/${userId}`)
            return res.data;
        } catch (error) {
            console.error('Error getting dashboard:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch dashboard');
        }
    },

    async getAllCategories() {
        try {
            const res = await api.get('/categories')
            return res.data;
        } catch (error) {
            console.error('Error getting categories:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch categories');
        }
    },

    async getAllProjects() {
        try {
            const res = await api.get('/projects')
            return res.data;
        } catch (error) {
            console.error('Error getting project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch projects');
        }
    },

    async getAllTasks() {
        try {
            const res = await api.get('/tasks')
            return res.data;
        } catch (error) {
            console.error('Error getting tasks:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch tasks');
        }
    },

    async getAllLabels() {
        try {
            const res = await api.get('/labels')
            return res.data;
        } catch (error) {
            console.error('Error getting labels:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to fetch labels');
        }
    },

    async createCategory(newData) { 
        try {
            const res = await api.post('/categories', {
                name: newData.name,
                dashboardId: newData.dashboardId,
            }) 
            return res.data;
        } catch (error) {
            console.error('Error creating category:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to create category');
        }
    },

    async updateCategory(categoryId, newData) { 
        try {
            const res = await api.patch(`/categories/${categoryId}`, {newData}) 
            return res.data;
        } catch (error) {
            console.error('Error updating category:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to update category');
        }
    },

    async deleteCategory(categoryId) { 
        try {
            const res = await api.delete(`/categories/${categoryId}`) 
            return res.data;
        } catch (error) {
            console.error('Error deleting category:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to delete category');
        }
    },
    
    async createProject(newData) { 
        try {
            const res = await api.post('/projects', {
                name: newData.name,
                dashboardId: newData.dashboardId,
                description: newData.description,
                categoryId: newData.categoryId,
            }) 
            return res.data;
        } catch (error) {
            console.error('Error creating project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to create project');
        }
    },

    async updateProject(projectId, newData) { 
        try {
            const res = await api.patch(`/projects/${projectId}`, {newData}) 
            return res.data;
        } catch (error) {
            console.error('Error updating project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to update project');
        }
    },

    async deleteProject(projectId) { 
        try {
            const res = await api.delete(`/projects/${projectId}`) 
            return res.data;
        } catch (error) {
            console.error('Error deleting project:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to delete project');
        }
    },

    async createTask(newData) { 
        try {
            console.log("newData", newData);
            
            const res = await api.post('/tasks', {
                name: newData.name,
                dashboardId: newData.dashboardId,
                categoryId: newData.categoryId || null,
                projectId: newData.projectId || null
            }) 
            return res.data;
        } catch (error) {
            console.error('Error creating task:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to create task');
        }
    },

    async updateTask(taskId, newData) { 
        try {
            const res = await api.patch(`/tasks/${taskId}`, {newData}) 
            return res.data;
        } catch (error) {
            console.error('Error updating task:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to update task');
        }
    },

    async deleteTask(taskId) { 
        try {
            const res = await api.delete(`/tasks/${taskId}`) 
            return res.data;
        } catch (error) {
            console.error('Error deleting task:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to delete task');
        }
    },

    async createLabel(newData) { 
        try {
            const res = await api.post('/labels', {
                name: newData.name,
                dashboardId: newData.dashboardId,
                projectId: newData.categoryId || null,
                taskId: newData.projectId || null
            }) 
            return res.data;
        } catch (error) {
            console.error('Error creating label:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to create label');
        }
    },
    async updateLabel(labelId, newData) { 
        try {
            const res = await api.patch(`/labels/${labelId}`, {newData}) 
            return res.data;
        } catch (error) {
            console.error('Error updating label:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to update label');
        }
    },
    async deleteLabel(labelId) { 
        try {
            const res = await api.delete(`/labels/${labelId}`) 
            return res.data;
        } catch (error) {
            console.error('Error deleting label:', error.response?.data || error.message);
            throw error.response?.data || new Error('Failed to delete label');
        }
    },
}