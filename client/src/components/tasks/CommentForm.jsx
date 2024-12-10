import {useState} from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbCancel } from "react-icons/tb";

const CommentForm = ({onAddComment, toggleComment}) => {

    const[comment, setComment] = useState('')

    const handleSubmit = (event)=>{
        event.preventDefault()
        if(comment !==''){
            onAddComment(comment)
        }
    }

    const cancelAddComment=()=>{
        setComment('')
        toggleComment()
    }

  return (
    <form className='commentForm' onSubmit={(event) => handleSubmit(event)}>
        <input 
        onChange={(event) => setComment(event.target.value)}
        type="text" 
        className='projectInput' 
        placeholder='Add a comment' 
        value={comment}
        />
        <button type="submit" className='button'><IoIosAddCircleOutline/></button>
        <button type="button" className='button' onClick={cancelAddComment}><TbCancel/></button>
    </form>
  )
}

export default CommentForm