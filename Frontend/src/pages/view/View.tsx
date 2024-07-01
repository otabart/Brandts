//Import Needed Components
import HeroSection from "../../components/HeroSection";
import Campaign from "../../components/view/Campaign";
import Footer from "../../components/HomePage/Footer";

//Import Needed Images
import viewImg from "/images/view.svg";
import viewImg1 from "/images/flipView.svg";
import { useEffect, useState } from "react";
import { fetchCampaigns } from "../../api/Campaign";



const View = () => {
    const [campaigns, setCampaigns] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const campaignData = await fetchCampaigns();
                setCampaigns(campaignData.data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCampaign();
    }, []);


    return (
        <main>
            <HeroSection imageUrl={viewImg} imageUrl1={viewImg1} heading="Time to Shine!" subHeading="Showcase Your Creativity!" />
            <Campaign campaigns={campaigns} loading={loading} error={error} />
            <Footer />
        </main>
    );
}

export default View;