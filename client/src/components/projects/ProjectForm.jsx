import {useState} from 'react';
import { IoAdd } from "react-icons/io5";

const ProjectForm = () => {
    
    const [inputValue, setInputValue] = useState('')

    const addProject=(inputValue)=>{

    }

    const handleChange = (event)=>{
        setInputValue(event.target.value)
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(inputValue !== ''){
            addProject(inputValue)
        }
        setInputValue('')
    }

  return (
    <form className='taskForm' onSubmit={(event)=>handleSubmit(event)}>
        <input type="text" 
        className='taskInput' 
        value={inputValue} placeholder='Add a new Task' 
        onClick={(event)=>handleChange(event)} />
        <button type="submit" className='button'><IoAdd/>Add task</button>
    </form>
  )
}

export default ProjectForm