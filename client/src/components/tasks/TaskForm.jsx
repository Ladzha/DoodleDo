import {useState} from 'react';
import { IoAdd } from "react-icons/io5";

const TaskForm = () => {
    
    const [inputValue, setInputValue] = useState('')

    const addTod = (inputValue)=>{
        
    }

    const handleChange = (event)=>{
        setInputValue(event.target.value)
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(inputValue !== ''){
            addTask(inputValue)
        }
        setInputValue('')
    }
    
    return (
    <div className='taskFormContainer'>
        <form className='taskForm' onSubmit={(event)=>handleSubmit(event)}>
            <input type="text" className='taskInput' value={inputValue} placeholder='Add a new Task' onClick={(event)=>handleChange(event)} />
            <button type="submit" className='button'><IoAdd/>Add task</button>
        </form>
    </div>

    )
}
    
export default TaskForm