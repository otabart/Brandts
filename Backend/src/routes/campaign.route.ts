import express from 'express';
import UserController from '../controllers/campaign.controller';
const { createCampaign, getACampaign, submitCampaign, disqualifyCreator, getTweetInfo, getDashboardInfo } = new UserController();
const router = express.Router();

//create campaign
router.post("/", createCampaign);

//submit to campaign
router.post("/:id", submitCampaign);

//get a campaign details
router.get("/:id", getACampaign);

//get campaign info
router.get("/", getTweetInfo);

//disqualify a creator
router.patch("/:campaignId/disqualify/:creatorId", disqualifyCreator);

//get dashboard details
router.get("/all/:userId", getDashboardInfo);

export default router;