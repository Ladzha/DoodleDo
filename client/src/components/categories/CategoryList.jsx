import { useState } from 'react';
import { dashboardService } from '../../services/dashboard.service.js';
import Category from '../categories/Category.jsx';

const CategoryList = ({categories, onSelectCategory}) => {

  const [error, setError] = useState('')

  const handleClick = (categoryId)=>{
    onSelectCategory(categoryId)
  }
  const handleEditCategory = async (categoryId)=>{
    try {
        const newProject = 'test'
        console.log("handleEditCategory => ", categoryId, "newCategory=>", newCategory);
        // await dashboardService.updateCategory(projectId, newData)
    } catch (error) {
        setError(error.message || 'Failed to update project')
        console.log('Failed to update project:', error.message)
    }
  }

  const handleDeleteCategory = async (categoryId)=>{
      try {
          console.log("handleDeleteCategory => ", categoryId);
          await dashboardService.deleteCategory(categoryId)
      } catch (error) {
          setError(error.message || 'Failed to delete category')
          console.log('Failed to delete category:', error.message)
      }
  }

  return (
    <section className='menuSection'>
      <h3 className='menuListName'>Categories</h3>
      <article className='menuListContainer'>
        {categories.map((category)=>(
            <Category 
            key={category._id} 
            categoryName={category.name} 
            onClick={()=>handleClick(category._id)}
            onEdit={handleEditCategory}
            onDelete={handleDeleteCategory}/>))
        }
      </article>
    </section>
  )
}
export default CategoryList