"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const campaign_controller_1 = __importDefault(require("../controllers/campaign.controller"));
const { createCampaign, getACampaign, submitCampaign, disqualifyCreator, getTweetInfo, getDashboardInfo } = new campaign_controller_1.default();
const router = express_1.default.Router();
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
exports.default = router;
