import express from 'express';
import UserController from '../controllers/campaign.controller';
const { createCampaign, getACampaign, getAllCampaign, getDashboardInfo } = new UserController();
const router = express.Router();

//create campaign
router.post("/", createCampaign);

//get a campaign details
router.get("/:id", getACampaign);

//get all campaigns
router.get("/", getAllCampaign);

//get dashboard details
router.get("/dashboard/:userId", getDashboardInfo);

export default router;