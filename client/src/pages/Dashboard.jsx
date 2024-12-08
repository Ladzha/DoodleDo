import {useState, useEffect, useCallback, useContext} from 'react'
import Button from '../components/element/Button.jsx'
import Error from '../components/error/Error.jsx'
import Loader from '../components/loader/Loader.jsx'
import TaskBlock from '../components/tasks/TaskBlock.jsx'
import ProjectBlock from '../components/projects/ProjectBlock.jsx'
import { dashboardService } from '../services/dashboard.service.js'
import AuthModule from '../AuthContext.jsx';

const Dashboard = ({}) => {
    const { AuthContext , AuthProvider} = AuthModule
    const [dashboard, setDashboard] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const { userId } = useContext(AuthContext)

    console.log("userId from login fom Dashboard", userId);
    
    const fetchData = useCallback(async()=>{
        try {
            setError('')
            setLoading(true)
            const dashboardData = await dashboardService.getDashboard(userId)
            setDashboard(dashboardData)
        } catch (error) {
            setError(error.message || 'Failed to fetch dashboard')
        }finally{
            setLoading(false)            
        }
    }, [userId])

    useEffect(()=>{
      if(userId){
        fetchData()
      }
    }, [fetchData])
    
  return (
    <section className='board'>
      {/* {loading && <Loader/>}
      {error && <Error/>}
       */}
      {userId ? <>
      <h2>What to do</h2>
      <TaskBlock dashboard={dashboard}/>
      <ProjectBlock dashboard={dashboard}/></>: 
      <div>You are not login</div>}
    </section>
  )
}

export default Dashboard