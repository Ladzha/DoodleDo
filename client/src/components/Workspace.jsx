import { useState } from "react"
import { dashboardService } from "../services/dashboard.service"
import TaskBlock from "./tasks/TaskBlock"
import ProjectBlock from "./projects/ProjectBlock"

const Workspace = ({projects, tasks, dashboardId, selectedCategoryId=1, selectedProjectId, selectedLabelId}) => {

    const [error, setError] = useState('')

    const filteredProjects = selectedCategoryId 
    ? projects.filter((project) => project.categoryId===selectedCategoryId)
    : projects;
    const filteredTasks = tasks.filter((task) => {
        const matchesCategory = selectedCategoryId 
        ? task.categoryId === selectedProjectId 
        : true 
        const matchesProject = selectedProjectId 
        ? task.projectId === selectedProjectId 
        : true 
        return matchesCategory && matchesProject
    })

    
    const handleCreateTask = async (taskName)=>{
        try {
            const newTask = {
                name: taskName, 
                dashboardId: dashboardId, 
                categoryId: selectedCategoryId || 1, 
                projectId: selectedProjectId || null}
            
            console.log("newTask => ", newTask);

            // await dashboardService.createTask({
            //     name: taskName, 
            //     dashboardId: dashboardId, 
            //     categoryId: selectedCategoryId, 
            //     projectId: selectedProjectId || null
            // })
            
        }catch (error) {
            setError(error.message || 'Task creation failed')
            console.log('Task creation failed:', error.message)
        }
    }

    const handleCreateProject = async (projectName, projectDescription)=>{
        try {
            const newProject = {
                name: projectName, 
                description: projectDescription,
                dashboardId: dashboardId, 
                categoryId: selectedCategoryId || 1}

            console.log("newProject => ", newProject);
            
            // await dashboardService.createProject({
            //     name: projectName, 
            //     description: projectDescription,
            //     dashboardId: dashboardId, 
            //     categoryId: selectedCategoryId})

        } catch (error) {
            setError(error.message || 'Project creation failed')
            console.log('Project creation failed:', error.message)
        }
    }

    return (
        <section className='workspace'>
            <h2>My dashboard</h2>
            <ProjectBlock
                projects={filteredProjects}
                onCreateProject={handleCreateProject}  
            />
            <TaskBlock
                tasks={filteredTasks}
                onCreateTask={handleCreateTask}
            />
        </section>
    )
}

export default Workspace