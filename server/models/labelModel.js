import mongoose from "mongoose";

const labelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dashboardId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Dashboard"
    },
    projectId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Project"
    },
    taskId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Task"
    },
}, {timestamps: false})

export default mongoose.model("Label", labelSchema)