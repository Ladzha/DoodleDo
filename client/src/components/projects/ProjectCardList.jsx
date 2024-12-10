import { useState } from 'react';
import ProjectCard from './ProjectCard.jsx'
import { dashboardService } from '../../services/dashboard.service.js';

const ProjectCardList = ({projects}) => {

    const [error, setError] = useState('')

    const handleProjectDone= async(projectId) =>{
        try {
            const newData = { isCompleted: true }
            console.log("handleProjectDone => ", projectId);
            // await dashboardService.updateProject(projectId, newData)
        } catch (error) {
            setError(error.message || 'Failed to update project')
            console.log('Failed to update project:', error.message)
        }    
    }
    
    const handleEditProject = async (projectId)=>{
        try {
            const newProject = 'test'
            console.log("handleEditProject => ", projectId, "newProject=>", newProject);
            // await dashboardService.updateProject(projectId, newData)
        } catch (error) {
            setError(error.message || 'Failed to update project')
            console.log('Failed to update project:', error.message)
        }
    }

    const handleDeleteProject = async (projectId)=>{
        try {
            console.log("handleDeleteProject => ", projectId);
            // await dashboardService.deleteProject(projectId)
        } catch (error) {
            setError(error.message || 'Failed to delete project')
            console.log('Failed to delete project:', error.message)
        }
    }
    
    return (
        <div className='projectCardContainer'>
            <h3 className='menuListName'>Projects</h3>
            <div className='projectWrapper'>
                {projects.map((project)=>(
                    <ProjectCard 
                        key={project._id} 
                        projectId={project._id} 
                        projectName={project.name} 
                        projectDescription={project.description}
                        onDone={handleProjectDone}
                        onEdit={handleEditProject}
                        onDelete={handleDeleteProject}/>))
                }
            </div>
        </div>
    )
}

export default ProjectCardList