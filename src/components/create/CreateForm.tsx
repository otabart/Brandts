//Import Needed Components
import Input from "./Input";

//Import Needed Images
import createImage from "../../../public/images/create.svg";

const CreateForm = () => {
  return (
    <main className="relative h-screen lg:flex lg:flex-row lg:justify-between bg-primaryBlue">
      <div className="w-full lg:w-[50%] backdrop-blur-sm bg-white/30 py-6 h-full flex items-center justify-center">
        <img
          src={createImage}
          alt="Hero Section Image"
          className="m-auto py-6"
        />
      </div>
      <div className="absolute h-auto size-80 rounded-xl top-10 z-[5] w-[90%] lg:rounded-none lg:h-full lg:static lg:w-[50%] backdrop-blur-sm bg-white/50 lg:bg-white p-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:p-20 text-center">
        <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Create a new Campaign</p>
        <p className="text-xs md:text-sm xl:text-base mt-1">Create, share, and measure campaign success effortlessly.</p>

        <form action="" className="mt-10 text-left flex flex-col gap-y-5 mx-auto">
            <Input type="text" id="title" placeholder="Enter Your Campaign Title" label="Campaign Title" required={true} otherClass="bg-white rounded-xl"/>
            <Input type="text" id="image" placeholder="Enter Your Image Link (URL)" label="Campaign Image" required={true} otherClass="bg-white rounded-xl"/>
            <Input type="text" id="goal" placeholder="Enter Your Goal" label="Campaign Goal" required={true} otherClass="bg-white rounded-xl"/>
            <Input type="text" id="duration" pattern="\d+" title="Please enter only numbers (0-9)" placeholder="Enter Campaign Duration" label="Campaign Duration" required={true} otherClass="bg-white rounded-xl"/>
            <Input type="text" id="additionalLinks" placeholder="Additional Links?" label="Additional Links" required={true} otherClass="bg-white rounded-xl"/>
        </form>
      </div>
    </main>
  );
};

export default CreateForm;
