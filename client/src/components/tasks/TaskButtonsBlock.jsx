import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FaRegCommentAlt } from "react-icons/fa";

const TaskButtonsBlock = ({taskId}) => {


  return (
    <div className="taskButtonContainer">
      <button type="button" className="taskButton" onClick={(taskId) => handleEdit(taskId)}><CiEdit/></button>
      <button type="button" className="taskButton" onClick={(taskId) => handleDelete(taskId)}><MdOutlineDelete/></button>
      <button type="button" className="taskButton" onClick={(taskId) => handleComment(taskId)}><FaRegCommentAlt/></button>
    </div>
  )
}

export default TaskButtonsBlock

