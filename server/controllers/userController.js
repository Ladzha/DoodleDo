import { validationResult } from "express-validator";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import authentication from "./authentication.js";
import errorHandler from '../config/errorHandler.js';
import UserModel from '../models/userModel.js';

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY
const { generateAccessToken, generateRefreshToken, authenticationToken, refreshAccessToken} = authentication

async function getAllUsers(req, res){
    try {     
        const users = await UserModel.find()
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
        const user = await UserModel.findById(userId)
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
        const accessToken = generateAccessToken(newUser._id, newUser.email)

        res.status(201).json({
            message: "New user successfully created",
            newUser: newUser,
            accessToken: accessToken
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
        await UserModel.findOneAndDelete(userId)
        res.status(200).json({
            message: `User with ID: ${userId} successfully deleted.`})  
    } catch (error) {
        errorHandler(res, 400, "Failed to delete user")
    }
}

async function login(req, res){
    try {
        let { email, password } = req.body
        if(!email || !password) return errorHandler(res, 400, "Invalid data")
        email = email.toLowerCase();
        console.log("email =>", email, "password=>", password);
        const userCandidate = await UserModel.findOne({ email })
        console.log("userCandidate=>", userCandidate);
        if(!userCandidate) return errorHandler(res, 400, `User with email ${email} doesn't exist`)
        const validPassword = bcrypt.compareSync(password, userCandidate.password)
        console.log("validPassword =>", validPassword);
        if(!validPassword) return errorHandler(res, 400, "Incorrect password")
        const accessToken = generateAccessToken(userCandidate._id, userCandidate.email)
        res.status(200).json({
            message: `Welcome ${userCandidate.username}`,
            accessToken: accessToken
            // refreshToken: refreshToken
        })        
    } catch (error) {
        errorHandler(res, 500, "Failed to login")
    }
}

export default { createUser, updateUser, deleteUser, getAllUsers, getUserInfo, login }
