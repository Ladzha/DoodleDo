import {useState, useEffect, useCallback} from 'react'
import useFetch from '../hooks/useFetch.js'
import Button from '../components/element/Button.jsx'
import TaskBlock from '../components/tasks/TaskBlock.jsx'
import ProjectBlock from '../components/projects/ProjectBlock.jsx'
import primer from '../api/defaultData.js'
import { dashboardService } from '../services/dashboard.service.js'

const Dashboard = ({}) => {

  const { data, loading, error } = useFetch("categories")  

  const dashboard = dashboardService.getDashboard('67535d3c5fd2bc20c4fdef93')
  console.log("dashboard=> ", dashboard);

  const categories = dashboardService.getAllCategories()
  console.log("categories=> ", categories);

  const projects = dashboardService.getAllProjects()
  console.log("projects=> ", projects);

  const tasks = dashboardService.getAllTasks()
  console.log("tasks=> ", tasks);

  const labels = dashboardService.getAllLabels()
  console.log("labels=> ", labels);

  

  return (
    <section className='board'>
      <h2>What to do</h2>
      <TaskBlock primer={primer} loading={loading} error={error}/>
      <ProjectBlock  primer={primer} loading={loading} error={error}/>
    </section>
  )
}

export default Dashboard