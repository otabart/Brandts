import { Link } from "react-router-dom";

//Import Images
import HeroSectionImage from "/images/casual-life-3d-woman-taking-funny-photo-with-dog_result.svg";

const HeroSection = () => {
  return (
    <main className="flex flex-col-reverse gap-y-10 md:flex-row md:justify-between md:items-center py-20 md:py-32 xl:py-40 px-5 sm:px-10 md:px-15 xl:px-20 background">
      <div className="w-full md:w-[48%] xl:w-[45%] h-auto backdrop-blur-sm bg-white/30 rounded-2xl p-8">
        <img
          src={HeroSectionImage}
          alt="Hero Section Image"
          className="w-[32rem] mx-auto"
        />
      </div>

      <div className="w-full flex flex-col md:w-[48%] xl:w-[45%] text-sm md:text-base xl:text-lg">
        <h1 className="font-semibold text-2xl lg:text-4xl xl:text-5xl">
          Empowering Brands and Creators
        </h1>
        <p className="font-medium text-base lg:text-lg xl:text-xl mt-2">
          Create, share, and measure campaign success effortlessly.
        </p>
        <p className="mt-6 lg:mt-10 md:text-sm lg:text-lg">
          Join Brandts to create impactful campaigns and share your innovative
          ideas. Track performance metrics, engage with your audience, and
          elevate your brand's success. Start now and transform your audience
          engagement.
        </p>
        <Link to="create" className="bg-white text-primaryBlue text-center rounded-xl w-40 py-3 mt-10 lg:mt-14 hover:-translate-y-1 hover:translate-x-1 duration-300">Get Started</Link>
      </div>
    </main>
  );
};

export default HeroSection;
