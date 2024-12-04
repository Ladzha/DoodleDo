import express from "express";
import commentController from "../controllers/commentController.js";

const { createComment, updateComment, deleteComment, getAllComments } = commentController;

const commentRouter = express.Router();

commentRouter.route('/')
.get(getAllComments)
.post(createComment)

commentRouter.route('/:id')
.patch(updateComment)
.delete(deleteComment)

export default commentRouter;