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
        ref: "User",
        required: [true, "Please add userId"]
    },
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
        required: [true, "Please add categoryId"]
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