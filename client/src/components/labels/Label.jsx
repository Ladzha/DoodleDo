
const Label = ({labelName, onClick}) => {
  return (
    <button className='labelName' onClick={onClick}>{labelName}</button>
  )
}

export default Label