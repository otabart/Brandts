import { Request, Response } from "express";
import axios from "axios";
import CustomResponse from "../utils/helpers/response.util";
import HttpException from "../utils/helpers/httpException.util";
import { INTERNAL_SERVER_ERROR, OK } from "../utils/statusCodes.util";

export default class CampaignController {

    async createCampaign(req: Request, res: Response) {

        try {

            const campaign = req.body;

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

            return new CustomResponse(OK, true, "Campaign fetched successfully", res, {
                campaignDetails: {
                    title: "SAVLMS",
                    image: null,
                    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                    goal: 'To publicize savlms',
                    startDate: "Sat, 19th June, 2024",
                    duration: '3 days',
                    budget: '14000 USDT',
                    requirement: '3 mins video',
                    targetAudience: 'Adult',
                    app: 'Instagram',
                    additionalLink: 'https://www.instagram.com',
                    isOpen: true
                },
                creatorDetails: [
                    {
                        "id": "c1",
                        "name": "John Doe",
                        "email": "john@example.com",
                        "address": "123 Main St, Anytown, USA",
                        "link": "https://youtube.com/watch?v=abcd1234",
                        "likes": 150,
                        "comments": 20,
                        "shares": 10
                    },
                    {
                        "id": "c2",
                        "name": "Jane Smith",
                        "email": "jane@example.com",
                        "address": "456 Elm St, Othertown, USA",
                        "link": "https://youtube.com/watch?v=wxyz5678",
                        "likes": 200,
                        "comments": 30,
                        "shares": 15
                    },
                    {
                        "id": "c3",
                        "name": "Alice Johnson",
                        "email": "alice@example.com",
                        "address": "789 Oak St, Sometown, USA",
                        "link": "https://youtube.com/watch?v=hijk9012",
                        "likes": 100,
                        "comments": 10,
                        "shares": 5
                    }
                ]
            });

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

    async getDashboardInfo(req: Request, res: Response) {

        try {

            return new CustomResponse(OK, true, "Dashboard info fetched successfully", res, {
                details: {
                    totalCampaigns: 20,
                    totalSubmissions: 100,
                    trafficPercentage: 98,
                    totalBudgetSpent: 50000,
                    averageEngagementRate: 85,
                    activeCampaigns: 2
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
            });

        } catch (error: any) {

            if (error instanceof HttpException) {

                return new CustomResponse(error.status, false, error.message, res);

            }
            return new CustomResponse(INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
        }
    }

    async getAllCampaign(req: Request, res: Response) {

        try {

            return new CustomResponse(OK, true, "Dashboard info fetched successfully", res, [{
                title: "SAVLMS",
                image: null,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                goal: 'To publicize savlms',
                startDate: "Sat, 19th June, 2024",
                duration: '3 days',
                budget: '14000 USDT',
                requirement: '3 mins video',
                targetAudience: 'Adult',
                app: 'Instagram',
                additionalLink: 'https://www.instagram.com',
                isOpen: true
            },{
                title: "SAVLMS",
                image: null,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                goal: 'To publicize savlms',
                startDate: "Sat, 19th June, 2024",
                duration: '3 days',
                budget: '14000 USDT',
                requirement: '3 mins video',
                targetAudience: 'Adult',
                app: 'Instagram',
                additionalLink: 'https://www.instagram.com',
                isOpen: true
            },{
                title: "SAVLMS",
                image: null,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                goal: 'To publicize savlms',
                startDate: "Sat, 19th June, 2024",
                duration: '3 days',
                budget: '14000 USDT',
                requirement: '3 mins video',
                targetAudience: 'Adult',
                app: 'Instagram',
                additionalLink: 'https://www.instagram.com',
                isOpen: true
            },{
                title: "SAVLMS",
                image: null,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                goal: 'To publicize savlms',
                startDate: "Sat, 19th June, 2024",
                duration: '3 days',
                budget: '14000 USDT',
                requirement: '3 mins video',
                targetAudience: 'Adult',
                app: 'Instagram',
                additionalLink: 'https://www.instagram.com',
                isOpen: true
            },{
                title: "SAVLMS",
                image: null,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                goal: 'To publicize savlms',
                startDate: "Sat, 19th June, 2024",
                duration: '3 days',
                budget: '14000 USDT',
                requirement: '3 mins video',
                targetAudience: 'Adult',
                app: 'Instagram',
                additionalLink: 'https://www.instagram.com',
                isOpen: true
            },{
                title: "SAVLMS",
                image: null,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                goal: 'To publicize savlms',
                startDate: "Sat, 19th June, 2024",
                duration: '3 days',
                budget: '14000 USDT',
                requirement: '3 mins video',
                targetAudience: 'Adult',
                app: 'Instagram',
                additionalLink: 'https://www.instagram.com',
                isOpen: true
            },{
                title: "SAVLMS",
                image: null,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                goal: 'To publicize savlms',
                startDate: "Sat, 19th June, 2024",
                duration: '3 days',
                budget: '14000 USDT',
                requirement: '3 mins video',
                targetAudience: 'Adult',
                app: 'Instagram',
                additionalLink: 'https://www.instagram.com',
                isOpen: true
            },{
                title: "SAVLMS",
                image: null,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                goal: 'To publicize savlms',
                startDate: "Sat, 19th June, 2024",
                duration: '3 days',
                budget: '14000 USDT',
                requirement: '3 mins video',
                targetAudience: 'Adult',
                app: 'Instagram',
                additionalLink: 'https://www.instagram.com',
                isOpen: true
            },{
                title: "SAVLMS",
                image: null,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                goal: 'To publicize savlms',
                startDate: "Sat, 19th June, 2024",
                duration: '3 days',
                budget: '14000 USDT',
                requirement: '3 mins video',
                targetAudience: 'Adult',
                app: 'Instagram',
                additionalLink: 'https://www.instagram.com',
                isOpen: true
            },{
                title: "SAVLMS",
                image: null,
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur facilis dolores iusto harum quia rem, ipsum reprehenderit provident. Ipsa rerum ea deserunt veritatis explicabo repellendus eveniet numquam. Eaque, mollitia nemo.",
                goal: 'To publicize savlms',
                startDate: "Sat, 19th June, 2024",
                duration: '3 days',
                budget: '14000 USDT',
                requirement: '3 mins video',
                targetAudience: 'Adult',
                app: 'Instagram',
                additionalLink: 'https://www.instagram.com',
                isOpen: true
            }]);

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