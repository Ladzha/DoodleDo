import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Project name should be more than 3 symbols"],
        maxLength: [50, "Project name should be less than 50 symbols"]
    },
    description: {
        type: String,
        minlength: [3, "Project description should be more than 3 symbols"],
    },
    dashboardId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Dashboard",
        required: [true, "Please add dashboardId"]
    },
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
        required: [true, "Please add categoryId"]
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

projectSchema.virtual('tasks', {
    ref: "Task",
    localField: "_id",
    foreignField: "projectId",
    justOne: false
});

projectSchema.virtual('labels', {
    ref: "Label",
    localField: "_id",
    foreignField: "projectId",
    justOne: false
});

export default mongoose.model("Project", projectSchema)