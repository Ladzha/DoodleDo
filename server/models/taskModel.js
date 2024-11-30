import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
    },
    description: {
        type: String,
    },
    comments: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: "Comment"
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    },
    projectId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Project"
    },
    labelIds: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: "Label"
    },
    isCompleted: {
        type: Boolean,
    },
    completedAt: {
        type: Date,
        default: null
    },
    deadlineAt: {
        type: Date,
        default: null
    },
    files: {
        type: [ String ],
    },
    images: {
        type: [ String ],
    }
}, {timestamps: true})

export default mongoose.model("Task", taskSchema)