import errorHandler from "../config/errorHandler.js";
import DashboardModel from "../models/dashboardModel.js";
import CategoryModel from "../models/categoryModel.js";
import ProjectModel from "../models/projectModel.js";
import TaskModel from "../models/taskModel.js";
import LabelModel from "../models/labelModel.js";

async function getAllDashboards(req, res){
    try {       
        const dashboards = await DashboardModel.find()
        .populate({
            path: "categories",
            populate: [{
                    path: 'projects',
                    populate: {
                        path: 'tasks',
                        populate: {
                            path: "labels"
                        }}},{
                    path: 'tasks',
                    populate: {
                        path: "labels"
                    }}]});

        if(!dashboards.length) return errorHandler(res, 404, "Dashboards not found" )
        res.status(200).json(dashboards)        
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch dashboards")
    }
}

async function getDashboard(req, res){
    try {
        const userId = req.params.userId;
        // const userId = req.body.userId;
        if(!userId) return errorHandler(res, 400, "Invalid ID")
        const dashboard = await DashboardModel.findOne({userId : userId})
        .populate({
            path: "categories", 
                populate: [{
                    path: 'projects',
                    populate: {
                        path: 'tasks',
                        populate: {
                            path: "labels"
                        }}},{
                    path: 'tasks',
                    populate:{
                        path: "labels"
                }}]})
        if (!dashboard) {
            return errorHandler(res, 404, "Dashboard not found");
        }
        res.status(200).json(dashboard)
    } catch (error) {
        errorHandler(res, 500, `Failed to fetch dashboard for user with ID ${userId}`)
    }
}

async function createDashboard(userId, template){
    try {
        const newDashboard = await DashboardModel.create({userId : userId})

        for(const category of template.categories){            
            const newCategory = await CategoryModel.create({
                name: category.name,
                dashboardId: newDashboard._id,
            })

            if(category.tasks){
                for(const task of category.tasks){
                    const newTask = await TaskModel.create({
                        name: task.name,
                        dashboardId: newDashboard._id,
                        categoryId: newCategory._id,
                        deadlineAt: task.deadline ? new Date(task.deadline) : null,
                        comment: task.comment || null,
                    })
                    if(task.labels){
                        for(const label of task.labels){
                            const newLabel = await LabelModel.create({
                                name: label.name,
                                dashboardId: newDashboard._id,
                                taskId: newTask._id
                    })}}
                }}           
            if(category.projects){
                for(const project of category.projects){
                    const newProject = await ProjectModel.create({
                        name: project.name,
                        description: project.description || null,
                        dashboardId: newDashboard._id,
                        categoryId: newCategory._id,
                        deadlineAt: project.deadline ? new Date(project.deadline) : null,
                    })
                    if(project.tasks){
                        for(const task of project.tasks){
                            const newTask = await TaskModel.create({
                                name: task.name,
                                dashboardId: newDashboard._id,
                                categoryId: newCategory._id,
                                projectId: newProject._id,
                                deadlineAt: task.deadline ? new Date(task.deadline) : null,
                                comment: task.comment || null,
                            })
                            if(task.labels){
                                for(const label of task.labels){
                                    const newLabel = await LabelModel.create({
                                        name: label.name,
                                        dashboardId: newDashboard._id,
                                        projectId: newProject._id,
                                        taskId: newTask._id
                            })}}
                    }}
                    if(project.labels){
                        for(const label of project.labels){
                            const newLabel = await LabelModel.create({
                                name: label.name,
                                dashboardId: newDashboard._id,
                                projectId: newProject._id
                    })}}
            }}
        }
        return newDashboard
    } catch (error) {
        console.error("Error creating dashboard:", error);
        throw new Error("Failed to create dashboard");        
    }
}

export default { getAllDashboards, getDashboard, createDashboard }