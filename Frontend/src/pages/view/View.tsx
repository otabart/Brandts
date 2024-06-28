//Import Needed Components
import HeroSection from "../../components/HeroSection";
import Campaign from "../../components/view/Campaign";
import Footer from "../../components/HomePage/Footer";

//Import Needed Images
import viewImg from "/images/view.svg";
import viewImg1 from "/images/flipView.svg";



const View = () => {
    return ( 
        <main>
            <HeroSection imageUrl={viewImg} imageUrl1={viewImg1} heading="Time to Shine!" subHeading="Showcase Your Creativity!"/>
            <Campaign/>
            <Footer />
        </main>
     );
}
 
export default View;