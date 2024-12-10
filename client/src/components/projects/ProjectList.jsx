import Project from './ProjectName.jsx'

const ProjectList = ({projects, onSelectProject}) => {

  const handleClick =(projectId)=>{
    onSelectProject(projectId)
  }
  
  return (
      <section className='menuSection'>
      <h3 className='menuListName'>Projects</h3>
      <article className='menuListContainer'>
        {projects.map((project)=>(
          <Project 
          key={project._id} 
          projectName={project.name} 
          onClick={()=>handleClick(project._id)}/>))
        }
      </article>
    </section>
  )
}

export default ProjectList