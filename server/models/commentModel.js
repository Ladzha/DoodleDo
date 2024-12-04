import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minLength: 3,
    },
    taskId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Task",
        required: [true, "Please add taskId"]
    },
}, {timestamps: true});

export default mongoose.model("Comment", commentSchema)