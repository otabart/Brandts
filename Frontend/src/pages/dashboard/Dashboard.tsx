//Import Needed Components
import HeroSection from "../../components/HeroSection";
import DashboardDetails from "../../components/dashboard/DashboardDetails";
import DashboardSummary from "../../components/dashboard/DashboardSummary";
import Footer from "../../components/HomePage/Footer";

//Import Needed Images
import dashboardImage from "/images/dashboard.svg";

import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../api/Campaign";
import { useAccount } from "wagmi";



const Dashboard = () => {
    const account = useAccount();
    const [dashboard, setDashboard] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const dashboardData = await fetchDashboardData(account.address as string);
                setDashboard(dashboardData.data);
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
            <HeroSection imageUrl={dashboardImage} heading="Your Dashboard!" subHeading="Analytics and Reports!" />
            <DashboardSummary details={dashboard?.details} loading={loading} error={error} />
            {dashboard && dashboard.campaigns ? (
                dashboard?.campaigns.length > 0 ? (
                    <DashboardDetails dashboard={dashboard?.campaigns} />
                ) : (
                    <p style={{ marginTop: "10px" }} className="text-2xl md:text-4xl xl:text-6xl font-semibold text-center">
                        NO CAMPAIGN YET
                    </p>)
            ) : (
                <p>Loading campaign details...</p>
            )}
            <Footer />
        </main>
    );
}

export default Dashboard;