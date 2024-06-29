//Import Needed Components
import HeroSection from "../../components/HeroSection";
import Details from "../../components/campaignDetails/Details";
import Submissions from "../../components/campaignDetails/Submissions";
import Footer from "../../components/HomePage/Footer";

//Import Needed Images
import viewImg from "/images/view.svg";
import viewImg1 from "/images/flipView.svg";



const CampaignDetails = () => {
    return ( 
        <main>
            <HeroSection imageUrl={viewImg} imageUrl1={viewImg1} heading="Time to Shine!" subHeading="Showcase Your Creativity!"/>
            <Details />
            <Submissions />
            <Footer />
        </main>
     );
}
 
export default CampaignDetails;