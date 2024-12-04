import Category from '../Category.jsx';
import Loader from '../loader/Loader.jsx';
import Error from '../error/Error.jsx';

const CategoryList = ({categories, loading, error}) => {

  return (
    <section className='menuSection'>
      <h3 className='menuListName'>Categories</h3>
      <article className='menuListContainer'>
        {loading && <Loader/>}
        {error && <Error/>}
        {categories && 
          <ul className='list'>
              {categories.map((category) => (
                  <li key={category.id}><Category name={category.name}/>{category.id}</li>
              ))}
          </ul>
        }
      </article>
    </section>
  )
}

export default CategoryList