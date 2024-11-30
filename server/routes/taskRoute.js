import express from "express";
import taskController from "../controllers/taskController.js";

const { createTask, updateTask, deleteTask, getAllTasks, getTaskInfo } = taskController;

const taskRouter = express.Router();

taskRouter.route('/')
.get(getAllTasks)
.post(createTask)


taskRouter.route('/:id')
.get(getTaskInfo)
.patch(updateTask)
.delete(deleteTask)

export default taskRouter