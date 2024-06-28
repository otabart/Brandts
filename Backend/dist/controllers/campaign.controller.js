"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const response_util_1 = __importDefault(require("../utils/helpers/response.util"));
const httpException_util_1 = __importDefault(require("../utils/helpers/httpException.util"));
const statusCodes_util_1 = require("../utils/statusCodes.util");
class CampaignController {
    createCampaign(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const campaign = req.body;
                return new response_util_1.default(statusCodes_util_1.OK, true, "Campaign created successfully", res, campaign);
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    getACampaign(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new response_util_1.default(statusCodes_util_1.OK, true, "Campaign fetched successfully", res, {
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
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    submitCampaign(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videoUrl = req.body;
                return new response_util_1.default(statusCodes_util_1.OK, true, "Campaign submitted successfully", res, videoUrl);
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    disqualifyCreator(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const creatorId = req.params.creatorId;
                return new response_util_1.default(statusCodes_util_1.OK, true, "Creator disqualified successfully", res, creatorId);
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    getDashboardInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new response_util_1.default(statusCodes_util_1.OK, true, "Dashboard info fetched successfully", res, {
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
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    getAllCampaign(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new response_util_1.default(statusCodes_util_1.OK, true, "Dashboard info fetched successfully", res, [{
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
                    }, {
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
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
    getTweetInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const { data } = yield axios_1.default.request(options);
                return new response_util_1.default(statusCodes_util_1.OK, true, "Info fetched", res, data);
            }
            catch (error) {
                if (error instanceof httpException_util_1.default) {
                    return new response_util_1.default(error.status, false, error.message, res);
                }
                return new response_util_1.default(statusCodes_util_1.INTERNAL_SERVER_ERROR, false, `Error: ${error.message}`, res);
            }
        });
    }
}
exports.default = CampaignController;
