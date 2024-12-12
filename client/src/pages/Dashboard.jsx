import {useState, useEffect, useLayoutEffect, useCallback, useContext, useRef} from 'react'
import { dashboardService } from '../services/dashboard.service.js'
import Error from '../components/error/Error.jsx'
import Loader from '../components/loader/Loader.jsx'
import SideMenu from '../components/menu/SideMenu.jsx'
import Workspace from '../components/Workspace.jsx'
import AuthModule from '../AuthContext.jsx';

const Dashboard = () => {
    const { AuthContext , AuthProvider} = AuthModule  

    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')

    const [dashboardData, setDashboardData] = useState(null)
    const [categories, setCategories] = useState([
      {_id: '6755e70d4f0ad33d30862c24', name: "category1"}, 
      {_id: '6755e70d4f0ad33d30862c30', name: "category2"}])
    const [projects, setProjects] = useState([
      {_id: 1, name: "project1", categoryId: '6755e70d4f0ad33d30862c30'}, 
      {_id: 2, name: "project2", categoryId: '6755e70d4f0ad33d30862c30'},
      {_id: 3, name: "project3", categoryId: '6755e70d4f0ad33d30862c24'}])
    const [tasks, setTasks] = useState([
      {_id: 1, name: "task1", categoryId: '6755e70d4f0ad33d30862c24', projectId:1, comment: "comment1"}, 
      {_id: 2, name: "task2", categoryId: '6755e70d4f0ad33d30862c24', projectId: 1},
      {_id: 3, name: "task3", categoryId: '6755e70d4f0ad33d30862c24', projectId: 2},
      {_id: 4, name: "task4", categoryId: '6755e70d4f0ad33d30862c24', projectId: 2, comment: "comment2"},
      {_id: 5, name: "task5", categoryId: '6755e70d4f0ad33d30862c30', projectId: 1},
      {_id: 6, name: "task6", categoryId: '6755e70d4f0ad33d30862c30', projectId: 1},
      {_id: 7, name: "task7", categoryId: '6755e70d4f0ad33d30862c30', projectId: 2, comment: "comment3"},
      {_id: 8, name: "task8", categoryId: '6755e70d4f0ad33d30862c30', projectId: 3},
      {_id: 9, name: "task9", categoryId: '6755e70d4f0ad33d30862c30', projectId: 3, comment: "comment4"}
    ])
    const [labels, setLabels] = useState([{_id: 1, name: "label1"}, {_id: 2, name: "label2"}])

    const [selectedCategoryId, setSelectedCategoryId] = useState(null)
    const [selectedProjectId, setSelectedProjectId] = useState(null)
    const [selectedLabelId, setSelectedLabelId] = useState(null)

    // const { userId } = useContext(AuthContext)
    const userId = "675ae0bdac66f0ba1cea91b1"
    const dashboardId = useRef(null)

    // console.log("userId from login fom Dashboard", userId);

    const handleSelectCategory=(categoryId)=>{
      setSelectedCategoryId(categoryId)
      setSelectedProjectId(null)
      console.log('Selected category', categoryId);
    }
    const handleSelectProject=(projectId)=>{
      setSelectedProjectId(projectId)
      console.log('Selected project', projectId);
    }
    const handleSelectLabel=(labelId)=>{
      setSelectedLabelId(labelId)
      console.log('Selected label', labelId);
    }
    
    const fetchData = useCallback(async()=>{
        try {
            setError('')
            setLoading(true)
            const dashboardData = await dashboardService.getDashboard(userId)
            if(dashboardData){
              setDashboardData(dashboardData)
              setCategories(dashboardData.categories)
              if(dashboardData._id){
                dashboardId.current = dashboardData._id
                console.log("dashboardData =>", dashboardData);
                const categoriesData = await dashboardService.getAllCategories()
                console.log("categoriesData =>", categoriesData);
              }
            }
        } catch (error) {
            setError(error.message || 'Failed to fetch dashboard')
        }finally{
          console.log('I am fetching data');
          setLoading(false)            
        }
    }, [userId])

    useLayoutEffect(()=>{
      if(userId){
        fetchData()        
      }
    }, [])

    useEffect(()=>{
        console.log("dashboardData =>", dashboardData);
        console.log("dashboardData categories =>", categories);
        console.log("dashboardData categories =>", categories[0].name);
    }, [])

    if(!dashboardData){
      return <Loader/>
    }

    
  return (
    <main className='container'>   
      {loading && <Loader/>}
      {error && <Error/>}
      {dashboardId.current ?
      <>
      <SideMenu 
        dashboardId={dashboardId.current} 
        categories={categories} 
        projects={projects}
        labels={labels}
        onSelectCategory={handleSelectCategory}
        onSelectProject={handleSelectProject}
        onSelectLabel={handleSelectLabel} />
      <Workspace 
        projects={projects}
        tasks={tasks}
        dashboardId={dashboardId.current} 
        selectedCategoryId={selectedCategoryId}
        selectedProjectId={selectedProjectId}
        selectedLabelId={selectedLabelId}/>
        </> : 
      <h2>You are not login</h2>}
    </main>
  )
}

export default Dashboard