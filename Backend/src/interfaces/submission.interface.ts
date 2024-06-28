import { Document } from 'mongoose';

export default interface ICampaign extends Document {
    userId: string;
    submissionUrl: string;
}