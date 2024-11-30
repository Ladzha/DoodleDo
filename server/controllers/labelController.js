import LabelModel from '../models/labelModel.js'
import errorHandler from '../config/errorHandler.js'

async function createLabel(req, res){
    try {
        res.status(200).json("createLabel")        
        console.log("createLabel");  
    } catch (error) {
        errorHandler(res, 400, "Failed to create label")
    }
}

async function updateLabel(req, res){
    try {
        res.status(200).json("updateLabel")        
        console.log("updateLabel");  
    } catch (error) {
        errorHandler(res, 500, "Failed to update label")
    }
}

async function deleteLabel(req, res){
    try {
        res.status(200).json("deleteLabel")        
        console.log("deleteLabel");  
    } catch (error) {
        errorHandler(res, 400, "Failed to delete label")
    }
}

async function getAllLabels(req, res){
    try {
        console.log("getAllLabels");
        res.status(200).json("getAllLabels")           
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch labels")
    }
}

export default {createLabel, updateLabel, deleteLabel, getAllLabels}