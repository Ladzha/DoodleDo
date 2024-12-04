import useFetch from '../../hooks/useFetch.js';
import Search from '../element/Search.jsx'
import CategoryList from './CategoryList.jsx'
import ProjectList from './ProjectList.jsx'
import LabelList from './LabelList.jsx'

const SideMenu = () => {
  const { data, loading, error } = useFetch("categories")
  return (
    <aside className='menuContainer'>
      <Search/>
      <CategoryList categories={data} loading={loading} error={error}/>
      <ProjectList projects={data} loading={loading} error={error}/>
      <LabelList labels={data} loading={loading} error={error}/>
    </aside>
  )
}

export default SideMenu