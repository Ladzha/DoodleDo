import {useState, useRef} from 'react';
import { IoAdd } from "react-icons/io5";
import { dashboardService } from '../../services/dashboard.service.js';

const ProjectForm = () => {

  const [projectInput, setProjectInput] = useState('')
  const [error, setError] = useState('');

  const handleSubmit = async (event)=>{
    event.preventDefault()
    try {
        console.log("name: ", projectInput);
        console.log(projectInput, 
            dashboard?.dashboard?._id, 
            dashboard?.dashboard?.categories[0]._id);
        
        await dashboardService.createProject({
            name: projectInput, 
            dashboardId: dashboard?.dashboard?._id, 
            categoryId: dashboard?.dashboard?.categories[0]._id})

    } catch (error) {
        setError(error.message || 'Task creation failed');
        console.log('Task creation failed:', error.message);                  
    }finally{
      setProjectInput('')
    }
}
  return (
    <form className='taskForm' onSubmit={(event) => handleSubmit(event)}>
        <input 
        onChange={(event) => setProjectInput(event.target.value)}
        type="text" 
        className='projectInput' 
        placeholder='Add a project name' 
        value={projectInput}
        />
        {/* <textarea placeholder='Add a project description'/> */}
        <button type="submit" className='button'><IoAdd/>Add task</button>
    </form>
  )
}

export default ProjectForm