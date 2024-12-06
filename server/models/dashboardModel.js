import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User", 
        required: [true, "Please add user ID"]
    },
    categories: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: "Category", 
    },
})

export default mongoose.model("Dashboard", dashboardSchema)