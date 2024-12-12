import CategoryButtonBlock from "./CategoryButtonBlock.jsx"

const Category = ({categoryName, onClick, onEdit, onDelete}) => {
  
  return (
    <div className='categoryElement'>
        <button className='categoryName' onClick={onClick}>{categoryName}</button>
        <CategoryButtonBlock onEdit={onEdit} onDelete={onDelete}/>
    </div>
  )
}

export default Category