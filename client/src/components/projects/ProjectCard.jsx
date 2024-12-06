const ProjectCard = ({projectName, projectDescription}) => {

  return (
    <div className='projectCard'>
      <div className='projectName'> {projectName}</div>
      <div className='projectDescription'> {projectDescription}</div>
    </div>
  )
}

export default ProjectCard