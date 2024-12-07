import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm.jsx";

const TaskBlock = () => {
  
  return (
    <div className="taskBlockContainer">
        <TaskList/>
        <TaskForm/>    
    </div>
  )
}

export default TaskBlock