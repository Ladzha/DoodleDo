import {useState} from 'react';
import Loader from '../loader/Loader.jsx';
import Error from '../error/Error.jsx';
import Task from './Task';

const TaskList = (dashboard) => {

  const [tasks, setTasks] = useState(dashboard?.dashboard?.categories[0].tasks)

  console.log("TASK LIST=>", dashboard?.dashboard?.categories[0].tasks);
  

  const handleDone=(taskId)=>{
    console.log('handleDone');
    
  }

  const handleEdit=(taskId)=>{
    console.log('handleEdit');

  }

  const handleDelete=(taskId)=>{
    console.log('handleDelete');

  }

  return (
        <section className='taskContainer'>
        <h3 className='menuListName'>Tasks</h3>
        <article className='tasksWrapper'>
          {/* {loading && <Loader/>}
          {error && <Error/>} */}
          {tasks && tasks.map((task) => (
              <Task 
              key={task._id} 
              taskId={task._id}
              taskName={task.name}
              handleDone={handleDone}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              />
            ))
          }
        </article>
      </section>
  )
}

export default TaskList