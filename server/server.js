import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import errorHandlerMiddleWare from "./middleware/errorHandlerMiddleware.js";
import dashboardRouter from "./routes/dashboardRoute.js"
import categoryRouter from "./routes/categoryRoute.js";
import projectRouter from "./routes/projectRoute.js"
import taskRouter from "./routes/taskRoute.js";
import labelRouter from "./routes/labelRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL
const { errorHandlerMid } = errorHandlerMiddleWare

const app = express();
app.use(cors())
app.use(express.json()) //Body parser middleware include in express. For row json
app.use(express.urlencoded({extended: false })) //For urlencoded form data

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((error) => console.error("MongoDB connection error:", error.message));

const mongoDB = mongoose.connection;

mongoDB.on('error', (error) => {
    console.log(error.message)
})

mongoDB.once("open", () => {
    console.log("Server successfully connected to MongoDB");  
})

app.get("/", ((req, res) => {
    res.json("Welcome to DoodleDo api")
}))

app.use('/api/users', userRouter)
app.use('/api/dashboard', dashboardRouter)
app.use('/api/categories', categoryRouter)
app.use('/api/projects', projectRouter)
app.use('/api/tasks', taskRouter)
app.use('/api/labels', labelRouter)


app.use(errorHandlerMid)//????


app.listen(PORT || 3001, ((error) => {
    error ? console.log(`Server error ${error}`) : console.log(`Server is running on port ${PORT}`);
}))