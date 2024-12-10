import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";

const TaskButtonsBlock = ({onEdit, onDelete, toggleComment}) => {

  return (
    <div className="taskButtonContainer">
      <button type="button" className="taskButton" onClick={(taskId) => onEdit(taskId)}><CiEdit/></button>
      <button type="button" className="taskButton" onClick={(taskId) => onDelete(taskId)}><MdOutlineDelete/></button>
      <button type="button" className="taskButton" onClick={()=>toggleComment()}><FaRegCommentAlt/></button>
    </div>
  )
}

export default TaskButtonsBlock

