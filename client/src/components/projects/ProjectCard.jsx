import ProjectButtonsBlock from './ProjectButtonBlock.jsx'

const ProjectCard = ({projectName, projectDescription, onDone, onEdit, onDelete}) => {

  return (
    <div className='projectCardElement'>
      <div className='projectName'> {projectName}</div>
      <div className='projectDescription'> {projectDescription}</div>
      <ProjectButtonsBlock onDone={onDone} onEdit={onEdit} onDelete={onDelete}/>
    </div>
  )
}

export default ProjectCard