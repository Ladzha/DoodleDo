import express from "express";
import labelController from "../controllers/labelController.js";

const { createLabel, updateLabel, deleteLabel, getAllLabels } = labelController;

const labelRouter = express.Router();

labelRouter.route('/')
.get(getAllLabels)
.post(createLabel)

labelRouter.route('/:id')
.patch(updateLabel)
.delete(deleteLabel)

export default labelRouter;