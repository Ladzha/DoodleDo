import Category from '../categories/Category.jsx';
import Loader from '../loader/Loader.jsx';
import Error from '../error/Error.jsx';

const CategoryList = ({categories, loading, error}) => {
    
  return (
    <section className='menuSection'>
      <h3 className='menuListName'>Categories</h3>
      <article className='menuListContainer'>
        {/* {loading && <Loader/>}
        {error && <Error/>} */}
        {categories && categories.map((category)=>(
            <Category key={category._id} categoryName={category.name}/>
          ))
        }
      </article>
    </section>
  )
}

export default CategoryList