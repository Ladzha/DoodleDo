import {useState, useEffect, useCallback} from 'react'
import Button from '../components/element/Button.jsx'
import TaskBlock from '../components/tasks/TaskBlock.jsx'
import ProjectBlock from '../components/projects/ProjectBlock.jsx'
import { dashboardService } from '../services/dashboard.service.js'

const Dashboard = ({}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchData = useCallback(async()=>{
        try {
            setError('')
            setLoading(true)
            const data = await dashboardService.getAllDashboards()
            setData(data)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)            
        }
    }, [])

    useEffect(()=>{
        fetchData()
    }, [fetchData])

  return (
    <section className='board'>
      <h2>What to do</h2>
      <TaskBlock/>
      <ProjectBlock/>
    </section>
  )
}

export default Dashboard