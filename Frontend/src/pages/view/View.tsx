//Import Needed Components
import HeroSection from "../../components/HeroSection";
import Campaign from "../../components/view/Campaign";


//Import Needed Images
import viewImg from "../../../public/images/view.svg";
import viewImg1 from "../../../public/images/flipView.svg";


const View = () => {
    return ( 
        <main>
            <HeroSection imageUrl={viewImg} imageUrl1={viewImg1} heading="Time to Shine!" subHeading="Showcase Your Creativity!"/>
            <Campaign/>
        </main>
     );
}
 
export default View;