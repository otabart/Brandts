import { Link } from "react-router-dom";

//Import Needed Utils
import { createPreview } from "../../utils/cutSentence";

//Import Testing Images
import instagram from "/images/instagram.svg";

const CampaignCard = ({sampleData}: any) => {

  return (
    <main className="flex flex-wrap gap-5 xl:gap-10 text-xs md:text-sm xl:text-base">
        {sampleData.map((data) => (
        <div key={data.id} className="flex flex-col gap-y-3 min-w-[16rem] w-[16rem] sm:w[14rem] lg:w-[20rem] mt-4 shadow border border-[#F0F0F0] p-2 md:p-4 xl:p-6 py-8 rounded-2xl">
            <img className="size-10 sm:size-14 md:size-20 lg:size-24 xl:size-28 2xl:size-32 mx-auto" src={instagram}></img>
            <div className="mt-4">
              <p className="bg-textGrey rounded-3xl font-medium px-4 py-2">
                {data.title}
              </p>
            </div>
            <div className="mt-4">
                <p>
                  {createPreview(data.description, 20)}
                </p>
                <div className="mt-4 flex gap-x-3 items-center">
                  <p className="font-semibold">{data.budget}</p>
                  <p className="font-medium">{data.audience}</p>
                </div>
            </div>
            <Link className="mt-4 text-primaryBlue hover:text-bgDark duration-300" to={`/details`}>
              Read More
            </Link>
        </div>
        ))}
      
      
    </main>
  );
};

export default CampaignCard;
