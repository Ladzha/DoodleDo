import taskModel from '../models/taskModel.js'
import errorHandler from '../config/errorHandler.js'

async function createTask(req, res){
    try {
        res.status(200).json("createTask")        
        console.log("createTask");  
    } catch (error) {
        errorHandler(res, 400, "Failed to create task")
    }
}

async function updateTask(req, res){
    try {
        res.status(200).json("updateTask")        
        console.log("updateTask");  
    } catch (error) {
        errorHandler(res, 500, "Failed to update task")
    }
}

async function deleteTask(req, res){
    try {
        res.status(200).json("deleteTask")        
        console.log("deleteTask");  
    } catch (error) {
        errorHandler(res, 400, "Failed to delete task")
    }
}

async function getAllTasks(req, res){
    try {
        console.log("getAllTasks");
        res.status(200).json("getAllTasks")        
        // const tasks = await TaskModel.find()
        // if(!tasks.length) return errorHandler(res, 404, "Tasks not found" )
        // res.status(200).json(tasks)        
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch tasks")
    }
}

async function getTaskInfo(req, res){
    try {
        res.status(200).json("getTaskInfo: Fetching basic task info")        
        console.log("getTaskInfo: Fetching basic task info");  
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch task")
    }
}

export default { createTask, updateTask, deleteTask, getAllTasks, getTaskInfo }