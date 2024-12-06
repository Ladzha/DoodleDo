import { MdDownloadDone } from "react-icons/md";
import TaskButtonsBlock from './TaskButtonsBlock.jsx'

const Task = ({ taskId, taskName, handleDone, handleEdit, handleDelete,}) => {
  
  const handleComment=()=>{
    console.log('handleComment');
  }
  
  return (
    <div className='taskElement'>
        <button type="button" className='taskButton' onClick={handleDone}><MdDownloadDone/></button>
      <div className="taskText">
        {taskName}
      </div>
        <TaskButtonsBlock 
        taskId={taskId} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete}
        handleComment={handleComment}/>
    </div>
  )
}

export default Task