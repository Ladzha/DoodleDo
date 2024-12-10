import ProjectCard from './ProjectCard.jsx'

const ProjectCardList = ({projects}) => {

    const handleDone=(projectId)=>{
        console.log('projectId from handleDone', projectId);
    }
    
    const handleEdit=(projectId)=>{
        console.log('projectId from handleEdit', projectId);
    }

    const handleDelete=(projectId)=>{
        console.log('projectId from handleDelete', projectId);
    }
    
    return (
        <div className='projectCardContainer'>
            <h3 className='menuListName'>Projects</h3>
            <div className='projectWrapper'>
                {projects.map((project)=>(
                    <ProjectCard 
                        key={project._id} 
                        projectName={project.name} 
                        projectDescription={project.description}
                        omDone={handleDone}
                        onEdit={handleEdit}
                        onDelete={handleDelete}/>))
                }
            </div>
        </div>
    )
}

export default ProjectCardList