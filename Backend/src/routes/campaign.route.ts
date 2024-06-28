import express from 'express';
import UserController from '../controllers/campaign.controller';
const { createCampaign, getACampaign, getDashboardInfo } = new UserController();
const router = express.Router();

//create campaign
router.post("/", createCampaign);

//get a campaign details
router.get("/:id", getACampaign);

//get dashboard details
router.get("/all/:userId", getDashboardInfo);

export default router;