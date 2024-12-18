import CategoryModel from '../models/categoryModel.js';
import ProjectModel from '../models/projectModel.js';
import TaskModel from '../models/taskModel.js';
import errorHandler from '../config/errorHandler.js';

async function createCategory(req, res){
    try {
        const categoryData = req.body
        if (!req.body.name || !req.body.dashboardId) {
            return errorHandler(res, 400, "Missing required fields");
        }
        const newCategory = await CategoryModel.create(categoryData)
        res.status(201).json({
            message: "New category successfully created",
            newCategory: newCategory,
        })        
    } catch (error) {
        errorHandler(res, 400, "Failed to create category")
    }
}

async function updateCategory(req, res){
    try {
        const categoryId = req.params.id
        if(!categoryId) return errorHandler(res, 400, "Invalid ID")
        const newData = req.body
        if(!newData) return errorHandler(res, 400, "Invalid data format")
        const updatedCategory = await CategoryModel.findByIdAndUpdate(categoryId, newData)    
        res.status(200).json({
            message: `Category with ID: ${categoryId} successfully updated.`, 
            category: updatedCategory}) 
    } catch (error) {
        errorHandler(res, 500, "Failed to update category")
    }
}

async function deleteCategory(req, res){
    try {
        const categoryId = req.params.id
        if(!categoryId) return errorHandler(res, 400, "Invalid ID")
        const categoryToDelete = await CategoryModel.findById(categoryId);    
        if (categoryToDelete) {
            await TaskModel.deleteMany({ categoryId: categoryToDelete._id });
            await ProjectModel.deleteMany({ categoryId: categoryToDelete._id });
        }
        await CategoryModel.findByIdAndDelete(categoryId)    
        res.status(200).json({
            message: `Category with ID: ${categoryId} successfully deleted.`})  
    } catch (error) {
        errorHandler(res, 400, "Failed to delete category")
    }
}  

async function getAllCategories(req, res){
    try {       
        const categories = await CategoryModel.find()
        .populate([{
                path: 'projects',
                populate: {
                    path: 'tasks',
                    populate: {
                        path: "labels"
                }}},{
                path: 'tasks',
                populate: {
                    path: "labels"
                }}])
        if(!categories.length) return errorHandler(res, 404, "Categories not found" )
        res.status(200).json(categories)        
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch categories")
    }
}

async function getCategoryInfo(req, res){
    try {
        const categoryId = req.params.id
        if(!categoryId) return errorHandler(res, 400, "Invalid ID")
        const category = await CategoryModel.findById(categoryId)
            .populate([{
                path: 'projects',
                populate: {
                    path: 'tasks',
                    populate: {
                        path: "labels"
                }}},{
                path: 'tasks',
                populate: {
                    path: "labels"
                }}])
        res.status(200).json(category) 
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch category")
    }
}


export default {createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryInfo}