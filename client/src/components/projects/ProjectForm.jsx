import {useState, useRef} from 'react';
import { IoAdd } from "react-icons/io5";

const ProjectForm = () => {
    const formRef = useRef()

    const addProject=(inputValue)=>{

    }
    
    const handleSubmit = (event)=>{
        event.preventDefault()
    }

  return (
    <form className='taskForm' onSubmit={(event) => handleSubmit(event)} ref={formRef}>
        <input type="text" 
        className='projectInput' 
        placeholder='Add a project name' 
        />
        <textarea placeholder='Add a project description'/>
        <button type="submit" className='button'><IoAdd/>Add task</button>
    </form>
  )
}

export default ProjectForm