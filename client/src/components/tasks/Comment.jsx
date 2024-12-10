import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Comment = ({comment, onEdit, onDelete}) => {
  return (
    <div className="commentElement">
        <div className="commentText">{comment}</div>
        <button type="button" className="button" onClick={onEdit}><CiEdit/></button>
        <button type="button" className="button" onClick={onDelete}><MdOutlineDelete/></button>
    </div>
  )
}

export default Comment