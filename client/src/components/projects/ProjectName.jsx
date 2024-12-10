const ProjectName = ({projectName, onClick}) => {
  return (
    <button className='projectName' onClick={onClick}> {projectName}</button>
)
}

export default ProjectName