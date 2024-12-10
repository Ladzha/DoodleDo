import { MdDownloadDone } from "react-icons/md";
import TaskButtonsBlock from './TaskButtonsBlock.jsx'

const Task = ({ taskId, taskName, onDone, onEdit, onDelete,}) => {
  
  const handleComment=()=>{
    console.log('handleComment');
  }
  
  return (
    <div className='taskElement'>
        {/* <button type="button" className='taskButton' onClick={onDone}><MdDownloadDone/></button> */}
      {/* <div className="taskText"> */}
        {taskName}
      {/* </div> */}
        {/* <TaskButtonsBlock 
        taskId={taskId} 
        onEdit={onEdit} 
        onDelete={onDelete}
        onComment={onComment}/> */}
    </div>
  )
}

export default Task