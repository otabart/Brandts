import axios from 'axios';

const API_URL = 'https://brandts-backend.vercel.app/';

export const createCampaign = (campaignData) => {
    return axios.post(`${API_URL}/campaign`, { campaignData }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const fetchCampaignById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/campaign/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data.error || 'Error fetching campaign';
    }
};

export const submitCampaign = (id, submissionUrl) => {
    return axios.post(`${API_URL}/campaign/${id}`, { submissionUrl }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const disqualifyCreator = (campaignId, creatorId) => {
    return axios.patch(`${API_URL}/campaign/${campaignId}/disqualify/${creatorId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const fetchDashboardData = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/campaign/all/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data.error || 'Error fetching campaign';
    }
};