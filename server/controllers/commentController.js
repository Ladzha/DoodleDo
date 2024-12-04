import CommentModel from '../models/commentModel.js'
import errorHandler from '../config/errorHandler.js'

async function createComment(req, res){
    try {
        const commentData = req.body
        if(!commentData) return errorHandler(res, 400, "Invalid data")
        const newComment = await CommentModel.create(commentData)
        res.status(201).json({
            message: "New comment successfully created",
            newComment: newComment,
        })  
    } catch (error) {
        errorHandler(res, 400, "Failed to create comment")
    }
}

async function updateComment(req, res){
    try {
        const commentId = req.params.id
        if(!commentId) return errorHandler(res, 400, "Invalid ID")
        const newData = req.body
        if(!newData) return errorHandler(res, 400, "Invalid data format")
        const updatedComment = await CommentModel.findByIdAndUpdate(commentId, newData)    
        res.status(200).json({
            message: `Comment with ID: ${commentId} successfully updated.`, 
            comment: updatedComment}) 
    } catch (error) {
        errorHandler(res, 500, "Failed to update comment")
    }
}

async function deleteComment(req, res){
    try {
        const commentId = req.params.id
        if(!commentId) return errorHandler(res, 400, "Invalid ID")
        await CommentModel.findByIdAndDelete(commentId)    
        res.status(200).json({
            message: `Comment with ID: ${commentId} successfully deleted.`})   
    } catch (error) {
        errorHandler(res, 400, "Failed to delete comment")
    }
}

async function getAllComments(req, res){
    try {
        const comments = await CommentModel.find()
        if(!comments.length) return errorHandler(res, 404, "Comments not found" )
        res.status(200).json(comments)        
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch comments")
    }
}

async function getCommentInfo(req, res){
    try {
        const commentId = req.params.id
        if(!commentId) return errorHandler(res, 400, "Invalid ID")
        const comment = await CommentModel.findById(commentId)
        res.status(200).json(comment)   
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch comment")
    }
}

export default { createComment, updateComment, deleteComment, getAllComments, getCommentInfo }