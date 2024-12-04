import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: [true, "Please add userId"],
    },
    name: {
        type: String,
        required: [true, "Please add a category name"],
        minLength: 1,
    },
},{
    timestamps: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

categorySchema.virtual('projects', {
    ref: "Project",
    localField: "_id",
    foreignField: "categoryId",
    justOne: false
});

categorySchema.virtual('tasks', {
    ref: "Task",
    localField: "_id",
    foreignField: "categoryId",
    justOne: false
});

export default mongoose.model("Category", categorySchema)