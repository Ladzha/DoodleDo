import { useState } from 'react';
import { IoAdd } from "react-icons/io5";

const ProjectForm = ({onCreateProject}) => {

  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')

  const handleSubmit = (event)=>{
    event.preventDefault()
    onCreateProject(projectName, projectDescription)
    setProjectName('')
    setProjectDescription('')
  }
  return (
    <form className='projectForm' onSubmit={(event) => handleSubmit(event)}>
        <input 
        onChange={(event) => setProjectName(event.target.value)}
        type="text" 
        className='projectInput' 
        placeholder='Add a project name' 
        value={projectName}
        />
        <input 
        onChange={(event) => setProjectDescription(event.target.value)}
        type="text" 
        className='projectInput' 
        placeholder='Add a project description' 
        value={projectDescription}
        />
        <button type="submit" className='button'><IoAdd/>Add project</button>
    </form>
  )
}

export default ProjectForm