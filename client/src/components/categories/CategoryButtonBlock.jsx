import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

const CategoryButtonBlock = ({onEdit, onDelete}) => {
  return (
    <div className="taskButtonContainer">
        <button type="button" className="taskButton" onClick={(projectId) => onEdit(projectId)}><CiEdit/></button>
        <button type="button" className="taskButton" onClick={(projectId) => onDelete(projectId)}><MdOutlineDelete/></button>
    </div>
  )
}

export default CategoryButtonBlock
