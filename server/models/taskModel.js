import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Project name should be more than 3 symbols"],
        maxLength: [50, "Project name should be less than 50 symbols"]
    },
    comment: {
        type: String,
        minlength: [2, "Project name should be more than 2 symbols"],
    },
    dashboardId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Dashboard",
        required: [true, "Please add dashboardId"]
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
        default: false
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

taskSchema.virtual('labels', {
    ref: "Label",
    localField: "_id",
    foreignField: "taskId",
    justOne: false
});

export default mongoose.model("Task", taskSchema)