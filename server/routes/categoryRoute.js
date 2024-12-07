import express from "express";
import categoryController from "../controllers/categoryController.js";
import authMiddleware from '../middleware/authMiddleware.js'

const { createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryInfo } = categoryController;

const categoryRouter = express.Router();
categoryRouter.use(authMiddleware)

categoryRouter.route('/')
.get(getAllCategories)
.post(createCategory)

categoryRouter.route('/:id')
.get(getCategoryInfo)
.patch(updateCategory)
.delete(deleteCategory)

export default categoryRouter;