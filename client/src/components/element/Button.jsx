const Button = ({message, className='', action=null, type='button'}) => {
  return (
    <button  type={type} className={`${className} button`} onClick={action}>{message}</button>
  )
}

export default Button