//Import Needed Components
import DashboardCard from "./DashboardCard";

//Import Needed Icons
import { Activity, ArchiveAdd, Chart2, Link21, MoneySend, TransmitSquare } from "iconsax-react";


const DashboardSummary: React.FC<any> = ({ details, loading, error }) => {
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error.toString()}</p>;
    }

    if (!details) {
        return <p>No campaign found</p>;
    }


    return (
        <section className="py-5 md:py-10 lg:py-20 px-5 sm:px-10 md:px-15 xl:px-20">
            <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium">Your Reports</p>
            <main className="text-xs md:text-sm xl:text-base mt-10">
                <div className="flex flex-wrap gap-4 mt-10">
                    <DashboardCard icon={<ArchiveAdd size="32" variant="Bold" className="text-[#1da1f2]" />} amount={details.totalCampaigns} color="text-[#1da1f2]" text="Total Campaigns" otherClass="border-[#1da1f2]" />
                    <DashboardCard icon={<Link21 size="32" variant="Bold" className="text-[#fc9b24]" />} amount={details.totalSubmissions} color="text-[#fc9b24]" text="Total Submissions" otherClass="border-[#fc9b24]" />
                    <DashboardCard icon={<TransmitSquare size="32" variant="Bold" className="text-[#34d173]" />} amount={details.trafficPercentage} color="text-[#34d173]" text="Traffic Generated" otherClass="border-[#34d173]" />
                    <DashboardCard icon={<MoneySend size="32" variant="Bold" className="text-[#fc5959]" />} amount={details.totalBudgetSpent} color="text-[#fc5959]" text="Total Budget Spent" otherClass="border-[#fc5959]" />
                    <DashboardCard icon={<Chart2 size="32" variant="Bold" className="text-[#3248f2]" />} amount={details.averageEngagementRate} color="text-[#3248f2]" text="Engagement Rate" otherClass="border-[#3248f2]" />
                    <DashboardCard icon={<Activity size="32" variant="Bold" className="text-[#F3CA52]" />} amount={details.activeCampaigns} color="text-[#F3CA52]" text="Active Campaigns" otherClass="border-[#F3CA52]" />
                </div>
            </main>
        </section>

    );
}

export default DashboardSummary;
