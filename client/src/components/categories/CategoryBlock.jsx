import CategoryList from "./CategoryList.jsx"
import CategoryForm from "./CategoryForm.jsx"

const CategoryBlock = ({categories, onCreateCategory, onSelectCategory}) => {

  return (
    <article className="categoryContainer">
        {categories.length > 0 ? 
        <CategoryList categories={categories} onSelectCategory={onSelectCategory}/>:null}
        <CategoryForm onCreateCategory = {onCreateCategory}/>
    </article>
  )
}

export default CategoryBlock