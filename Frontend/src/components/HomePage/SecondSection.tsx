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
                            <p>Craft impactful campaigns with ease. Brandts empowers brands to create and manage marketing campaigns seamlessly. Input your details, fund via wallet, and let our smart contract technology handle the rest. Start today and elevate your brand.</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-lg md:text-xl xl:text-2xl font-medium">Participate in a campaign</p>
                            <p>Showcase your creativity in exciting campaigns. Collaborate with top brands, submit your video entries, and gain recognition. Join Brandts and make your mark with fair, transparent reward distribution.</p>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <p className="text-lg md:text-xl xl:text-2xl font-medium">Manage your campaign</p>
                            <p>Effortlessly manage your campaigns. Monitor performance, track engagement, and optimize your strategy with our intuitive dashboard. With Brandts, campaign management is simple and transparent.</p>
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