import express from "express";
import { check } from "express-validator"
import userController from "../controllers/userController.js"

const { createUser, updateUser, deleteUser, getAllUsers, getUserInfo, login } = userController;

const userRouter = express.Router();

userRouter.route('/')
.get(getAllUsers)

userRouter.route('/register')
.post(createUser)


// userRouter.post('/registration', [
//     check("name", "Name field can't be empty").notEmpty(),
//     check("email", "Email field can't be empty").notEmpty()
//     .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).withMessage("Email format is invalid"),
//     check("password", "Password must be 6-15 symbols").notEmpty().isLength({min: 6, max: 15}),
// ], createUser)

userRouter.route('/login')
.post(login)

userRouter.route('/:id')
.get(getUserInfo)
.patch(updateUser)
.delete(deleteUser)

userRouter.route('/:id/profile')
.get(getUserInfo)

export default userRouter