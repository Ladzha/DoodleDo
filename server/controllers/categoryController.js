import CategoryModel from '../models/categoryModel.js'
import errorHandler from '../config/errorHandler.js'

async function createCategory(req, res){
    try {
        const categoryData = req.body
        if(!categoryData) return errorHandler(res, 400, "Invalid data")
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
        res.status(200).json(category) 
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch category")
    }
}

async function getCategoryWithContent(req, res){
    try {
        const categoryId = req.params.id
        if(!categoryId) return errorHandler(res, 400, "Invalid ID")
        const category = await CategoryModel.findById(categoryId).populate("projectId")
        res.status(200).json(category)
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch category")
    }
}

export default {createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryInfo, getCategoryWithContent}