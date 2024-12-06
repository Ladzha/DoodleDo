import TaskModel from '../models/taskModel.js'
import errorHandler from '../config/errorHandler.js'

async function createTask(req, res){
    try {
        const taskData = req.body
        if(!taskData) return errorHandler(res, 400, "Invalid data")
        const newTask = await TaskModel.create(taskData)
        res.status(201).json({
            message: "New task successfully created",
            newTask: newTask,
        })  
    } catch (error) {
        errorHandler(res, 400, "Failed to create task")
    }
}

async function updateTask(req, res){
    try {
        const taskId = req.params.id
        if(!taskId) return errorHandler(res, 400, "Invalid ID")
        const newData = req.body
        if(!newData) return errorHandler(res, 400, "Invalid data format")
        const updatedTask = await TaskModel.findByIdAndUpdate(taskId, newData)    
        res.status(200).json({
            message: `Task with ID: ${taskId} successfully updated.`, 
            task: updatedTask}) 
    } catch (error) {
        errorHandler(res, 500, "Failed to update task")
    }
}

async function deleteTask(req, res){
    try {
        const taskId = req.params.id
        if(!taskId) return errorHandler(res, 400, "Invalid ID")
        await TaskModel.findByIdAndDelete(taskId)    
        res.status(200).json({
            message: `Task with ID: ${taskId} successfully deleted.`})   
    } catch (error) {
        errorHandler(res, 400, "Failed to delete task")
    }
}

async function getAllTasks(req, res){
    try {
        const tasks = await TaskModel.find().populate('labels')
        if(!tasks.length) return errorHandler(res, 404, "Tasks not found" )
        res.status(200).json(tasks)        
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch tasks")
    }
}

async function getTaskInfo(req, res){
    try {
        const taskId = req.params.id
        if(!taskId) return errorHandler(res, 400, "Invalid ID")
        const task = await TaskModel.findById(taskId).populate('labels')
        res.status(200).json(task)   
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch task")
    }
}

export default { createTask, updateTask, deleteTask, getAllTasks, getTaskInfo }