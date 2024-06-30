import { Link } from "react-router-dom";

//Import Needed Utils
import { createPreview } from "../../utils/cutSentence";

const CampaignCard = ({ campaigns }: any) => {

  return (
    <main className="flex flex-wrap gap-5 xl:gap-10 text-xs md:text-sm xl:text-base">
      {campaigns.map((data: any) => (
        <div key={data._id} className="flex flex-col gap-y-3 min-w-[16rem] w-[16rem] sm:w[14rem] lg:w-[20rem] mt-4 shadow border border-[#F0F0F0] p-2 md:p-4 xl:p-6 py-8 rounded-2xl">
          <img className="size-10 sm:size-14 md:size-20 lg:size-24 xl:size-28 2xl:size-32 mx-auto" src={data.image}></img>
          <div className="mt-4">
            <p className="bg-textGrey rounded-3xl font-medium px-4 py-2">
              {data.title}
            </p>
          </div>
          <div className="mt-4">
            <p>
              {data.description ? createPreview(data.description, 20) : null}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <p className="font-semibold"><strong>Pool:</strong> {data.budget} Eth</p>
              <p className="font-medium"><strong>Duration:</strong> {data.duration} days</p>
            </div>
          </div>
          <Link className="mt-4 text-primaryBlue hover:text-bgDark duration-300" to={`/details/${data._id}`}>
            Read More
          </Link>
        </div>
      ))}
    </main>
  );
};

export default CampaignCard;
