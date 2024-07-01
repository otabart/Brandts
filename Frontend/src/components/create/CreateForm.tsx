//Import Needed Components
import { ChangeEvent, FormEvent, useState } from 'react';
import Input from "./Input";
import Dropdown from "./Dropdown";

//Import Needed Images
import createImage from "../../../public/images/create.svg";

//Import Needed Data
import targetAudience from "../../data/targetAudience.json"
import apps from "../../data/apps.json"
import Textarea from "./Textarea";
import { useAccount } from 'wagmi';
interface CreateFormProps {
  onSubmit: (campaign: CampaignData) => void;
}

interface CampaignData {
  title: string;
  image: string;
  description: string;
  goal: string;
  duration: string;
  budget: string;
  requirement: string;
  targetAudience: string;
  app: string;
  additionalLink: string;
}

const CreateForm: React.FC<CreateFormProps> = ({ onSubmit }) => {
  const account = useAccount()

  const [campaign, setCampaign] = useState({
    title: '',
    image: '',
    description: '',
    goal: '',
    duration: '',
    budget: '',
    requirement: '',
    targetAudience: '',
    app: '',
    additionalLink: '',
    userId: account.address
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCampaign({
      ...campaign,
      [name]: value
    });
  };

  const handleDropdownChange = (id: string, value: string) => {
    setCampaign({
      ...campaign,
      [id]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(campaign);
  };


  return (
    <main className="relative flex justify-center lg:justify-between">
      <div className="fixed h-screen lg:h-auto lg:static lg:w-[50%] backdrop-blur-sm bg-white/30 flex items-center justify-center">
        <img
          src={createImage}
          alt="Hero Section Image"
          className="m-auto h-full bg-primaryBlue"
        />
      </div>
      <div className="absolute rounded-xl left top-10 z-[5] w-[90%] lg:rounded-none lg:h-full lg:static lg:w-[50%] backdrop-blur-sm bg-white/50 lg:bg-white p-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:p-14 2xl:p-20 text-center">
        <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Create a new Campaign</p>
        <p className="text-xs md:text-sm xl:text-base mt-1">Create, share, and measure campaign success effortlessly.</p>

        <form onSubmit={handleSubmit} className="mt-10 text-left flex flex-col gap-y-5 mx-auto">
          <Input name="title" value={campaign.title} type="text" id="title" placeholder="Eg: Kiki Dance Challenge" label="Campaign Title" required={true} otherClass="bg-white rounded-xl" onChange={handleChange} />
          <Input name="image" value={campaign.image} type="text" id="image" placeholder="Enter Your Image Link (URL)" label="Campaign Image" required={true} otherClass="bg-white rounded-xl" onChange={handleChange} />
          <Textarea value={campaign.description} onChange={handleChange} />
          <Input name="goal" value={campaign.goal} type="text" id="goal" placeholder="Enter Your Goal" label="Campaign Goal" required={true} otherClass="bg-white rounded-xl" onChange={handleChange} />
          <Input name="duration" value={campaign.duration} type="text" id="duration" placeholder="Eg: 3" label="Enter Campaign Duration(days)" required={true} otherClass="bg-white rounded-xl" onChange={handleChange} />
          <Input name="budget" value={campaign.budget} type="text" id="budget" title="Please enter only numbers (0-9)" placeholder="Amount in Ethereum Eg: 2" label="Campaign Budget" required={true} otherClass="bg-white rounded-xl" onChange={handleChange} />
          <Input name="requirement" value={campaign.requirement} type="text" id="requirement" placeholder="Eg: Three Minutes Video with at least 100 likes" label="Campaign Requirement" required={true} otherClass="bg-white rounded-xl" onChange={handleChange} />
          <Dropdown label="Campaign Audience" id="targetAudience" value={campaign.targetAudience} onChange={(value) => handleDropdownChange('targetAudience', value as unknown as string)} options={targetAudience} />
          <Dropdown label="Campaign Apps" id="app" value={campaign.app} onChange={(value) => handleDropdownChange('app', value as unknown as string)} options={apps} />
          <Input name="additionalLink" value={campaign.additionalLink} type="text" id="additionalLinks" placeholder="Additional Links?" label="Additional Links" required={true} otherClass="bg-white rounded-xl" onChange={handleChange} />
          {campaign.budget !== "" &&
            <strong>
              <p style={{ color: "red", marginTop: "5px" }}>
                You will be prompted to pay the sum of {campaign.budget} ETH in your dashboard
              </p>
            </strong>
          }
          <button type="submit" className="mt-10 text-xs md:text-sm xl:text-base px-5 py-4 bg-primaryBlue hover:bg-accentColor duration-300 rounded-xl">Create Campaign</button>
        </form>
      </div>
    </main >
  );
};

export default CreateForm;
