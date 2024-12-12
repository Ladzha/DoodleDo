import { useState } from 'react';
import { dashboardService } from '../../services/dashboard.service.js';
import Loader from '../loader/Loader.jsx';
import Search from '../element/Search.jsx';
import ProjectList from '../projects/ProjectList.jsx';
import LabelList from '../labels/LabelList.jsx';
import CategoryBlock from '../categories/CategoryBlock.jsx';

const SideMenu = ({
  dashboardId,
  categories, 
  projects, 
  labels, 
  onSelectCategory, 
  onSelectProject, 
  onSelectLabel}) => {

    const [error, setError] = useState('')

    const handleCreateCategory = async (categoryName)=>{
      try {
        if(categoryName){
          const newCategory = {
            name: categoryName, 
            dashboardId: dashboardId}

        console.log("newCategory => ", newCategory);
        
        await dashboardService.createCategory({
            name: categoryName, 
            dashboardId: dashboardId})
        }
      } catch (error) {
          setError(error.message || 'Category creation failed')
          console.log('Category creation failed:', error.message)
      }
  }

  return (
    <aside className='menuContainer'>
      <Search/> 
      <button type="button">❤️</button>
      {categories.length > 0 ? 
      <CategoryBlock 
        categories={categories}
        onCreateCategory={handleCreateCategory}
        onSelectCategory={onSelectCategory}/>
        :<Loader/>}
      {projects.length > 0  ? 
      <ProjectList projects={projects} 
        onSelectProject={onSelectProject}/>
        :<Loader/>}
      {labels.length > 0 ? 
      <LabelList labels={labels} 
      onSelectLabel={onSelectLabel}/>
      :<Loader/>}
    </aside>
  )
}

export default SideMenu