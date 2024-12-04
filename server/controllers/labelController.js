import LabelModel from '../models/labelModel.js'
import errorHandler from '../config/errorHandler.js'

async function createLabel(req, res){
    try {
        const labelData = req.body
        if(!labelData) return errorHandler(res, 400, "Invalid data")
        const newLabel = await LabelModel.create(labelData)
        res.status(201).json({
            message: "New label successfully created",
            newLabel: newLabel,
        })  
    } catch (error) {
        errorHandler(res, 400, "Failed to create label")
    }
}

async function updateLabel(req, res){
    try {
        const labelId = req.params.id
        if(!labelId) return errorHandler(res, 400, "Invalid ID")
        const newData = req.body
        if(!newData) return errorHandler(res, 400, "Invalid data format")
        const updatedLabel = await LabelModel.findByIdAndUpdate(labelId, newData)    
        res.status(200).json({
            message: `Label with ID: ${labelId} successfully updated.`, 
            label: updatedLabel})  
    } catch (error) {
        errorHandler(res, 500, "Failed to update label")
    }
}

async function deleteLabel(req, res){
    try {
        const labelId = req.params.id
        if(!labelId) return errorHandler(res, 400, "Invalid ID")
        await LabelModel.findByIdAndDelete(labelId)    
        res.status(200).json({
            message: `Label with ID: ${labelId} successfully deleted.`}) 
    } catch (error) {
        errorHandler(res, 400, "Failed to delete label")
    }
}

async function getAllLabels(req, res){
    try {
        const labels = await LabelModel.find()
        if(!labels.length) return errorHandler(res, 404, "Labels not found" )
        res.status(200).json(labels)            
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch labels")
    }
}

export default {createLabel, updateLabel, deleteLabel, getAllLabels}