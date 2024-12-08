import ProjectModel from "../models/projectModel.js";
import TaskModel from "../models/taskModel.js";
import errorHandler from '../config/errorHandler.js';

async function createProject(req, res){
    try {
        const projectData = req.body
        if (!req.body.name || !req.body.dashboardId || !req.body.categoryId) {
            return errorHandler(res, 400, "Missing required fields");
        }
        if(!projectData) return errorHandler(res, 400, "Invalid data")
        const newProject = await ProjectModel.create(projectData)
        res.status(201).json({
            message: "New project successfully created",
            newProject: newProject,
        }) 
    } catch (error) {
        errorHandler(res, 400, "Failed to create project")
    }
}

async function updateProject(req, res){
    try {
        const projectId = req.params.id
        if(!projectId) return errorHandler(res, 400, "Invalid ID")
        const newData = req.body
        if(!newData) return errorHandler(res, 400, "Invalid data format")
        const updatedProject = await ProjectModel.findByIdAndUpdate(projectId, newData)    
        res.status(200).json({
            message: `Project with ID: ${projectId} successfully updated.`, 
            project: updatedProject}) 
    } catch (error) {
        errorHandler(res, 500, "Failed to update project")
    }
}

async function deleteProject(req, res){
    try {
        const projectId = req.params.id
        if(!projectId) return errorHandler(res, 400, "Invalid ID")
        const projectToDelete = await ProjectModel.findById(projectId)
        if (projectToDelete) {
            await TaskModel.deleteMany({ projectId: projectToDelete._id });
        }
        await ProjectModel.findByIdAndDelete(projectId)    
        res.status(200).json({
            message: `Project with ID: ${projectId} successfully deleted.`})  
    } catch (error) {
        errorHandler(res, 400, "Failed to delete project")
    }
}

async function getAllProjects(req, res){
    try {
        const projects = await ProjectModel.find()
        .populate({
            path: 'tasks',
                populate:{
                    path: "labels"
                },
        })
        if(!projects.length) return errorHandler(res, 404, "Projects not found" )
        res.status(200).json(projects)         
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch projects")
    }
}

async function getProjectInfo(req, res){
    try {
        const projectId = req.params.id
        if(!projectId) return errorHandler(res, 400, "Invalid ID")
        const project = await ProjectModel.findById(projectId)
            .populate({
                path: 'tasks',
                    populate:{
                        path: "labels"
                    },
            })
        res.status(200).json(project) 
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch project")
    }
}

async function getProjectWithContent(req, res){
    try {
        const projectId = req.params.id
        if(!projectId) return errorHandler(res, 400, "Invalid ID")
        const project = await ProjectModel.findById(projectId).populate("projectId")
        res.status(200).json(project) 
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch project")
    }
}

export default {createProject, updateProject, deleteProject, getAllProjects, getProjectInfo, getProjectWithContent}