import { Link } from "react-router-dom";

//Import Needed Images
import secondImg from "/images/second.svg"


const SecondSection = () => {
    return (
        <main className="py-5 md:py-10 lg:py-20 px-5 sm:px-10 md:px-15 xl:px-20 text-xs md:text-sm xl:text-base mt-10">
            <div className="bg-accentColor text-center py-2 rounded-3xl w-24 sm:w-28 md:w-32 lg:w-40 xl:w-44 font-medium my-10">
                <p>SERVICES</p>
            </div>
            <div className="flex flex-col-reverse gap-y-5 md:gap-y-0 md:flex-row md:justify-between">
                <div className="md:w-[48%] xl:w-[45%]">
                    <img
                        src={secondImg}
                        alt="Services Image"
                        className="w-[32rem]"
                    />
                </div>
                <div className="md:w-[48%] xl:w-[45%]">
                    <p className="font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl">Tailored Campaign Services</p>
                    <div className="mt-4 flex gap-y-10 flex-col">
                        <div className="flex flex-col gap-y-2">
                            <p className="text-lg md:text-xl xl:text-2xl font-medium">Create a campaign</p>
                            <p>Craft compelling campaigns with ease. At Brandts, we empower brands to create impactful marketing campaigns that resonate with their audience. From conceptualizing your campaign to setting measurable goals, our platform provides all the tools you need to succeed. Start your campaign today and watch your brand reach new heights</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-lg md:text-xl xl:text-2xl font-medium">Participate in a campaign</p>
                            <p>Join exciting campaigns and showcase your creativity. As a content creator, you have the opportunity to collaborate with top brands and bring their vision to life. Submit your entries, engage with other creators, and gain recognition for your work. Dive into the world of Brandts and make your mark.</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-lg md:text-xl xl:text-2xl font-medium">Manage your campaign</p>
                            <p>Effortlessly manage your campaigns from start to finish. Monitor performance metrics, track engagement, and optimize your strategy with our intuitive dashboard. Stay on top of your campaign’s progress, make data-driven decisions, and ensure your brand's success. With Brandts, campaign management has never been easier.</p>
                        </div>
                    </div>
                    <div className="my-10">
                        <Link to="/create" className="px-5 py-3 bg-primaryBlue border-inherit rounded-3xl text-white hover:bg-accentColor hover:text-black duration-300">Get Started</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SecondSection;