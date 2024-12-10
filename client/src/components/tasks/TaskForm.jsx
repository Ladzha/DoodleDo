import { useState } from 'react';
import { IoAdd } from "react-icons/io5";

const TaskForm = ({onCreateTask}) => {

    const [taskName, setTaskName] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        onCreateTask(taskName)
    }
    
    return (
    <div className='taskFormContainer'>
        <form className='taskForm' onSubmit={(event) => handleSubmit(event)}>
            <input 
                onChange={(event) => setTaskName(event.target.value)}
                type="text" 
                className='taskInput' 
                placeholder='Add a new Task'
                minLength={2}
                value={taskName}
            />
            <button type="submit" className='button'><IoAdd/>Add task</button>
        </form>
    </div>

    )
}
    
export default TaskForm