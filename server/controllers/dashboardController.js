import mongoose from "mongoose";
import defaultData from "../db/defaultData.js";
import errorHandler from "../config/errorHandler.js";
import DashboardModel from "../models/dashboardModel.js";
import CategoryModel from "../models/categoryModel.js";
import ProjectModel from "../models/projectModel.js";
import TaskModel from "../models/taskModel.js";
import LabelModel from "../models/labelModel.js";


async function getDashboard(req, res){
    try {
        const userId = req.body.userId;
        if(!mongoose.Types.ObjectId.isValid(userId)) return response.status(400).json({message: "Invalid User ID format."});
        const dashboard = await DashboardModel.find({where: {userId : userId}})
        // const cat
        res.status(200).json("dashboard")
    } catch (error) {
        errorHandler(res, 500, `Failed to fetch dashboard for user with ID ${userId}`)
    }
}

async function createDashboard(req, res){
    try {
        const userId = req.body.userId;
        const newDashboard = await DashboardModel.create({userId : userId})

        res.status(200).json("createDashboard")
    } catch (error) {
        errorHandler(res, 500, "Failed to create dashboard")
    }
}

async function deleteDashboard(req, res){
    try {
        const userId = req.params.id
        if(!userId) return errorHandler(res, 400, "Invalid ID")
        await DashboardModel.findByIdAndDelete(userId)    
        res.status(200).json({
            message: `Dashboard with ID: ${dashboardId} successfully deleted.`})  
    } catch (error) {
        errorHandler(res, 400, "Failed to delete dashboard")
    }
}
export default { getDashboard, createDashboard, deleteDashboard }