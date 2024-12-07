import {useState, useRef} from 'react';
import { IoAdd } from "react-icons/io5";
import { dashboardService } from '../../services/dashboard.service';
 

const TaskForm = () => {

    const [taskInput, setTaskInput] = useState('')    

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log("name: ", taskInput);
        
        dashboardService.createTask({name: taskInput, dashboardId: '6753439f29766b6a40d97dfd'})
    }
    
    return (
    <div className='taskFormContainer'>
        <form className='taskForm' onSubmit={(event) => handleSubmit(event)}>
            <input 
                onChange={(event) => setTaskInput(event.target.value)}
                type="text" 
                className='taskInput' 
                placeholder='Add a new Task'
                minLength={2}
                value={taskInput}
            />
            <button type="submit" className='button'><IoAdd/>Add task</button>
        </form>
    </div>

    )
}
    
export default TaskForm