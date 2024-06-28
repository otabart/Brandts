//Import Needed Components
import HeroSection from "../../components/HeroSection";
import DashboardDetails from "../../components/dashboard/DashboardDetails";
import DashboardSummary from "../../components/dashboard/DashboardSummary";
import Footer from "../../components/HomePage/Footer";

//Import Needed Images
import dashboard from "/images/dashboard.svg";



const Dashboard = () => {
    return ( 
        <main>
            <HeroSection imageUrl={dashboard} heading="Your Dashboard!" subHeading="Analytics and Reports!"/>
            <DashboardSummary />
            <DashboardDetails />
            <Footer />
        </main>
     );
}
 
export default Dashboard;