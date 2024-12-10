import express from "express";
import { check } from "express-validator"
import userController from "../controllers/userController.js"
import authentication from "../controllers/authentication.js";
import authMiddleware from '../middleware/authMiddleware.js'


const { createUser, updateUser, deleteUser, getAllUsers, getUserInfo, login, logout, protectedRoute } = userController;

const { generateAccessToken, generateRefreshToken, verifyToken, refreshAccessToken} = authentication;

const userRouter = express.Router();

userRouter.route('/', authMiddleware)
.get(getAllUsers)

userRouter.post('/register', [
    check("name", "Name field can't be empty").notEmpty(),
    check("email", "Email field can't be empty").notEmpty()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).withMessage("Email format is invalid"),
], createUser)

userRouter.route('/login')
.post(login)

userRouter.route('/logout')
.post(logout)

userRouter.route('/:id', authMiddleware)
.get(getUserInfo)
.patch(updateUser)
.delete(deleteUser)

userRouter.route('/:id/profile', authMiddleware)
.get(getUserInfo)

userRouter.route('/refresh-token')
.post(refreshAccessToken)

userRouter.route('/protected', verifyToken)
.get(protectedRoute)


export default userRouter