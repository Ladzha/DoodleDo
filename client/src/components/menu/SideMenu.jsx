import Loader from '../loader/Loader.jsx';
import Search from '../element/Search.jsx'
import CategoryList from '../categories/CategoryList.jsx'
import ProjectList from '../projects/ProjectList.jsx'
import LabelList from '../labels/LabelList.jsx'

const SideMenu = ({
  categories, 
  projects, 
  labels, 
  onSelectCategory, 
  onSelectProject, 
  onSelectLabel}) => {

  return (
    <aside className='menuContainer'>
      <Search/>
      {categories.length > 0 ? 
      <CategoryList 
        categories={categories} 
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