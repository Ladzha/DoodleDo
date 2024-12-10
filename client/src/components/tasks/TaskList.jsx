import {useState} from 'react'
import Task from './Task';
import { dashboardService } from '../../services/dashboard.service';

const TaskList = ({tasks}) => {

  const [error, setError] = useState('')

  const handleTaskDone= async (taskId)=>{
    try {
      console.log("handleTaskDone => ", taskId);
      // await dashboardService.updateTask(taskId, {isCompleted:true})
    } catch (error) {
        setError(error.message || 'Failed to update task')
        console.log('Failed to update task:', error.message)
    }
  }

  const handleEditTask = async (taskId)=>{
    try {
        const newData = 'test'
        console.log("handleEditTask => ", taskId, 'NewData =>', newData);
        // await dashboardService.updateTask(taskId, newData)
    } catch (error) {
        setError(error.message || 'Failed to update task')
        console.log('Failed to update task:', error.message)
    }
}

  const handleDeleteTask = async (taskId)=>{
      try {
          console.log("handleDeleteTask  => ", taskId);
          // await dashboardService.deleteTask(taskId)
      } catch (error) {
          setError(error.message || 'Failed to delete task')
          console.log('Failed to delete task:', error.message)
      }
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
              taskComment={task.comment || null}
              onDone={handleTaskDone}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />))
        }
      </div>
    </div>
  )
}

export default TaskList