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
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: [true, "Please add userId"]
    },
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    },
    projectId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Project"
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
    filesAndImages: {
        type: [ String ],
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})


taskSchema.virtual('comments', {
    ref: "Comment",
    localField: "_id",
    foreignField: "taskId",
    justOne: false
});

taskSchema.virtual('labels', {
    ref: "Label",
    localField: "_id",
    foreignField: "taskId",
    justOne: false
});

export default mongoose.model("Task", taskSchema)