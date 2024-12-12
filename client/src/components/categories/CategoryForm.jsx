import { useState } from 'react';
import { IoAdd } from "react-icons/io5";

const CategoryForm = ({onCreateCategory}) => {

    const [categoryName, setCategoryName] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        onCreateCategory(categoryName)
        setCategoryName('')
    }

  return (
    <div className='categoryFormContainer'>
    <form className='categoryForm' onSubmit={(event) => handleSubmit(event)}>
        <input 
            onChange={(event) => setCategoryName(event.target.value)}
            type="text" 
            className='categoryInput' 
            placeholder='Add a new category'
            minLength={2}
            value={categoryName}
        />
        <button type="submit" className='button'><IoAdd/>Add category</button>
    </form>
</div>
  )
}

export default CategoryForm