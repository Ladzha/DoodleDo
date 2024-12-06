import express from "express";
import dashboardController from '../controllers/dashboardController.js';

const { getAllDashboards, getDashboard, createDashboard } = dashboardController;

const dashboardRouter = express.Router()

dashboardRouter.route('/')
.get(getAllDashboards)
.post(createDashboard)

dashboardRouter.route('/:userId')
.get(getDashboard)

export default dashboardRouter