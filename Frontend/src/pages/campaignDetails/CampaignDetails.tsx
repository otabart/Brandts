//Import Needed Components
import HeroSection from "../../components/HeroSection";
import Details from "../../components/campaignDetails/Details";
import Submissions from "../../components/campaignDetails/Submissions";
import Footer from "../../components/HomePage/Footer";

//Import Needed Images
import viewImg from "/images/view.svg";
import viewImg1 from "/images/flipView.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { disqualifyCreator, fetchCampaignById, submitCampaign } from "../../api/Campaign";



const CampaignDetails = () => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const campaignData = await fetchCampaignById(id!);
                setCampaign(campaignData.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCampaign();
    }, [id]);

    const handleLinkSubmit = async (submissionLink: {}) => {
        try {
            await submitCampaign(submissionLink);
        } catch (error) {
            console.error('Error submitting link:', error);
        }
    };

    const handleDisqualify = async (submissionId: string) => {
        try {
            await disqualifyCreator(submissionId);
            setCampaign((prevCampaign: any) => ({
                ...prevCampaign,
                creatorDetails: prevCampaign.creatorDetails.filter(
                    (creator: any) => creator._id !== submissionId
                )
            }));
        } catch (error) {
            console.error('Error disqualifying creator:', error);
        }
    };

    return (
        <main>
            <HeroSection imageUrl={viewImg} imageUrl1={viewImg1} heading="Time to Shine!" subHeading="Showcase Your Creativity!" />
            <Details campaign={campaign?.campaignDetails} setCampaign={setCampaign} loading={loading} error={error} onSubmit={handleLinkSubmit} />
            {campaign && campaign.creatorDetails ? (
                campaign?.creatorDetails.length > 0 ? (
                    <Submissions campaigns={campaign?.creatorDetails} handleDisqualify={handleDisqualify} />
                ) : (
                    <p style={{ marginTop: "10px" }} className="text-2xl md:text-4xl xl:text-6xl font-semibold text-center">
                        NO SUBMISSION YET
                    </p>)
            ) : (
                <p>Loading creator details...</p>
            )}
            <Footer />
        </main>
    );
}

export default CampaignDetails;