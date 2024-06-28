import { useState } from "react";

//Import Needed Components
import Input from "../create/Input";

//Import Needed Images
import x from "/images/X.svg";

const Details = () => {

    const [seeForm, setSeeForm] = useState<boolean>(false)

    const toggleForm = () => {
        setSeeForm((prev) => !prev)
    }

    return ( 
        <section className="py-5 md:py-10 lg:py-20 px-5 sm:px-10 md:px-15 xl:px-20 text-xs md:text-sm xl:text-base mt-10">
            <main className="flex flex-col gap-y-5 md:flex-row md:justify-between ">
                <div className="flex flex-col gap-y-5 md:w-[48%]">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium">Campaign Title</p>
                    <img src={x} className="size-10 sm:size-14 md:size-20 lg:size-24 xl:size-28 2xl:size-32"></img>
                    <p>campaign description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus orci ac auctor augue. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tristique senectus et netus et malesuada fames</p>
                    <button onClick={toggleForm} className="w-40 md:w-60 rounded-3xl px-5 py-3 bg-bgDark border-inherit border-2 text-white hover:text-inherit hover:bg-white duration-300">Apply</button>
                    {/* You can make it a separate component, depending on how you wanna handle the submission */}
                    {seeForm &&
                        <form className="my-10" action="">
                            <Input id="url" label="Your Submission Url" type="text" placeholder="Enter Your Submission Url Here" required={true} otherClass="rounded-2xl focus:border-accentColor"/>
                            <button className="w-40 md:w-60 mt-4 rounded-3xl px-5 py-3 bg-primaryBlue border-inherit border-2 text-white hover:text-inherit hover:bg-accentColor duration-300" type="submit">Submit Url</button>
                        </form>
                    }
                </div>
                <section className="md:w-[48%] flex flex-col gap-y-5 md:gap-y-10 mt-10 md:mt-0">
                    <p className={`font-bold`}>Campaign Status</p>
                    <div>
                        <div className="flex gap-x-1 items-center">
                            <p className="font-medium">01</p>
                            <div className="border border-b border-black w-full border-opacity-10"></div>
                        </div>
                        <div className="flex flex-col gap-y-3 mt-4">
                            <p className="text-sm md:text-base xl:text-lg font-semibold">Goal</p>
                            <p>campaign goal Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus orci ac auctor augue. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Morbi tristique senectus et netus et malesuada fames</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-x-1 items-center">
                            <p className="font-medium">02</p>
                            <div className="border border-b border-black w-full border-opacity-10"></div>
                        </div>
                        <div className="flex flex-col gap-y-3 mt-4">
                            <p className="text-sm md:text-base xl:text-lg font-semibold">Duration</p>
                            <p>campaign duration</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-x-1 items-center">
                            <p className="font-medium">03</p>
                            <div className="border border-b border-black w-full border-opacity-10"></div>
                        </div>
                        <div className="flex flex-col gap-y-3 mt-4">
                            <p className="text-sm md:text-base xl:text-lg font-semibold">Budget, Audience and apps</p>
                            <p>campaign budget, audience and apps</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-x-1 items-center">
                            <p className="font-medium">04</p>
                            <div className="border border-b border-black w-full border-opacity-10"></div>
                        </div>
                        <div className="flex flex-col gap-y-3 mt-4">
                            <p className="text-sm md:text-base xl:text-lg font-semibold">Requirements and additional links</p>
                            <p>campaign requirements and additional links</p>
                        </div>
                    </div>
                    <button className="text-left font-semibold text-primaryBlue hover:text-accentColor duration-300">Copy Campaign Link</button>
                </section>
            </main>
        </section>
        
     );
}
 
export default Details;