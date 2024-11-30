import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    categoryId: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: "Category"
    },
    projectId: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: "Project"
    },
    taskId: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: "Task"
    },
    labelId: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: "Label"
    },

})

export default mongoose.model("Dashboard", dashboardSchema)