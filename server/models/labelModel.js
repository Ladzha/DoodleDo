import mongoose from "mongoose";

const labelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    projectId: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: "Project"
    },
    taskId: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: "Task"
    },
})

export default mongoose.model("Label", labelSchema)