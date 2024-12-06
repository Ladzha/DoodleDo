const Input = ({placeholder, type='text', name ='', className = '', ...props}) => {
  return (
    <input type={type} name={name} className={`${className} input`} placeholder={placeholder}/>
  )
}

export default Input