import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md"
import { IoAdd } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FaRegCommentAlt } from "react-icons/fa";



const ProjectButtonsBlock = ({onDone, onEdit, onDelete}) => {

    return (
        <div className="taskButtonContainer">
            <button type="button" className="taskButton" onClick={(projectId) => onDone(projectId)}><MdDownloadDone/></button>
            <button type="button" className="taskButton" onClick={(projectId) => onEdit(projectId)}><CiEdit/></button>
            <button type="button" className="taskButton" onClick={(projectId) => onDelete(projectId)}><MdOutlineDelete/></button>
        </div>
    )
}

export default ProjectButtonsBlock

