import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minLength: 3,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    taskId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Task",
        required: true
    },
    createdAt:{
        type: Date,
        default: () =>  Date.now(),
        immutable: true
    }, 
    updatedAt:{
        type: Date,
        default: () =>  Date.now()
    }, 
}, {timestamps: true});

export default mongoose.model("Comment", commentSchema)