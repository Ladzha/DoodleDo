import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm.jsx";

const TaskBlock = ({primer, loading, error}) => {
  return (
    <div className="taskBlockContainer">
        <TaskList data={primer.categories} loading={loading} error={error}/>
        <TaskForm/>    
    </div>
  )
}

export default TaskBlock