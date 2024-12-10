import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm.jsx";

const TaskBlock = ({tasks, onCreateTask}) => {  

  return (
    <article className="blockContainer">
      {tasks.length > 0 ?<TaskList tasks={tasks}/>:null}
      <TaskForm onCreateTask={onCreateTask}/>
    </article>
  )
}

export default TaskBlock