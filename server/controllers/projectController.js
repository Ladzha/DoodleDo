import projectModel from "../models/projectModel.js"
import errorHandler from '../config/errorHandler.js'

async function createProject(req, res){
    try {
        res.status(200).json("createProject")        
        console.log("createProject");  
    } catch (error) {
        errorHandler(res, 400, "Failed to create project")
    }
}

async function updateProject(req, res){
    try {
        res.status(200).json("updateProject")        
        console.log("updateProject");  
    } catch (error) {
        errorHandler(res, 500, "Failed to update project")
    }
}

async function deleteProject(req, res){
    try {
        res.status(200).json("deleteProject")        
        console.log("deleteProject");  
    } catch (error) {
        errorHandler(res, 400, "Failed to delete project")
    }
}

async function getAllProjects(req, res){
    try {
        console.log("getAllProjects");
        res.status(200).json("getAllProjects")        
        // const projects = await ProjectModel.find()
        // if(!projects.length) return errorHandler(res, 404, "Projects not found" )
        // res.status(200).json(projects)        
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch projects")
    }
}

async function getProjectInfo(req, res){
    try {
        res.status(200).json("getProjectInfo: Fetching basic project info")        
        console.log("getProjectInfo: Fetching basic project info");  
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch project")
    }
}

async function getProjectWithContent(req, res){
    try {
        res.status(200).json("getProjectWithContent: Fetching project info with content info")        
        console.log("getProjectWithContent: Fetching project info with content info");  
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch project")
    }
}

export default {createProject, updateProject, deleteProject, getAllProjects, getProjectInfo, getProjectWithContent}