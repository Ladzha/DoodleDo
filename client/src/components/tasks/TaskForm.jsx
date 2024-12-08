import {useState, useRef} from 'react';
import { IoAdd } from "react-icons/io5";
import { dashboardService } from '../../services/dashboard.service';
import Category from '../categories/Category';
 

const TaskForm = (dashboard) => {

    const [taskInput, setTaskInput] = useState('')
    const [error, setError] = useState('');

    const categoryId = '675498cfd79520440c4186c6' || null
    // const projectId = projectId || null

    console.log("From TaskForm dashboardId", dashboard?.dashboard?._id);
    console.log("From TaskForm categories", dashboard?.dashboard?.categories[0]._id);


    const handleSubmit = async (event)=>{
        event.preventDefault()
        try {
            console.log("name: ", taskInput);
            console.log(taskInput, 
                dashboard?.dashboard?._id, 
                dashboard?.dashboard?.categories[0]._id);
            
            await dashboardService.createTask({
                name: taskInput, 
                dashboardId: dashboard?.dashboard?._id, 
                categoryId: dashboard?.dashboard?.categories[0]._id})

        } catch (error) {
            setError(error.message || 'Task creation failed');
            console.log('Task creation failed:', error.message);                  
        }finally{
            setTaskInput('')
        }
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