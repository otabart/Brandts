import axios from 'axios';

const API_URL = 'https://brandts-backend.vercel.app/api/v1';

export const createCampaign = (campaignData: {}) => {
    return axios.post(`${API_URL}/campaign`, { campaignData }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const fetchCampaignById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/campaign/${id}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data.error || 'Error fetching campaign';
    }
};

export const submitCampaign = (id: string, submissionUrl: string) => {
    return axios.post(`${API_URL}/campaign/${id}`, { submissionUrl }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const disqualifyCreator = (campaignId: string, creatorId: string) => {
    return axios.patch(`${API_URL}/campaign/${campaignId}/disqualify/${creatorId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const fetchDashboardData = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/campaign/all/${userId}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data.error || 'Error fetching campaign';
    }
};