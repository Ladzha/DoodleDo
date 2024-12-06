import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add an username'],
        minLength: 3,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minLength: 10,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    dashboard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dashboard"
    }
},  {timestamps: true})

export default mongoose.model("User", userSchema)