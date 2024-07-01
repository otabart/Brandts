//Import Needed Types
import { CustomHeroSection } from "../types/default";

const HeroSection = ({imageUrl, imageUrl1, heading, subHeading}: CustomHeroSection) => {
    return ( 
        <main className="flex flex-col gap-y-5 sm:flex-row sm:justify-between sm:items-center bg-primaryBlue py-20 md:py-10 px-5 sm:px-10 md:px-15 xl:px-20">
            <div className="flex flex-col gap-y-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">{heading}</h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">{subHeading}</p>
            </div>
            <div className="sm:w-[48%]">
                <img className="hidden sm:block w-[32rem] mx-auto" src={imageUrl}></img>
                <img className="sm:hidden w-[32rem] mx-auto" src={imageUrl1 ? imageUrl1 : imageUrl}></img>
            </div>
        </main>
     );
}
 
export default HeroSection;