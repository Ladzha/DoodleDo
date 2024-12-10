const ProjectCard = ({projectName, projectDescription, onDone, onEdit, onDelete}) => {

  return (
    <div className='projectCardElement'>
      <div className='projectName'> {projectName}</div>
      <div className='projectDescription'> {projectDescription}</div>
    </div>
  )
}

export default ProjectCard