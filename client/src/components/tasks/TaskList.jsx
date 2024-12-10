import Task from './Task';

const TaskList = ({tasks}) => {

  const handleDone=(taskId)=>{
    console.log('taskId from handleDone', taskId);
  }

  const handleEdit=(taskId)=>{
    console.log('taskId from handleEdit', taskId);
  }

  const handleDelete=(taskId)=>{
    console.log('taskId from handleDelete', taskId);
  }

  return (
    <div className='taskContainer'>
      <h3 className='menuListName'>Tasks</h3>
      <div className='tasksWrapper'>
        {tasks && tasks.map((task) => (
            <Task 
              key={task._id} 
              taskId={task._id}
              taskName={task.name}
              onDone={handleDone}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />))
        }
      </div>
    </div>
  )
}

export default TaskList