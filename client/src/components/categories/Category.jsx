const Category = ({categoryName, onClick}) => {
  return (
    <button className='categoryName' onClick={onClick}>{categoryName}</button>
  )
}

export default Category