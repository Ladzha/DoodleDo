import express from "express";
import projectController from '../controllers/projectController.js'

const { createProject, updateProject, deleteProject, getAllProjects, getProjectInfo, getProjectWithContent } = projectController;

const projectRouter = express.Router();

projectRouter.route('/')
.get(getAllProjects)
.post(createProject)

projectRouter.route('/:id')
.get(getProjectInfo)
.patch(updateProject)
.delete(deleteProject)

projectRouter.route('/:id/content')
.get(getProjectWithContent)

export default projectRouter;