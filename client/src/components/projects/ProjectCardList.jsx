import Loader from '../loader/Loader.jsx';
import Error from '../error/Error.jsx';
import ProjectCard from './ProjectCard.jsx'

const ProjectCardList = () => {

    const projects = [
    {
        "_id": "PROJECT_ID_MORNING_HABITS",
        "name": "Morning habits",
        "description": "Establish a productive morning routine.",
        "isCompleted": false,
        "deadline": "2024-12-30",
        "tasks": [
        {
            "_id": "TASK_ID_MEDITATION",
            "name": "Meditation",
            "description": "Spend 10 minutes meditating every morning.",
            "isCompleted": false,
            "deadline": "2024-12-15",
            "labels": ["With pleasure", "Daily"],
            "comments": ["Use a meditation app for guidance."]
        }
        ]
    }
    ]
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