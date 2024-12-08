import {useState} from 'react';
import Loader from '../loader/Loader.jsx';
import Error from '../error/Error.jsx';
import ProjectCard from './ProjectCard.jsx'

const ProjectCardList = (dashboard) => {

    const [projects, setProjects] = useState(dashboard?.dashboard?.categories[1].projects)

    return (
        <section className='menuSection'>
        <h3 className='menuListName'>Projects</h3>
        <article className='menuListContainer'>
        {/* {loading && <Loader/>}
        {error && <Error/>} */}
        {projects && projects.map((project)=>(
            <ProjectCard key={project._id} projectName={project.name} projectDescription={project.description}/>
        ))
        }
        </article>
    </section>
    )
}

export default ProjectCardList