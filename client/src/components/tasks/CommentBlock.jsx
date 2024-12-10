import { useState } from 'react'
import { dashboardService } from '../../services/dashboard.service'
import Comment from './Comment'
import CommentForm from './CommentForm'

const CommentBlock = ({taskId, comment, toggleComment}) => {
    const [commentForm, setCommentForm] = useState(false)

    const toggleCommentForm = () => {
        setCommentForm(!commentForm);
    }
    
    const handleAddComment = async (newComment) => {
        try {
            console.log("handleAddComment => ", taskId, 'newComment =>', newComment);
            const newData = {comment: newComment}
            // await dashboardService.updateTask(taskId, newData)
        } catch (error) {
            setError(error.message || 'Failed to create comment')
            console.log('Failed to create comment:', error.message)
        }
    }

    const handleEditComment = async (newComment) => {
        try {
            console.log("handleEditComment => ", taskId, 'newComment =>', newComment);
            const newData = {comment: newComment}
            // await dashboardService.updateTask(taskId, newData)
        } catch (error) {
            setError(error.message || 'Failed to create comment')
            console.log('Failed to create comment:', error.message)
        }
    }

    const handleDeleteComment = async () => {
        try {
            console.log("handleDeleteComment  => ", taskId);
            // await dashboardService.updateTask(taskId, {comment:''})
        } catch (error) {
            setError(error.message || 'Failed to delete comment')
            console.log('Failed to delete comment:', error.message)
        }
    }

    return (
    <div className='commentBlock'>
        {comment ? 
        <Comment 
        comment={comment} 
        onEdit={handleEditComment}
        onDelete={handleDeleteComment}/> : 
        <CommentForm onAddComment={handleAddComment} 
        toggleComment={toggleComment}/>}
    </div>
    )
}

export default CommentBlock