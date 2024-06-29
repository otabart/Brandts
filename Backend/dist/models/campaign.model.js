"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_config_1 = require("../configs/constants.config");
const campaignSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    goal: {
        type: String,
        trim: true
    },
    duration: {
        type: Number,
        trim: true
    },
    budget: {
        type: Number,
        trim: true
    },
    requirement: {
        type: String,
        trim: true
    },
    targetAudience: {
        type: String,
        trim: true
    },
    app: {
        type: String,
        trim: true
    },
    additionalLink: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ["open", "closed", "inProgress"]
    }
}, {
    strict: true,
    timestamps: true
});
const Campaign = (0, mongoose_1.model)(constants_config_1.DATABASES.CAMPAIGN, campaignSchema, constants_config_1.DATABASES.CAMPAIGN);
exports.default = Campaign;
