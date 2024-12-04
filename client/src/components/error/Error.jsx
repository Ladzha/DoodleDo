import React from 'react'

const Error = ({message = "Oh no! Something went wrong!"}) => {
    return (
    <div className='error'>{message}</div>
    )
}

export default Error