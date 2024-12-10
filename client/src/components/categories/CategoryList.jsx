import Category from '../categories/Category.jsx';

const CategoryList = ({categories, onSelectCategory}) => {

  const handleClick = (categoryId)=>{
    onSelectCategory(categoryId)
  }

  return (
    <section className='menuSection'>
      <h3 className='menuListName'>Categories</h3>
      <article className='menuListContainer'>
        {categories.map((category)=>(
            <Category 
            key={category._id} 
            categoryName={category.name} 
            onClick={()=>handleClick(category._id)}/>))
        }
      </article>
    </section>
  )
}
export default CategoryList