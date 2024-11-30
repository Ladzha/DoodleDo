import express from "express";
import dashboardController from '../controllers/dashboardController.js';

const { getDashboard, createDashboard } = dashboardController;

const dashboardRouter = express.Router()

dashboardRouter.route('/')
.get(getDashboard)
.post(createDashboard)

export default dashboardRouter