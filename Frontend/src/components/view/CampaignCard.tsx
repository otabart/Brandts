//Import Testing Images
import { Link } from "react-router-dom";
import instagram from "../../../public/images/instagram.svg";

const CampaignCard = () => {
  return (
    <main className="flex flex-wrap gap-5 text-xs md:text-sm xl:text-base">
      <div className="flex flex-col gap-y-3 min-w-[16rem] w-[20rem] mt-4 shadow border border-[#F0F0F0] p-2 md:p-4 xl:p-6 py-8 rounded-2xl">
        <img
          className="size-10 sm:size-14 md:size-20 lg:size-24 xl:size-28 2xl:size-32 mx-auto"
          src={instagram}
        ></img>
        <div className="flex gap-x-3 mt-4">
          <p className="bg-textGrey rounded-3xl font-medium px-4 py-2">
            Campaign Title
          </p>
          <p className="bg-textGrey rounded-3xl font-medium px-4 py-2">
            Audience
          </p>
        </div>
        <div className="mt-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
            orci ac auctor augue. Nec feugiat in fermentum posuere urna nec
            tincidunt praesent. Morbi tristique senectus et netus et malesuada
            fames.
          </p>
          <p className="font-semibold mt-4">Budget</p>
        </div>
        <Link className="mt-4 text-primaryBlue" to="/">
          Read More
        </Link>
      </div>
      <div className="flex flex-col gap-y-3 min-w-[16rem] w-[20rem] mt-4 shadow border border-[#F0F0F0] p-2 md:p-4 xl:p-6 py-8 rounded-2xl">
        <img
          className="size-10 sm:size-14 md:size-20 lg:size-24 xl:size-28 2xl:size-32 mx-auto"
          src={instagram}
        ></img>
        <div className="flex gap-x-3 mt-4">
          <p className="bg-textGrey rounded-3xl font-medium px-4 py-2">
            Campaign Title
          </p>
          <p className="bg-textGrey rounded-3xl font-medium px-4 py-2">
            Audience
          </p>
        </div>
      </div>
    </main>
  );
};

export default CampaignCard;
