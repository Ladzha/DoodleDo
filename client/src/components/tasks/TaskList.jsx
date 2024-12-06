import {useState} from 'react';
import Loader from '../loader/Loader.jsx';
import Error from '../error/Error.jsx';
import Task from './Task';

const TaskList = ({loading, error}) => {

  const handleDone=(taskId)=>{
    console.log('handleDone');
    
  }

  const handleEdit=(taskId)=>{
    console.log('handleEdit');

  }

  const handleDelete=(taskId)=>{
    console.log('handleDelete');

  }

  const tasks = [
          {
            "_id": "TASK_ID_EVENING_READING",
            "name": "Evening reading",
            "isCompleted": false,
            "deadline": "2024-12-09",
            "labels": ["With pleasure"],
            "comments": []
          },
          {
            "_id": "TASK_ID_PLAN_NEXT_DAY",
            "name": "Plan next day",
            "isCompleted": false,
            "deadline": "2024-12-10",
            "labels": [],
            "comments": []
          }
        ]

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