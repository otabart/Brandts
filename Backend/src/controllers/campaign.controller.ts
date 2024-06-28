import { Request, Response } from "express";
import axios from "axios";
import CustomResponse from "../utils/helpers/response.util";
import HttpException from "../utils/helpers/httpException.util";
import { INTERNAL_SERVER_ERROR, OK } from "../utils/statusCodes.util";
import Campaign from "../services/campaign.service";
const CampaignService = new Campaign();

export default class CampaignController {

    async createCampaign(req: Request, res: Response) {

        try {

            const campaign = await CampaignService.create(req.body);

            return new CustomResponse(OK, true, "Campaign created successfully", res, campaign);

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async getACampaign(req: Request, res: Response) {

        try {

            const campaign = await CampaignService.findById(req.params.id)

            return new CustomResponse(OK, true, "Campaign fetched successfully", res, campaign);

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async getDashboardInfo(req: Request, res: Response) {

        try {

            const campaigns = await CampaignService.findByUserId(req.params.userId);

            const response = {
                details: {
                    totalCampaigns: campaigns.length,
                    totalSubmissions: 100,
                    trafficPercentage: 98,
                    totalBudgetSpent: campaigns.reduce((totalBudget, campaign) => {
                        return totalBudget + campaign.budget;
                    }, 0),
                    averageEngagementRate: 85,
                    activeCampaigns: (campaigns.filter(campaign => campaign.status === 'open')).length
                },
                campaigns: [
                    {
                        id: "1",
                        name: "Summer Product Launch",
                        submissions: 25,
                        likes: 500,
                        comments: 50,
                        shares: 30,
                        trafficGenerated: 3000,
                        budgetSpent: 2000,
                        engagementRate: 90,
                        isOpen: true
                    },
                    {
                        id: "2",
                        name: "Winter Collection",
                        submissions: 20,
                        likes: 400,
                        comments: 40,
                        shares: 25,
                        trafficGenerated: 2500,
                        budgetSpent: 1500,
                        engagementRate: 85,
                        isOpen: false
                    }, {
                        id: "3",
                        name: "Summer Product Launch",
                        submissions: 25,
                        likes: 500,
                        comments: 50,
                        shares: 30,
                        trafficGenerated: 3000,
                        budgetSpent: 2000,
                        engagementRate: 90,
                        isOpen: true
                    },
                    {
                        id: "4",
                        name: "Winter Collection",
                        submissions: 20,
                        likes: 400,
                        comments: 40,
                        shares: 25,
                        trafficGenerated: 2500,
                        budgetSpent: 1500,
                        engagementRate: 85,
                        isOpen: false
                    }
                ]
            }

            return new CustomResponse(OK, true, "Dashboard info fetched successfully", res, response);

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async getAllCampaign(req: Request, res: Response) {

        try {

            const campaigns = await CampaignService.findAll();

            return new CustomResponse(OK, true, "Dashboard info fetched successfully", res, campaigns);

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async submitCampaign(req: Request, res: Response) {

        try {

            const videoUrl = req.body;

            return new CustomResponse(OK, true, "Campaign submitted successfully", res, videoUrl);

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async disqualifyCreator(req: Request, res: Response) {

        try {

            const creatorId = req.params.creatorId;

            return new CustomResponse(OK, true, "Creator disqualified successfully", res, creatorId);

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async getTweetInfo(req: Request, res: Response) {

        try {

            const options = {
                method: 'GET',
                url: 'https://twitter154.p.rapidapi.com/tweet/details',
                params: { tweet_id: '1801556313182290422' },
                headers: {
                    'x-rapidapi-key': 'ca4c435548msh7f0ac0c59a0544bp14e220jsne5582a262ffd',
                    'x-rapidapi-host': 'twitter154.p.rapidapi.com'
                }
            };

            // "favorite_count": 42,
            // "retweet_count": 15,
            // "reply_count": 3,
            // "quote_count": 5,

            const { data } = await axios.request(options);

            return new CustomResponse(OK, true, "Info fetched", res, data);

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

}