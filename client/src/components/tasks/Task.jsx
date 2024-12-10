import { useState } from 'react'
import { MdDownloadDone } from "react-icons/md"
import TaskButtonsBlock from './TaskButtonsBlock.jsx'
import CommentBlock from './CommentBlock.jsx'

const Task = ({ taskId, taskName, taskComment, onDone, onEdit, onDelete,}) => {
  const [commentBlock, setCommentBlock] =useState(false)

  const toggleComment = () => {
    setCommentBlock(!commentBlock);
  }

  return (
    <div className='taskBlock'>
      <div className='taskElement'>
      <button type="button" className='taskButton' onClick={onDone}><MdDownloadDone/></button>
        <div className="taskText">
          {taskName}
        </div>
          <TaskButtonsBlock 
            taskId={taskId} 
            onEdit={onEdit} 
            onDelete={onDelete}
            toggleComment={toggleComment}/>
      </div>
      {commentBlock && 
      <CommentBlock 
        taskId={taskId}
        comment={taskComment}
        toggleComment={toggleComment}/>}
    </div>
  )
}

export default Task