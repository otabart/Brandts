//Import Needed Components
import Input from "./Input";
import Dropdown from "./Dropdown";

//Import Needed Images
import createImage from "../../../public/images/create.svg";

//Import Needed Data
import targetAudience from "../../../public/data/targetAudience.json"
import apps from "../../../public/data/apps.json"

const CreateForm = () => {
  return (
    <main className="relative lg:flex lg:flex-row lg:justify-between bg-primaryBlue">
      <div className="w-full h-screen lg:h-auto lg:w-[50%] backdrop-blur-sm bg-white/30 py-6 flex items-center justify-center">
        <img
          src={createImage}
          alt="Hero Section Image"
          className="m-auto py-6"
        />
      </div>
      <div className="absolute h-auto size-80 rounded-xl top-10 z-[5] w-[90%] lg:rounded-none lg:h-full lg:static lg:w-[50%] backdrop-blur-sm bg-white/50 lg:bg-white p-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:p-14 2xl:p-20 text-center">
        <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Create a new Campaign</p>
        <p className="text-xs md:text-sm xl:text-base mt-1">Create, share, and measure campaign success effortlessly.</p>

        <form action="" className="mt-10 text-left flex flex-col gap-y-5 mx-auto">
            <Input type="text" id="title" placeholder="Eg: Kiki Dance Challenge" label="Campaign Title" required={true} otherClass="bg-white rounded-xl"/>
            <Input type="text" id="image" placeholder="Enter Your Image Link (URL)" label="Campaign Image" required={true} otherClass="bg-white rounded-xl"/>
            <Input type="text" id="goal" placeholder="Enter Your Goal" label="Campaign Goal" required={true} otherClass="bg-white rounded-xl"/>
            <Input type="text" id="duration" placeholder="Eg: Three Weeks" label="Enter Campaign Duration" required={true} otherClass="bg-white rounded-xl"/>
            <Input type="text" id="budget" pattern="\d+" title="Please enter only numbers (0-9)" placeholder="Amount in Dollars Eg: 5,000" label="Campaign Budget" required={true} otherClass="bg-white rounded-xl"/>
            <Input type="text" id="requirement" placeholder="Eg: Three Minutes Video" label="Campaign Requirement" required={true} otherClass="bg-white rounded-xl"/>
            <Dropdown label="Campaign Audience" id="audience" options={targetAudience}/>
            <Dropdown label="Campaign Apps" id="apps" options={apps}/>
            <Input type="text" id="additionalLinks" placeholder="Additional Links?" label="Additional Links" required={true} otherClass="bg-white rounded-xl"/>
            <button type="submit" className="mt-4 text-xs md:text-sm xl:text-base px-5 py-4 bg-primaryBlue hover:bg-accentColor duration-300 rounded-xl">Create Campaign</button>
        </form>
      </div>
    </main>
  );
};

export default CreateForm;
