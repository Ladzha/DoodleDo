import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User", 
        required: [true, "Please add user ID"]
    },
    categoryId: {
        type: [ mongoose.SchemaTypes.ObjectId ],
        ref: "Category", 
        // required: [true, "Please add category ID"]
    },
})

export default mongoose.model("Dashboard", dashboardSchema)