import useFetch from '../../hooks/useFetch.js';
import Search from '../element/Search.jsx'
import CategoryList from '../categories/CategoryList.jsx'
import ProjectList from '../projects/ProjectList.jsx'
import LabelList from '../labels/LabelList.jsx'
import primer from '../../api/defaultData.js';

const SideMenu = () => {
  const { data, loading, error } = useFetch("categories")  
  return (
    <aside className='menuContainer'>
      <Search/>
      <CategoryList categories={primer.categories} loading={loading} error={error}/>
      <ProjectList data={primer.categories} loading={loading} error={error}/>
      <LabelList data={primer.categories} loading={loading} error={error}/>
    </aside>
  )
}

export default SideMenu