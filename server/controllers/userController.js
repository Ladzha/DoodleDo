import bcrypt from "bcrypt";
import fs from "fs/promises";
import authentication from "./authentication.js";
import errorHandler from '../config/errorHandler.js';
import UserModel from '../models/userModel.js'; 
import DashboardModel from "../models/dashboardModel.js";
import CategoryModel from "../models/categoryModel.js";
import ProjectModel from "../models/projectModel.js";
import TaskModel from "../models/taskModel.js";
import LabelModel from "../models/labelModel.js";
import dashboardController from '../controllers/dashboardController.js';


const { generateAccessToken, generateRefreshToken} = authentication
const { getDashboard, createDashboard } = dashboardController

async function getAllUsers(req, res){
    try {     
        const users = await UserModel.find()
        .populate({ 
            path: 'dashboard', 
            populate: {
                path: 'categories', 
                select: 'name'
            }
        });
        if(!users.length) return errorHandler(res, 404, "Users not found" )
        res.status(200).json(users)        
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch users")
    }
}

async function getUserInfo(req, res){
    try {
        const userId = req.params.id
        if(!userId) return errorHandler(res, 400, "Invalid ID")
        const user = await UserModel.findById(userId).populate({ 
            path: 'dashboard',
            populate: {
                path: 'categories',
                populate: {
                    path: 'projects',
                    populate: {
                        path: 'tasks',
                        populate: {
                            path: 'labels'
                        }
                    }
                },
                populate: {
                    path: 'tasks',
                    populate: {
                        path: 'labels'
                    }
                },
            },
        })
        if (!user) return errorHandler(res, 404, "User not found");
        res.status(200).json(user)        
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch user")
    }
}

async function getUserProfile(req, res){
    try {
        const userId = req.params.id
        if(!userId) return errorHandler(res, 400, "Invalid ID")
        const user = await UserModel.findById(userId)
        res.status(200).json(user)        
        console.log("Fetching user by ID");  
    } catch (error) {
        errorHandler(res, 500, "Failed to fetch user")
    }
}

async function createUser(req, res){
    try {
        let { username, email, password } = req.body
        if(!username || !email || !password) return errorHandler(res, 400, "Invalid data")
        email = email.toLowerCase()
        const userCandidate = await UserModel.findOne({email})
        if(userCandidate) return errorHandler(res, 400, `User with email ${email} already exist`)
        const saltRounds = 5;
        const hashPassword = bcrypt.hashSync(password, saltRounds)
        const newUser = await UserModel.create({username, email, password: hashPassword})
        
        //creating dashboard with template data
        const template = JSON.parse(
            await fs.readFile('./data/defaultData.json')
        );      

        const newDashboard = await createDashboard(newUser._id, template)
        newUser.dashboard = newDashboard
        await newUser.save()

        res.status(201).json({
            message: "New user successfully created",
            newUser: newUser,
            newDashboard: newDashboard
        }) 
    } catch (error) {
        errorHandler(res, 400, "Failed to create user")
    }
}

async function updateUser(req, res){
    try {
        const userId = req.params.id
        if(!userId) return errorHandler(res, 400, "Invalid ID")
        const newData = req.body
        if(!newData) return errorHandler(res, 400, "Invalid data format")
        const updatedUser = await UserModel.findByIdAndUpdate(userId, newData)    
        res.status(200).json({
            message: `User with ID: ${userId} successfully updated.`, 
            user: updatedUser}) 
    } catch (error) {
        errorHandler(res, 500, "Failed to update user")
    }
}

async function deleteUser(req, res){
    try {
        const userId = req.params.id
        if(!userId) return errorHandler(res, 400, "Invalid ID")
        const userDashboard = await DashboardModel.findOne({ userId });

        if (userDashboard) {
            await LabelModel.deleteMany({ dashboardId: userDashboard._id });
            await TaskModel.deleteMany({ dashboardId: userDashboard._id });
            await ProjectModel.deleteMany({ dashboardId: userDashboard._id });
            await CategoryModel.deleteMany({ dashboardId: userDashboard._id });
            await DashboardModel.deleteOne({ _id: userDashboard._id });
        }

        await UserModel.findOneAndDelete(userId)

        res.status(200).json({
            message: `User with ID: ${userId} and related data successfully deleted.`})  
    } catch (error) {
        console.error("Error deleting user:", error);
        errorHandler(res, 400, "Failed to delete user")
    }
}

async function login(req, res){
    try {
        let { email, password } = req.body
        if(!email || !password) return errorHandler(res, 400, "Invalid data")
        email = email.toLowerCase();

        console.log("FROM SERVER email =>", email, "password=>", password);

        const userCandidate = await UserModel.findOne({ email })
        console.log("userCandidate=>", userCandidate);
        if(!userCandidate) return errorHandler(res, 400, `User with email ${email} doesn't exist`)
        const validPassword = bcrypt.compareSync(password, userCandidate.password)
        console.log("validPassword =>", validPassword);
        if(!validPassword) return errorHandler(res, 400, "Incorrect password")
        const accessToken = generateAccessToken(userCandidate._id, userCandidate.email)
        const refreshToken = generateRefreshToken(userCandidate._id, userCandidate.email)

        res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: false }); 

        res.status(200).json({
            message: `Welcome ${userCandidate.username}`,
            accessToken: accessToken,
            refreshToken: refreshToken
        })        
    } catch (error) {
        errorHandler(res, 500, "Failed to login")
    }
}

async function logout(req, res){
    try {
        res.status(200).json({
            message: `You are logout`,
        })        
    } catch (error) {
        errorHandler(res, 500, "Failed to logout")
    }
}

async function protectedRoute(req, res){
    try {
        res.json({ message: 'Welcome to the protected route!' });
    } catch (error) {
        errorHandler(res, 500, "Failed to rich protected route")
    }
}

export default { createUser, updateUser, deleteUser, getAllUsers, getUserInfo, login, logout, protectedRoute }
