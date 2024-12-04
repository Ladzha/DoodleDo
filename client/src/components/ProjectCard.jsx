const ProjectCard = ({name, description}) => {

  return (
    <div className='projectCard'>
      <div className='projectName'> {name}</div>
      <div className='projectDescription'> {description}</div>
    </div>
  )
}

export default ProjectCard