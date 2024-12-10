import ProjectCardList from "./ProjectCardList.jsx"
import ProjectForm from "./ProjectForm.jsx"

const ProjectBlock = ({projects, onCreateProject}) => {

  return (
    <article className="blockContainer">
        {projects.length > 0 ?<ProjectCardList projects={projects}/>:null}
        <ProjectForm onCreateProject = {onCreateProject}/>
    </article>
  )
}

export default ProjectBlock