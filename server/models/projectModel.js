import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
    },
    description: {
        type: String,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    },
    taskId: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: "Task"
    },
    labelId: {
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

export default mongoose.model("Project", projectSchema)