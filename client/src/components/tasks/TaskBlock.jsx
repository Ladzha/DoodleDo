import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm.jsx";

const TaskBlock = (dashboard) => {  
console.log("FROM TASK BLOCK", dashboard?.dashboard?._id);

  return (
    <div className="taskBlockContainer">
        <TaskList dashboard={dashboard?.dashboard}/>
        <TaskForm dashboard={dashboard?.dashboard}/>
    </div>
  )
}

export default TaskBlock