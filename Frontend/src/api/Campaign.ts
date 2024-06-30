import axios from 'axios';

const API_URL = 'https://brandts-backend.vercel.app/api/v1';

export const createCampaign = (campaignData: {}) => {
    return axios.post(`${API_URL}/campaign`, campaignData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const fetchCampaigns = async () => {
    try {
        const response = await axios.get(`${API_URL}/campaign/`);
        return response.data;
    } catch (error: any) {
        throw error.response.data.error || 'Error fetching campaigns';
    }
};

export const fetchCampaignById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/campaign/${id}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data.error || 'Error fetching campaign';
    }
};

export const closeCampaignById = async (id: string) => {
    try {
        const response = await axios.patch(`${API_URL}/campaign/${id}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data.error || 'Error closing campaign';
    }
};

export const deleteCampaignById = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/campaign/${id}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data.error || 'Error closing campaign';
    }
};

export const submitCampaign = (data: {}) => {
    return axios.post(`${API_URL}/submission`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const disqualifyCreator = (submissionId: string) => {
    return axios.delete(`${API_URL}/submission/${submissionId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const fetchDashboardData = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/campaign/dashboard/${userId}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data.error || 'Error fetching campaign';
    }
};