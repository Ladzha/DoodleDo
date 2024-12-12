import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User", 
        required: [true, "Please add user ID"]
    }
},{
    timestamps: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

dashboardSchema.virtual('categories', {
    ref: "Category",
    localField: "_id",
    foreignField: "dashboardId",
    justOne: false
});

export default mongoose.model("Dashboard", dashboardSchema)