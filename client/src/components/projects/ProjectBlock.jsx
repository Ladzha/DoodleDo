import ProjectCardList from "./ProjectCardList.jsx"
import ProjectForm from "./ProjectForm.jsx"

const ProjectBlock = (dashboard) => {
  return (
    <div className="projectBlock">
        <ProjectCardList dashboard = {dashboard?.dashboard}/>
        <ProjectForm dashboard = {dashboard?.dashboard}/>
    </div>
  )
}

export default ProjectBlock