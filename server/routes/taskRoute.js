import express from "express";
import taskController from "../controllers/taskController.js";
import authMiddleware from '../middleware/authMiddleware.js'

const { createTask, updateTask, deleteTask, getAllTasks, getTaskInfo } = taskController;

const taskRouter = express.Router();
taskRouter.use(authMiddleware)

taskRouter.route('/')
.get(getAllTasks)
.post(createTask)


taskRouter.route('/:id')
.get(getTaskInfo)
.patch(updateTask)
.delete(deleteTask)

export default taskRouter