import {useState, useRef} from 'react';
import { IoAdd } from "react-icons/io5";
 

const TaskForm = () => {
    const formRef = useRef()
    
    const addTask = ()=>{

    }
    
    const handleSubmit = (event)=>{
        event.preventDefault()
    }
    
    return (
    <div className='taskFormContainer'>
        <form className='taskForm' onSubmit={(event) => handleSubmit(event)} ref={formRef}>
            <input 
            type="text" 
            className='taskInput' 
            placeholder='Add a new Task' 
            />
            <button type="submit" className='button'><IoAdd/>Add task</button>
        </form>
    </div>

    )
}
    
export default TaskForm