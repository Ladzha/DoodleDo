import express from "express";
import categoryController from "../controllers/categoryController.js";

const { createCategory, updateCategory, deleteCategory, getAllCategories, getCategoryInfo, getCategoryWithContent } = categoryController;

const categoryRouter = express.Router();

categoryRouter.route('/')
.get(getAllCategories)
.post(createCategory)

categoryRouter.route('/:id')
.get(getCategoryInfo)
.patch(updateCategory)
.delete(deleteCategory)

categoryRouter.route('/:id/content')
.get(getCategoryWithContent)

export default categoryRouter;