import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Import Needed Components
import Input from "../create/Input";
import { useAccount } from "wagmi";

const Details: React.FC<any> = ({ campaign, loading, error, onSubmit }) => {
    const account = useAccount()

    const [seeForm, setSeeForm] = useState<boolean>(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submissionUrl, setSubmissionUrl] = useState('');

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error.toString()}</p>;
    }

    if (!campaign) {
        return <p>No campaign found</p>;
    }

    const handleLinkSubmit = (e: any) => {
        e.preventDefault();
        onSubmit({
            name, email, submissionUrl, userId: account.address, campaignId: campaign._id
        });
        setName('');
        setEmail('');
        setSubmissionUrl('');
    };

    const toggleForm = () => {
        setSeeForm((prev) => !prev)
    }

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success('Link copied to clipboard!');
        } catch (err) {
            toast.error('Failed to copy the link.');
        }
    };

    return (
        <section className="py-5 md:py-10 lg:py-20 px-5 sm:px-10 md:px-15 xl:px-20 text-xs md:text-sm xl:text-base mt-10">
            <main className="flex flex-col gap-y-5 md:flex-row md:justify-between ">
                <div className="flex flex-col gap-y-5 md:w-[48%]">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium">{campaign.title}</p>
                    <img src={campaign.image} className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-auto mx-auto max-w-full"></img>
                    <p>{campaign.description}</p>
                    <button onClick={toggleForm} className="w-40 md:w-60 rounded-3xl px-5 py-3 bg-bgDark border-inherit border-2 text-white hover:text-inherit hover:bg-white duration-300">{seeForm ? "Close" : "Apply"}</button>
                    {/* You can make it a separate component, depending on how you wanna handle the submission */}
                    {seeForm &&
                        <form className="my-10" action="" onSubmit={handleLinkSubmit}>
                            <Input
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                label="Your Name"
                                placeholder="Enter Your Name Here"
                                required={true}
                                style={{ marginBottom: "20px" }}
                                otherClass="rounded-2xl focus:border-accentColor" />
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                label="Your Email"
                                placeholder="Enter Your Email Here"
                                style={{ marginBottom: "20px" }}
                                required={true}
                                otherClass="rounded-2xl focus:border-accentColor" />
                            <Input
                                type="url"
                                value={submissionUrl}
                                onChange={(e) => setSubmissionUrl(e.target.value)}
                                id="url"
                                label="Your Submission Url"
                                placeholder="Enter Your Submission Url Here"
                                required={true}
                                otherClass="rounded-2xl focus:border-accentColor" />
                            <button className="w-40 md:w-60 mt-4 rounded-3xl px-5 py-3 bg-primaryBlue border-inherit border-2 text-white hover:text-inherit hover:bg-accentColor duration-300" type="submit">Submit Url</button>
                        </form>
                    }
                </div>
                <section className="md:w-[48%] flex flex-col gap-y-5 md:gap-y-10 mt-10 md:mt-0">
                    <p className={`font-bold`}>{campaign.status}</p>
                    <div>
                        <div className="flex gap-x-1 items-center">
                            <p className="font-medium">01</p>
                            <div className="border border-b border-black w-full border-opacity-10"></div>
                        </div>
                        <div className="flex flex-col gap-y-3 mt-4">
                            <p className="text-sm md:text-base xl:text-lg font-semibold">Goal</p>
                            <p>{campaign.goal}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-x-1 items-center">
                            <p className="font-medium">02</p>
                            <div className="border border-b border-black w-full border-opacity-10"></div>
                        </div>
                        <div className="flex flex-col gap-y-3 mt-4">
                            <p className="text-sm md:text-base xl:text-lg font-semibold">Duration</p>
                            <p>{campaign.duration} days</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-x-1 items-center">
                            <p className="font-medium">03</p>
                            <div className="border border-b border-black w-full border-opacity-10"></div>
                        </div>
                        <div className="flex flex-col gap-y-3 mt-4">
                            <p className="text-sm md:text-base xl:text-lg font-semibold">Budget, Audience and apps</p>
                            <p><strong>{campaign.budget} Ethereum</strong> pool to be distributed, <strong>Target Audience:</strong> {campaign.targetAudience} and should be on <strong>{campaign.app}</strong></p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-x-1 items-center">
                            <p className="font-medium">04</p>
                            <div className="border border-b border-black w-full border-opacity-10"></div>
                        </div>
                        <div className="flex flex-col gap-y-3 mt-4">
                            <p className="text-sm md:text-base xl:text-lg font-semibold">Requirements and additional links</p>
                            <p>{campaign.requirement}</p>
                            <p> <a style={{ color: "#1DA1F2" }} href={campaign.additionalLink}>Additional Link</a></p>
                        </div>
                    </div>
                    <div>
                        <button onClick={copyLink} className="w-40 md:w-60 mt-4 rounded-3xl px-5 py-3 bg-primaryBlue border border-primaryBlue text-white hover:text-inherit hover:bg-accentColor duration-300" type="submit">Copy Url</button>
                        <ToastContainer />
                    </div>
                </section>
            </main>
        </section>

    );
}

export default Details;